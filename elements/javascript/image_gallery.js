var slideIndex = 1;
var used_slide = false;

showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
	used_slide = true;
}

function currentSlide(n) {
	showSlides(slideIndex = n);
	used_slide = true;
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slideshow");
	if (n > slides.length) {slideIndex = 1}		
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";	
	}
	slides[slideIndex-1].style.display = "block";	
}


// Show Pictures without text in front
function bigView() {
	var body = document.getElementsByTagName("body")[0];

	if (body.classList.contains("big_view") == false) {
		body.classList.add("big_view");
	}
	else {
		body.classList.remove("big_view");
	}
}


// Change images if user hasn't clicked to change slide
setTimeout(autoSlides, 5000);

function autoSlides() {
	if (used_slide == false) {
		setTimeout(autoSlides, 5000);
		showSlides(slideIndex += 1);
	}
}