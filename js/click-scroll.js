//jquery-click-scroll
//by syamsul'isul' Arifin

var sectionArray = [1, 2, 4, 5];

$(document).scroll(function(){
    var docScroll = $(document).scrollTop();
    var docScroll1 = docScroll + 1;

    $.each(sectionArray, function(index, value){
        var target = $('#' + 'section_' + value);
        if (target.length > 0) {
            var offsetSection = target.offset().top - 154;

            if ( docScroll1 >= offsetSection ){
                $('.navbar-nav .nav-link').removeClass('active').addClass('inactive');  
                $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active').removeClass('inactive');
            }
        }
    });
});

$.each(sectionArray, function(index, value){
    $('.click-scroll').eq(index).click(function(e){
        var target = $('#' + 'section_' + value);
        if (target.length > 0) {
            var offsetClick = target.offset().top - 154;
            e.preventDefault();
            $('html, body').animate({
                'scrollTop':offsetClick
            }, 300);
        }
    });
});

$(document).ready(function(){
    if ($('#section_1').length > 0) {
        $('.navbar-nav .nav-item .nav-link').addClass('inactive');    
        $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active').removeClass('inactive');
    }
});
