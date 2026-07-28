const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let highlightedDot;

const arrowLeft = document.getElementById('arrow_left');
const arrowRight = document.getElementById('arrow_right');

// Dots

const dotsContainer = document.getElementsByClassName('dots')[0];

slides.forEach(() => {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	dotsContainer.appendChild(dot);
});

const selectedDot = (number = 0) => {
	dotsContainer.getElementsByClassName('dot')[number].classList.add('dot_selected');
};


arrowLeft.addEventListener('click', () => {
	highlightedDot === 0 ? selectedDot(slides.length) : selectedDot(highlightedDot - 1)
});

arrowRight.addEventListener('click', () => {
	console.log('testouille de droite');
});
