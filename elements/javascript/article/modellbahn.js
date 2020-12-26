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
getjson.open("GET", "https://raw.githubusercontent.com/CMD-Golem/prmodellbau/master/elements/json/modellbahn.json", true);
getjson.send();