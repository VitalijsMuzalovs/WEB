if(!localStorage.pageMainColor){
  localStorage.pageMainColor = 'var(--muzalovsBlue)';
  document.documentElement.style.setProperty('--mainColor', localStorage.pageMainColor);
}else{
  document.documentElement.style.setProperty('--mainColor', localStorage.pageMainColor);
}

function changeMainColor(event){
  let myColor = getComputedStyle(event.currentTarget).backgroundColor;
  localStorage.pageMainColor = myColor;
  document.documentElement.style.setProperty('--mainColor', myColor);
}

// ##### Automatic Slideshow #####

let slideIndex = 0;
showSlides()
myTimeoutID = setInterval(showSlides, 5000);

function showSlides(param){
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  if(param=="\+"){
    slideIndex++;
  }else if(param=="\-"){
    slideIndex--;
  }else{
    slideIndex++;
  }

  if (slideIndex > slides.length) {slideIndex = 1}
  if (slideIndex < 1) {slideIndex = slides.length}
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Next/previous controls
function plusSlides(n) {
  clearTimeout(myTimeoutID)
  if(n>0){
    showSlides("+")
  }else if(n<0){
    showSlides("-")
  }
}

//Thumbnail image controls
function currentSlide(n) {
  clearTimeout(myTimeoutID)
  showSlides(slideIndex = n-1);
}

function autoSlideShow(){
  myTimeoutID = setInterval(showSlides, 5000);
}