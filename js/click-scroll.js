//jquery-click-scroll
//by syamsul'isul' Arifin

var sectionArray = [1, 2, 4, 5];

$(document).scroll(function(){
    var docScroll = $(document).scrollTop();
    var docScroll1 = docScroll + 1;

    $.each(sectionArray, function(index, value){
        var offsetSection = $('#' + 'section_' + value).offset().top - 154;

        if ( docScroll1 >= offsetSection ){
            $('.navbar-nav .nav-link').removeClass('active');
            $('.navbar-nav .nav-link:link').addClass('inactive');  
            $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active');
            $('.navbar-nav .nav-item .nav-link').eq(index).removeClass('inactive');
        }
    });
});

$.each(sectionArray, function(index, value){
    $('.click-scroll').eq(index).click(function(e){
        var offsetClick = $('#' + 'section_' + value).offset().top - 154;
        e.preventDefault();
        $('html, body').animate({
            'scrollTop':offsetClick
        }, 300)
    });
    
});

$(document).ready(function(){
    $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');    
    $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active');
    $('.navbar-nav .nav-item .nav-link:link').eq(0).removeClass('inactive');
});
