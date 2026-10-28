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

const dotsContainer = document.getElementsByClassName('dots')[0];

const pictures = document.getElementsByClassName('banner-img')[0];
const text = document.getElementById('banner').getElementsByTagName('p')[0];

const arrows = document.querySelectorAll('#banner .arrow');

const counter = (direction) => {
    highlightedDot = (highlightedDot + direction + slides.length) % slides.length;

    photoChanger(highlightedDot);
    textChanger(highlightedDot);

    dotsContainer.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('dot_selected', index === highlightedDot);
    });
};

const dotHighlighter = (counter = 0) => {
	//  add the dot_slected class to the dot corresponding to int counter
	dotsContainer.getElementsByClassName('dot')[counter].classList.add('dot_selected');
}

const photoChanger = (counter = 0) => {
	// change the source of the img to the one corresponding to the int counter
	// the name of the file comes from the slide array
	pictures.src=`./assets/images/slideshow/${slides[counter].image}`;
}

const textChanger = (counter = 0) => {
	// change the inside of the p to the corresponding tagLine from the slides array
	text.innerHTML = slides[counter].tagLine
}

// creation of the dots at the start of the page
slides.forEach(() => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dotsContainer.appendChild(dot);
});

// events listener for both the arrow calling the counter function on click
arrows.forEach((arrow) => {
    arrow.addEventListener('click', () => {
        counter(Number(arrow.dataset.direction));
    });
});

counter(0);