
$(document).ready(function(){
	$("textarea").keyup(function(e) {
	    while($(this).outerHeight() < this.scrollHeight + parseFloat($(this).css("borderTopWidth")) + parseFloat($(this).css("borderBottomWidth"))) {
	        $(this).height($(this).height()+1);
	    };
	});

	$("#commentrow").addClass('odd');
});