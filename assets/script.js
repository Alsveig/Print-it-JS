


window.addEventListener('load', function () {
	const slides = [
		{
			"image": "slide1.jpg",
			"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
		},
		{
			"image": "slide2.jpg",
			"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
		},
		{
			"image": "slide3.jpg",
			"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
		},
		{
			"image": "slide4.png",
			"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
		}
	]


	let boutonG = document.getElementById("fleche_gauche");
	let boutonD = document.getElementById("fleche_droite");
	boutonG.addEventListener('click', onClickLeft);
	boutonD.addEventListener('click', onClickRight);

	let dotContainer = document.getElementById("js-dots");
	let dotsArray = [];

	let image = document.querySelector(".banner-img");
	const imagePath = "./assets/images/slideshow/";
	image.src = imagePath + slides[0].image;

	let bannerText = document.getElementById("banner").querySelector("p");
	bannerText.innerHTML = slides[0].tagLine;

	for (let i = 0; i < slides.length; i++) {
		dotsArray[i] = document.createElement("span");
		dotsArray[i].classList.add("dot");
		dotContainer.appendChild(dotsArray[i]);
	}

	dotsArray[0].classList.add("dot_selected");
	let currentDot = 0;


	function onClickRight() {
		if (currentDot < 3) {
			dotsArray[currentDot].classList.remove("dot_selected");
			dotsArray[currentDot + 1].classList.add("dot_selected");
			
			currentDot++;
		}
		else {
			dotsArray[currentDot].classList.remove("dot_selected");
			dotsArray[0].classList.add("dot_selected");
			currentDot = 0;
		}
		image.src = imagePath + slides[currentDot].image;
		bannerText.innerHTML = slides[currentDot].tagLine;
	}

	function onClickLeft() {
		if (currentDot > 0) {
			dotsArray[currentDot].classList.remove("dot_selected");
			dotsArray[currentDot - 1].classList.add("dot_selected");
			currentDot--;
		}
		else {
			dotsArray[currentDot].classList.remove("dot_selected");
			dotsArray[3].classList.add("dot_selected");
			currentDot = 3;
		}
		image.src = imagePath + slides[currentDot].image;
		bannerText.innerHTML = slides[currentDot].tagLine;
	}
})






