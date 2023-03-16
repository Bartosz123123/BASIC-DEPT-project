const menu = document.querySelector('.menu-links');
const menuBtn = document.querySelector('.btn');
const closeMenuBtn = document.querySelector('.btn-close');
const arrowBack = document.querySelector('.arrow-back');
const initiativesBox = document.querySelector('.initiatives');
const initiativesBtn = document.querySelector('.initiatives-btn');

const slider = document.querySelector('.swipe-box');
let isDown = false;
let startX;
let scrollLeft;

const showInitiativesMenu = () => {
	initiativesBox.classList.add('active-initiatives');
};

const closeInitiativesMenu = () => {
	initiativesBox.classList.remove('active-initiatives');
};

const closeMenu = () => {
	menu.classList.remove('active-menu');
	menu.classList.add('close-menu');

	setTimeout(() => {
		menu.classList.remove('close-menu');
	}, 350);
};

const handleMenu = () => {
	menu.classList.add('active-menu');
	menu.classList.remove('close-menu');
};

slider.addEventListener('mousedown', (e) => {
	isDown = true;
	startX = e.pageX - slider.offsetLeft;
	scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
	isDown = false;
});

slider.addEventListener('mouseup', () => {
	isDown = false;
});

slider.addEventListener('mousemove', (e) => {
	if (!isDown) return;
	e.preventDefault();
	const x = e.pageX - slider.offsetLeft;
	const walk = x - startX;
	slider.scrollLeft = scrollLeft - walk;
});



initiativesBtn.addEventListener('click', showInitiativesMenu);
arrowBack.addEventListener('click', closeInitiativesMenu);
menuBtn.addEventListener('click', handleMenu);
closeMenuBtn.addEventListener('click', closeMenu);
