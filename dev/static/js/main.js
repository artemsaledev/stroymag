$(document).ready(function () {
    svg4everybody({});

    var sandwich = function () {
	$(document).on('click','sandwich', function (){
	$(this).toggleClass('sandwich--active');
		});
	};
	sandwich();
});