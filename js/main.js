window.addEventListener('DOMContentLoaded', function() {

	'use strict';

	let 
		menu = document.querySelector('.main-screen__menu'),
		logo = document.querySelector('.main-screen__logo');

	logo.addEventListener('click', function() {

		menu.classList.toggle('active');

	});	


	let 
		menuList = document.querySelectorAll('.main-screen__list'),
		form = document.querySelector('.main-screen__form'),
		closeForm = document.querySelector('.close-form');

	menuList[2].addEventListener('click', function(event) {
		
		form.classList.toggle('active');
		menu.classList.remove('active');
	});	
	closeForm.addEventListener('click', function() {
		form.classList.remove('active');
	});


	[].forEach.call(menuList, function(item) {
		item.addEventListener('click', function() {
			console.log('Вы кликнули' + item);
		});
	});

});