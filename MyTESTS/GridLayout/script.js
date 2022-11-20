document.documentElement.style.setProperty('--maincolor', localStorage.muzalovsPageMainColor);

let btnBlue = document.querySelector('#blue')
let btnPurple = document.querySelector('#purple')
let btnBlack = document.querySelector('#black')
let btnYellow = document.querySelector('#yellow')

btnBlue.onclick = () =>{
    document.documentElement.style.setProperty('--maincolor', 'var(--blue)');
    localStorage.muzalovsPageMainColor = 'var(--blue)'
}
btnPurple.onclick = () =>{
    document.documentElement.style.setProperty('--maincolor', 'var(--purple)');
    localStorage.muzalovsPageMainColor = 'var(--purple)'
}
btnBlack.onclick = () =>{
    document.documentElement.style.setProperty('--maincolor', 'var(--black)');
P}
btnYellow.onclick = () =>{
    document.documentElement.style.setProperty('--maincolor', 'var(--yellow)');
    localStorage.muzalovsPageMainColor = 'var(--yellow)'
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