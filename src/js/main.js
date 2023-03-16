const menu = document.querySelector('.menu-links');
const menuBtn = document.querySelector('.btn');
const closeMenuBtn = document.querySelector('.btn-close');
const arrowBack = document.querySelector('.arrow-back');
const initiativesBox = document.querySelector('.initiatives');
const initiativesBtn = document.querySelector('.initiatives-btn');

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

initiativesBtn.addEventListener('click', showInitiativesMenu);
arrowBack.addEventListener('click', closeInitiativesMenu);
menuBtn.addEventListener('click', handleMenu);
closeMenuBtn.addEventListener('click', closeMenu);
