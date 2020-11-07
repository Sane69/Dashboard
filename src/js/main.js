$(document).ready(function () {
    $('.info__head--btn').click(function() {
        $('.modal').addClass('active');
    });
    $('.modal__close--svg').click(function() {
        $('.modal').removeClass('active');
    });
    $('.header__burger').click(function() {
        $('.header__burger, .sidebar').toggleClass('active');
    });
});