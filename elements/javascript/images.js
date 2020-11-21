
// Big Images
function onClick(element) {
	document.getElementById("img").src = element.src;
	document.getElementById("bigImg").style.display = "block";
}



/// fix broken images / lazy loading
var images = document.getElementsByTagName("img");
for (i = 0; i < images.length; i++) {
	images[i].onerror = function() {this.onerror=null;this.src="https://rollmaterial-rhb.netlify.app/elements/noimage.png";}
	images[i].loading = "lazy";
}
