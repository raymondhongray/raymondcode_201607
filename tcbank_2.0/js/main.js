var istriggerPlane = 0;

function init() {
    // $('.container-01').css('height', $('.menu-bg').height() + 20);
    $('.container-02').css('height', ($('.pad-bg').height() * 1.5));
    $('.container-03').css('height', $('.c3_content-bg').height() * 1.5);

    // if ($(window).width() > 1400) {
    //  $('.container-04').css('height', $('.c4_content').height() + ($('.dotted-line-01').height() * 2) + ($('.formula-bg').height() * 1.5));
    // } else {
    //  $('.container-04').css('height', $('.c4_content').height() + ($('.dotted-line-01').height() * 2) + ($('.formula-bg').height() * 2));
    // }
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

    if (!$(".bird-01 .bird-wing").hasClass('wingdown')) {

        $(".bird-01 .bird-wing").addClass('wingdown');

        setTimeout(function() {
            $(".bird-01 .bird-wing").removeClass('wingdown');
        }, 500);
    }

    if (!$(".bird-02 .bird-wing").hasClass('wingup')) {

        $(".bird-02 .bird-wing").addClass('wingup');

        setTimeout(function() {
            $(".bird-02 .bird-wing").removeClass('wingup');
        }, 500);
    }

    if (!$(".bird-03 .bird-wing").hasClass('wingdown')) {

        $(".bird-03 .bird-wing").addClass('wingdown');

        setTimeout(function() {
            $(".bird-03 .bird-wing").removeClass('wingdown');
        }, 500);
    }

    if ($(window).scrollTop() >= ($('.arrow-01').offset().top - 350) && istriggerPlane == 0 && !$(".container-02-plane").hasClass('active')) {
        istriggerPlane = 1;
        $(".container-02-plane").addClass('active');
        $(".container-02-plane").css('display', 'block');

        setTimeout(function() {
            $(".container-02-plane").removeClass('active');
            $(".container-02-plane").css('display', 'none');

        }, 4000);
    } 

    if ($(window).scrollTop() <= ($('.arrow-01').offset().top - 350) && istriggerPlane == 1) {
        istriggerPlane = 0;
    } 
});
