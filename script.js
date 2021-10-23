// START
$('.in-page').on('click', function(){
    $('.page').removeClass('bot-stand-by');
    $('.page').addClass('bot-happy');
    $('.page').addClass('bot-happy-start');

    $('.in-page').off('click');


    // NEXT CLICK
    $('.in-page').on('click', function(){
        var act = $('nav span.act').parent(),
            prev = act.prev().find('span');

        if (!prev.length) {
            prev = $('nav li:last span');
        }

        prev.trigger('click');
    });
});


// NAV
$('nav span').on('click', function(){
    var a = $(this),
        el = a.data('href');

    $('nav .act').removeClass('act');
    $(a).addClass('act');
    $('.page').attr('class','page bot-' + el);
});
//AUD
window.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();
  });
  