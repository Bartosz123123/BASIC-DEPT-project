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

const circle = document.querySelector('.circle');
const cursorLine = document.querySelector('.cursor-line');
const headerDesktop = document.querySelector('.animation-header');

const closeInitiatives = document.querySelector('.close-initiatives');
const initiativesDesktop = document.querySelector('.initiatives-desktop');
const initiativesBtnDesktop = document.querySelector('.btn-dots');
const animationRight = document.querySelector('.animation-right');
const swipeBox = document.querySelector('.box');

const mainCircle = document.querySelector('.main-circle');
const hero = document.querySelector('.hero');
const main = document.querySelector('.main');
const desktopNav = document.querySelector('.nav-desktop');

const closeInitiativesDesktop = () => {
	initiativesDesktop.classList.remove('show-initiatives-desktop');
	initiativesDesktop.classList.add('close-initiatives-desktop');
	animationRight.classList.remove('start-animation');
	swipeBox.classList.remove('slide-animation');

	circle.style.top = 50 + '%';
	circle.style.left = 50 + '%';
};

const showInitiativesDesktop = () => {
	initiativesDesktop.classList.add('show-initiatives-desktop');
	initiativesDesktop.classList.remove('close-initiatives-desktop');
	animationRight.classList.add('start-animation');
	swipeBox.classList.add('slide-animation');
};

const showInitiativesMenu = () => {
	initiativesBox.classList.add('active-initiatives');
};

const closeInitiativesMenu = () => {
	initiativesBox.classList.remove('active-initiatives');
};

const closeMenu = () => {
	menu.classList.remove('active-menu');
	menu.classList.add('close-menu');
	mainCircle.classList.remove('nav-is-active');

	mainCircle.style.top = 50 + '%';
	mainCircle.style.left = 50 + '%';

	setTimeout(() => {
		menu.classList.remove('close-menu');
	}, 350);
};

const handleMenu = () => {
	menu.classList.add('active-menu');
	menu.classList.remove('close-menu');

	mainCircle.classList.add('nav-is-active');
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

cursorLine.addEventListener('mousemove', (e) => {
	const x = e.clientX;
	const y = e.clientY;

	circle.style.left = x + 'px';
	circle.style.top = y + 'px';
});

main.addEventListener('mousemove', (e) => {
	const x = e.pageX;
	const y = e.pageY;

	mainCircle.style.left = x + 'px';
	mainCircle.style.top = y + 'px';
});

desktopNav.addEventListener('mousemove', () => {
	mainCircle.style.top = 50 + '%';
	mainCircle.style.left = 50 + '%';
	mainCircle.classList.add('back-circle');

	setTimeout(() => {
		mainCircle.classList.remove('back-circle');
	}, 300);
});

closeInitiatives.addEventListener('click', closeInitiativesDesktop);
initiativesBtnDesktop.addEventListener('click', showInitiativesDesktop);
initiativesBtn.addEventListener('click', showInitiativesMenu);
arrowBack.addEventListener('click', closeInitiativesMenu);
menuBtn.addEventListener('click', handleMenu);
closeMenuBtn.addEventListener('click', closeMenu);
