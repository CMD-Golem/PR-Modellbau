var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
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

    document.getElementsByTagName("aside")[0].style.left = "0";
    document.getElementById("filter_close").style.display = "block";
  }

  else {
    body.classList.remove("big_view");

    document.getElementsByTagName("aside")[0].style.left = "-401px";
    document.getElementById("filter_close").style.display = "none";
  }
  
}