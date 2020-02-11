
window.addEventListener('DOMContentLoaded', function() {

	'use strict';

	let 
		burger = document.querySelector('.main-screen__burger'),
		menu = document.querySelector('.main-screen__menu'),
		drawingBurger = document.querySelector('.main-screen__drawing');


		burger.addEventListener('click', () => {

			menu.classList.toggle('active');
			drawingBurger.classList.toggle('active');
			burger.classList.toggle('active');

	});

});