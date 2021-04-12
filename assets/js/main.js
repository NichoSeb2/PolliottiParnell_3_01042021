//! has to be a regular function to have the correct "this" context
$("button.navbar-toggler").on("click", function(e) {
	console.log("toggler clicked")

	$("#navBar").toggleClass("d-none");

	$(this).blur();
});