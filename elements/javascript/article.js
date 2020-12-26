// Add article to list
var getjson = new XMLHttpRequest();
getjson.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
			var data = JSON.parse(this.responseText);
			const article = document.getElementById('article-list');

		const html = data.map(item => `
			<article class="${item.keywords} ${item.producer} ${item.art_nr}">
				<div class="img_container">
					<img src="${item.picture}" onclick="onClick(this)" onerror="this.onerror=null;this.src='https://prmodellbau.netlify.app/elements/pictures/noimage.png';" loading="lazy">
				</div>
				<p class="description">${item.description}</p>
				<p class="info">${item.producer}, ${item.scale}</p>
				<p class="info">Artikel Nr.: <span>${item.art_nr}</span></p>
				<p class="price">CHF ${item.price}</p>
			</article>

			`).join('');

		article.innerHTML = html;
	}
};
getjson.open("GET", "https://raw.githubusercontent.com/CMD-Golem/prmodellbau/master/elements/modellbahn.json", true);
getjson.send();



//#################################################################################################
// Site Search
function siteSearch() {
	var input, filter, ul, article, filterwords, i;
	input = document.getElementById("site_search");
	filter = input.value.toUpperCase();
	ul = document.getElementById("article-list");
	article = ul.getElementsByTagName("article");

	for (i = 0; i < article.length; i++) {
		filterwords = article[i].className;
		if (filterwords.toUpperCase().indexOf(filter) > -1) {
			article[i].classList.remove("hide_search");
		} else {
			article[i].classList.add("hide_search");
		}
	}
}



//#################################################################################################
// Filter //https://stackoverflow.com/a/45146800
var getFilter = function(category) {
	var filter = $("#filters ." + category + ":checked").map(function() {
		return '[class*="' + this.id + '"]';
	}).get().join(",");
	filter = (filter.length > 0) ? filter : "*";
	return filter;
}

$("#filters :checkbox").click(function() {
	var all = $("article");
	var tgts = all.filter(getFilter("scale")).filter(getFilter("vehicle")).filter(getFilter("holder")).filter(getFilter("producer"));
	all.not(tgts).addClass("hide_filter");
	tgts.removeClass("hide_filter");
});