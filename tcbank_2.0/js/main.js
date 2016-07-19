function init() {
    $('.container-01').css('height', $('.menu-bg').height() + 20);
    $('.container-02').css('height', ($('.pad-bg').height() * 2) - 100);
    $('.container-03').css('height', $('.c3_content-bg').height() * 1.5);

    if ($(window).width() > 1400) {
    	$('.container-04').css('height', $('.c4_content').height() + ($('.dotted-line-01').height() * 2) + ($('.formula-bg').height() * 1.5));
    } else {
    	$('.container-04').css('height', $('.c4_content').height() + ($('.dotted-line-01').height() * 2) + ($('.formula-bg').height() * 2.5));
    }
    
    $('.container-05').css('margin-top', $('.dotted-line-01').height());
}

$(document).ready(function() {

    init();
    var skrollr_obj = skrollr.init();

});

$(window).resize(function() {
    init();
});

$(window).scroll(function() {
	console.log($(window).scrollTop());
});
