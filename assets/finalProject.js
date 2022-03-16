const navLinks = document.getElementById("navLinks");

function showMenu() {
	navLinks.style.right = "0px";
}

function hideMenu() {
	navLinks.style.right = "-200px";
}

$('.scroll').on('click', function(e) {
	const tujuan = $(this).attr('href');
 	const elemenTujuan = $(tujuan);
	$('html , body').animate({
		scrollTop: elemenTujuan.offset().top - 75
	 });
 	e.preventDefault();
});