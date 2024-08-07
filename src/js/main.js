const menu = document.querySelector('.menu-links');
const menuBtn = document.querySelector('.btn');
const closeMenuBtn = document.querySelector('.btn-close');
const arrowBack = document.querySelector('.arrow-back');
const initiativesBox = document.querySelector('.initiatives');
const initiativesBtn = document.querySelector('.initiatives-btn');
const body = document.querySelector('body');

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
const info = document.querySelector('.info');

const progressContainer = document.querySelector('.carousel-progress');
const progressBar = document.querySelector('.progress');
const swipeFeatured = document.querySelector('.swipe-fretured');
let root = document.documentElement;

const navBar = document.querySelector('.nav');
let lastScrollTop;
const title = document.querySelector('.desktop');

window.onscroll = function () {
	const sticky = title.offsetTop;
	const value = window.scrollY;
	const sum = sticky - value;
	let valueScroll = sum * -1;
	const min = -255;

	if (sum <= min) {
		return;
	} else if (sum <= 10) {
		title.style.transform = `matrix(1, 0, 0, 1, 0, ${valueScroll})`;
		title.style.padding = '10px 0 0 0';
	} else if (sum > 10) {
		title.style.padding = '0 0 0 0';
	}

	console.log(sum);
};

const magicNav = () => {
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if (scrollTop > lastScrollTop) {
		navBar.style.transform = `matrix(1, 0, 0, 1, 0, -129)`;
	} else {
		navBar.style.transform = `matrix(1, 0, 0, 1, 0, 0)`;
	}
	lastScrollTop = scrollTop;
};

const closeInitiativesDesktop = () => {
	initiativesDesktop.classList.remove('show-initiatives-desktop');
	initiativesDesktop.classList.add('close-initiatives-desktop');
	animationRight.classList.remove('start-animation');
	swipeBox.classList.remove('slide-animation');
	body.style.overflow = 'visible';

	circle.style.top = 50 + '%';
	circle.style.left = 50 + '%';
};

const showInitiativesDesktop = () => {
	initiativesDesktop.classList.add('show-initiatives-desktop');
	initiativesDesktop.classList.remove('close-initiatives-desktop');
	animationRight.classList.add('start-animation');
	swipeBox.classList.add('slide-animation');
	body.style.overflow = 'hidden';
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
	body.style.overflow = 'visible';

	mainCircle.style.top = 50 + '%';
	mainCircle.style.left = 50 + '%';

	setTimeout(() => {
		menu.classList.remove('close-menu');
	}, 350);
};

const handleMenu = () => {
	menu.classList.add('active-menu');
	menu.classList.remove('close-menu');
	body.style.overflow = 'hidden';

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

hero.addEventListener('mousemove', (e) => {
	const x = e.pageX;
	const y = e.pageY;

	mainCircle.style.left = x + 'px';
	mainCircle.style.top = y + 'px';

	mainCircle.classList.remove('back-circle');
});

desktopNav.addEventListener('mousemove', () => {
	mainCircle.style.top = 50 + '%';
	mainCircle.style.left = 50 + '%';
	mainCircle.classList.add('back-circle');
});

info.addEventListener('mousemove', () => {
	mainCircle.style.top = 50 + '%';
	mainCircle.style.left = 50 + '%';
	mainCircle.classList.add('back-circle');
});

swipeFeatured.addEventListener('mousedown', (e) => {
	isDown = true;
	startX = e.pageX - swipeFeatured.offsetLeft;
	scrollLeft = swipeFeatured.scrollLeft;
});

swipeFeatured.addEventListener('mouseleave', () => {
	isDown = false;
});

swipeFeatured.addEventListener('mouseup', () => {
	isDown = false;
});

swipeFeatured.addEventListener('mousemove', (e) => {
	if (!isDown) return;
	e.preventDefault();
	const x = e.pageX - swipeFeatured.offsetLeft;
	const walk = x - startX;
	swipeFeatured.scrollLeft = scrollLeft - walk;
	// const scroll = swipeFeatured.scrollLeft;
	// const leftToScroll =
	// 	document.body.getBoundingClientRect().width + window.innerWidth;
	// const scrollBarWidth = Math.floor((scroll / leftToScroll) * 100);
	// console.log(scrollBarWidth);

	// root.style.setProperty('--scroll-width', `${scrollBarWidth}%`);
});

closeInitiatives.addEventListener('click', closeInitiativesDesktop);
initiativesBtnDesktop.addEventListener('click', showInitiativesDesktop);
initiativesBtn.addEventListener('click', showInitiativesMenu);
arrowBack.addEventListener('click', closeInitiativesMenu);
menuBtn.addEventListener('click', handleMenu);
closeMenuBtn.addEventListener('click', closeMenu);
window.addEventListener('scroll', magicNav);
