function init() {
    $('.container-01').css('height', $('.menu-bg').height() + 20);
    $('.container-02').css('height', ($('.pad-bg').height() * 2) - 100);
     $('.container-03').css('height', '700px');
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
