$( document ).ready(function() {
	$('#g3c-search-toogle-btn').on('click', function(){
		$('#g3c-search-container').toggleClass('g3c-top0');
		if(!$('#search-input').is(':focus')){
			$('#search-input').focus();
		}
	});
	$('#g3c-search-remove-btn').on('click', function(){
		$('#g3c-search-container').removeClass('g3c-top0');
		$('#search-input').blur();
	});
});

$('body').on('click', '#g3c-search-toogle-btn', function () { 
	$('#g3c-search-container').toggleClass('g3c-top0');
	if(!$('#search-input').is(':focus')){
		$('#search-input').focus();
	}
});
$('body').on('click', '#g3c-search-remove-btn', function () { 
	$('#g3c-search-container').removeClass('g3c-top0');
		$('#search-input').blur();
});