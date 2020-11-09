var getjson = new XMLHttpRequest();
getjson.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	    var data = JSON.parse(this.responseText);
	    const article = document.getElementById('article-list');

		const html = data.map(item => `
			<article data-filter="${item.keywords}">
				<img src="${item.picture}" onclick="onClick(this)">
				<p class="producer">${item.producer}</p>
				<p class="description">	${item.description}</p>
				<p class="art_nr">Artikel Nr.: <span>${item.art_nr}</span></p>
				<p class="price">CHF ${item.price}</p>
			</article>

			`).join('');

		article.innerHTML = html;
	}
};
getjson.open("GET", "https://raw.githubusercontent.com/CMD-Golem/cmd-golem.github.io/master/json/prmodellbau_search.json", true);
getjson.send();