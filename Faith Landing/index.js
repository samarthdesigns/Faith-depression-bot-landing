$(document).ready(function(){
    $('#ai-trigger').click(function(){
        $('.chat-bot').fadeIn(600);
    });

    $('#cross').click(function(){
        $('.chat-bot').fadeOut(600);
    });

    $("#scroller").click(function() {
        $('html, body').animate({
            scrollTop: $(".topper").offset().top
        },500);
    });
})