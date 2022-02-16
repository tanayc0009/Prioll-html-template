function toggleNavbar() {
	document.getElementById('navbar').classList.toggle('width');
}

//javascript for navigation bar effects on scroll
window.addEventListener('scroll', function () {
	const header = document.getElementById('header');
	header.classList.toggle('sticky', window.scrollY > 50);
});

/*  ------------------------------------------
			slider 
*/

// var sliderItems = document.getElementsByClassName('slide_items'); // [0,1,2]
// var buttons = document.getElementsByClassName('buttons');
