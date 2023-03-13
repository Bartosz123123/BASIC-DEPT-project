const menu = document.querySelector('.menu-links');
const menuBtn = document.querySelector('.btn');
const closeMenuBtn = document.querySelector('.btn-close');

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

menuBtn.addEventListener('click', handleMenu);
closeMenuBtn.addEventListener('click', closeMenu);
