// has to be a regular function to have the correct "this" context
$("button.navbar-toggler").on("click", function(e) {
	$("#navbarNavAltMarkup").toggleClass("show");

	$(this).blur();
});