// Add article to list
var getjson = new XMLHttpRequest();
getjson.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var data = JSON.parse(this.responseText);
		const article = document.getElementById('article-list');

		const html = data.map(item => `
			<article class="${item.keywords} ${item.producer} ${item.art_nr}" onclick="onClickList(this)">
				<div class="img_container">
					<img src="${item.picture}" onclick="onClick(this)" onerror="this.onerror=null;this.src='https://prmodellbau.netlify.app/elements/pictures/noimage.png';">
				</div>
				<div class="description_container">
					<p class="description" onclick="event.stopPropagation();">${item.description}</p>
				</div>
				<p class="info" onclick="event.stopPropagation();">${item.producer}, ${item.scale}</p>
				<p class="info" onclick="event.stopPropagation();">Artikel Nr.: <span>${item.art_nr}</span></p>
				<p class="price" onclick="event.stopPropagation();">CHF ${item.price}</p>
			</article>

			`).join('');

		article.innerHTML = html;
		siteSearch();
		loadFilter();
	}
};
getjson.open("GET", json_url, true);
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

	if (article.length - document.getElementsByClassName("hide_search").length == 0) {
		document.getElementById("not-found").style.display = "block";
	}

	else {
		document.getElementById("not-found").style.display = "none";
	};
}


//#################################################################################################
// Add filter
var hashfilter = window.location.hash.substr(1);

if (document.getElementById(hashfilter) == null) {
	console.log("Filter in Hash isn't a real Filter!");
}
else {
	document.getElementById(hashfilter).checked = true;
	console.log("hashfilter");
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
	var tgts = all.filter(getFilter("filter01")).filter(getFilter("filter02")).filter(getFilter("filter03")).filter(getFilter("filter04")).filter(getFilter("filter05"));
	all.not(tgts).addClass("hide_filter");
	tgts.removeClass("hide_filter");
});


// Filter if return to page
function loadFilter() {
	var getFilter = function (category) {
		var filter = $("#filters ." + category + ":checked").map(function() {
			return '[class*="' + this.id + '"]';
		}).get().join(",");
		filter = (filter.length > 0) ? filter : "*";
		return filter;
	}

	var all = $("article");
	var tgts = all.filter(getFilter("filter01")).filter(getFilter("filter02")).filter(getFilter("filter03")).filter(getFilter("filter04")).filter(getFilter("filter05"));
	all.not(tgts).addClass("hide_filter");
	tgts.removeClass("hide_filter");
};



//#################################################################################################
//Activate Picture view if screen smaller than 1150px
if (screen.width <= 1150) {
	document.getElementById('article-list').classList.remove("list_view");
	document.getElementById('article-list').classList.add("picture_view");
}

//Get View from localStorage
if (localStorage.getItem("view") == "pictureView") {
	pictureView();
}


// Change View
function listView() {
	document.getElementById('article-list').classList.remove("picture_view");
	document.getElementById('article-list').classList.add("list_view");
	localStorage.setItem("view", "listView");

	document.getElementsByTagName("img").loading = "eager";
}

function pictureView() {
	document.getElementById('article-list').classList.remove("list_view");
	document.getElementById('article-list').classList.add("picture_view");
	localStorage.setItem("view", "pictureView");

	document.getElementsByTagName("img").loading = "lazy";
}


//#################################################################################################
//Scroll on top
var scroll_top = document.getElementById("scroll_top");

window.onscroll = function() {detectScroll()};

function detectScroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scroll_top.style.display = "block";
  } else {
    scroll_top.style.display = "none";
  }
}


function goTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//#################################################################################################
//Filter Button
function filterList() {
	var button = document.getElementById("filter_button");

	if (button.classList.contains("filter_open") == false) {
		button.classList.add("filter_open");

		document.getElementsByTagName("aside")[0].style.left = "0";
		document.getElementById("filter_close").style.display = "block";
	}

	else {
		button.classList.remove("filter_open");

		document.getElementsByTagName("aside")[0].style.left = "-401px";
		document.getElementById("filter_close").style.display = "none";
	}
	
}