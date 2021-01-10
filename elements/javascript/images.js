// Big Images
function onClick(element) {
	document.getElementById("img").src = element.src;
	document.getElementById("bigImg").style.display = "block";
}

function onClickList(element) {
	if (document.getElementById("article-list").classList.contains("list_view") == true) {
		document.getElementById("img").src = element.getElementsByTagName("img")[0].src;
		document.getElementById("bigImg").style.display = "block";
	}
}