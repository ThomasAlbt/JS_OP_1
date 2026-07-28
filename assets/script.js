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

const dotsContainer = document.getElementsByClassName('dots')[0];

const pictures = document.getElementsByClassName('banner-img')[0];

const text = document.getElementById('banner').getElementsByTagName('p')[0];

const counter = (number = 0, operation) => {
	let totalSlides = slides.length

	switch(operation){
		case("minus"):
			dotsContainer.getElementsByClassName('dot')[number].classList.remove('dot_selected');
			if (number == 0) {
				photoChanger(totalSlides -1);
				textChanger(totalSlides - 1);
				dotHighlighter(totalSlides - 1);
				highlightedDot = totalSlides - 1;
			} else {
				photoChanger(highlightedDot -1);
				textChanger(highlightedDot - 1);
				dotHighlighter(highlightedDot - 1);
				highlightedDot -= 1;
			}
			break;
		case("plus"):
			dotsContainer.getElementsByClassName('dot')[number].classList.remove('dot_selected');
			if (number == totalSlides - 1) {
				photoChanger(0);
				textChanger(0);
				dotHighlighter(0);
				highlightedDot = 0;
			} else {
				photoChanger(highlightedDot + 1);
				textChanger(highlightedDot + 1);
				dotHighlighter(highlightedDot + 1);
				highlightedDot += 1;
			}
			break;
	}
};


const dotHighlighter = (counter = 0) => {
	dotsContainer.getElementsByClassName('dot')[counter].classList.add('dot_selected');
}

const photoChanger = (counter = 0) => {
	pictures.src=`./assets/images/slideshow/${slides[counter].image}`;
}

const textChanger = (counter = 0) => {
	console.log(counter)
	text.innerHTML = slides[counter].tagLine
}


slides.forEach(() => {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	dotsContainer.appendChild(dot);
	dotHighlighter();
});

arrowLeft.addEventListener('click', () => {
	counter(highlightedDot, "minus");
});

arrowRight.addEventListener('click', () => {
	counter(highlightedDot, "plus");
});

// if too complicated put everything in those event listeners

// arrowLeft.addEventListener('click', () => {
// 	dotsContainer.getElementsByClassName('dot')[highlightedDot].classList.remove('dot_selected');
// 	highlightedDot == 0 ? highlightedDot = slides.length - 1 : highlightedDot -= 1;
// 	dotSelector(highlightedDot)
// });

// arrowRight.addEventListener('click', () => {
// 	dotsContainer.getElementsByClassName('dot')[highlightedDot].classList.remove('dot_selected');
// 	highlightedDot == slides.length - 1 ? highlightedDot = 0 : highlightedDot += 1;
// 	dotSelector(highlightedDot)
// });