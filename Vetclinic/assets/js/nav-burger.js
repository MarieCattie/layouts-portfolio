$(document).ready(function() {
    $('.nav--mobile__close').on('click', function() {
        $(this).parent().parent().slideUp(500, function() { 
            $(this).css('display', 'none');
        })
    })
    $('.nav-icon--mobile').on('click', function() {
        $(document).find('.nav-mobile').slideDown(500, function() { 
            $(this).css('display', 'flex');
          })
          
    })
})