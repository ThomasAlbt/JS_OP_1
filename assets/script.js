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

let highlightedDot = 0;

const arrowLeft = document.getElementById('arrow_left');
const arrowRight = document.getElementById('arrow_right');

// Dots

const dotsContainer = document.getElementsByClassName('dots')[0];

const selectedDot = (number = 0) => {
	dotsContainer.getElementsByClassName('dot')[number].classList.add('dot_selected');
	highlightedDot = number;
};

slides.forEach(() => {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	dotsContainer.appendChild(dot);
	selectedDot()
});

arrowLeft.addEventListener('click', () => {
	dotsContainer.getElementsByClassName('dot')[highlightedDot].classList.remove('dot_selected');
	highlightedDot === 0 ? selectedDot(slides.length - 1) : selectedDot(highlightedDot - 1)
});

arrowRight.addEventListener('click', () => {
	dotsContainer.getElementsByClassName('dot')[highlightedDot].classList.remove('dot_selected');
	highlightedDot == slides.length - 1 ? selectedDot(0) : selectedDot(highlightedDot + 1)
});
