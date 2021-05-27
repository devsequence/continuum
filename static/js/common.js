$(window).on('scroll', function() {
    var $this = $(this),
        $header = $('.header'),
        $headerHeight = $('.header').height();
    if ($this.scrollTop() >= $headerHeight + 150) {
        $header.addClass('scroll-nav');
        $('.page-content').addClass('scroll-header');
    }
    else{
        $header.removeClass('scroll-nav');
        $('.page-content').removeClass('scroll-header');
    }
});
$(document).mouseup(function (e){
    var div = $('.header-lang');
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        $(div).removeClass('open');
    }
});
$('.header-lang__title').on('click', function (e) {
    var $this = $(this);
    var $thisParent  = $this.parent();
    $thisParent.toggleClass('open');
});

$('.header-btn').on('click', function (e) {
    var $this = $(this);
    $this.toggleClass('open');
    $('.header-mobile').toggleClass('open');
    $('body').toggleClass('scroll-h');
    $('.header-overlay').toggleClass('open');
});

$('.header-overlay').on('click', function (e) {
    var $this = $(this);
    $this.toggleClass('open');
    $('.header-mobile').toggleClass('open');
    $('body').toggleClass('scroll-h');
    $('.header-btn').toggleClass('open');
});

var swiper = new Swiper(".hero-slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});