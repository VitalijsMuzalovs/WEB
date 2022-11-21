if(!localStorage.pageMainColor){
  document.documentElement.style.setProperty('--maincolor', 'var(--muzalovsBlue)');
}else{
  document.documentElement.style.setProperty('--maincolor', localStorage.pageMainColor);
}

let btnBlue = document.querySelector('#blue')
let btnPurple = document.querySelector('#purple')
let btnBlack = document.querySelector('#black')
let btnYellow = document.querySelector('#yellow')

btnBlue.onclick = () =>{
    document.documentElement.style.setProperty('--maincolor', 'var(--muzalovsBlue)');
    localStorage.pageMainColor = 'var(--muzalovsBlue)'
}
btnPurple.onclick = () =>{
    document.documentElement.style.setProperty('--maincolor', 'var(--muzalovsPurple)');
    localStorage.pageMainColor = 'var(--muzalovsPurple)'
}
btnBlack.onclick = () =>{
    document.documentElement.style.setProperty('--maincolor', 'var(--muzalovsBlack)');
    localStorage.pageMainColor = 'var(--muzalovsBlack)'
}
btnYellow.onclick = () =>{
    document.documentElement.style.setProperty('--maincolor', 'var(--muzalovsYellow)');
    localStorage.pageMainColor = 'var(--muzalovsYellow)'
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