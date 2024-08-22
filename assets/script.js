const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let currentSlideIndex = 0;

function showSlide(index) {
  currentSlideIndex = index;
  const slideImage = document.querySelector(".banner-img");
  const slideTagLine = document.querySelector(".banner-tagline");

  slideImage.src = "./assets/images/slideshow/" + slides[index].image;
  slideTagLine.innerHTML = slides[index].tagLine;

  updateDot();
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
}

function prevSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  showSlide(currentSlideIndex);
}

const buttonLeft = document.querySelector(".arrow_left");
const buttonRight = document.querySelector(".arrow_right");

buttonLeft.addEventListener("click", prevSlide);
buttonRight.addEventListener("click", nextSlide);

function createDot() {
  const dotsContainer = document.querySelector(".dots");
  for (let index = 0; index < slides.length; index++) {
	const dot = document.createElement("span");
	dot.classList.add("dot");
	if (index === 0) dot.classList.add("dot_selected");
	dot.addEventListener("click", () => showSlide(index));
	dotsContainer.appendChild(dot);
  }
}

function updateDot() {
  const dots = document.querySelectorAll(".dot");

  for (let index = 0; index < dots.length; index++) {
	const dot = dots[index];
	if (index === currentSlideIndex) {
	  dot.classList.add("dot_selected");
	} else {
	  dot.classList.remove("dot_selected");
	}
  }
}

document.addEventListener("DOMContentLoaded", () => {
  createDot();
  showSlide(currentSlideIndex);
});
