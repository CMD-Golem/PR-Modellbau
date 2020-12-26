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