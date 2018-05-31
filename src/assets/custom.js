$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        (scroll > 100) ? $('header').addClass('headerFix'): $('header').removeClass('headerFix')
    });

    $('body').on('click', '.menu_open_btn', function() {
        $('body').addClass('menuOpen');
    });
    $('body').on('click', '.menu_close_btn', function() {
        $('body').removeClass('menuOpen');
    });

    $('.search-sec').click(function() {
        $('body').addClass('modalOpen modalOpen--search');
    });
    $('.search-overlay__close').click(function() {
        $('body').removeClass('modalOpen modalOpen--search');
    });

    $('div.no-child').wrapAll('<div class="noChildContainer"></div>');

    //    Video
    $('.video-icon').on('click', function(e) {
        $('.video-sec').html('');
        var iframe = '<iframe src="' + $(this).parent().parent().find('.iframe-video span').text() + '?controls=0&rel=0&showinfo=0&vq=720&autoplay=1" frameborder="0" allowfullscreen></iframe>';
        $(this).parent().parent().find('.video-sec').append(iframe);
        e.preventDefault();
    });
    $('.home-product-carousel').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    $('.epic-carousel').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });


});

// Custom ScrollBar
(function($) {
    $(window).on("load", function() {
        $("#content-5").mCustomScrollbar({
            axis: "x",
            theme: "dark-thin",
            autoExpandScrollbar: true,
            advanced: { autoExpandHorizontalScroll: true }
        });
        $("#anchorContainer").mCustomScrollbar({
            scrollButtons: { enable: true },
            theme: "light-thick",
            scrollbarPosition: "outside"
        });
        $("#content-3").mCustomScrollbar({
            scrollButtons: { enable: true },
            theme: "light-thick",
            scrollbarPosition: "outside"
        });
    });
})(jQuery);

// CUSTOM SELECT 
$('.filter-sec select, .single-option-selector').each(function() {
    var $this = $(this),
        numberOfOptions = $(this).children('option').length;

    $this.addClass('select-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function() {
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });

    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });

    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});


// ACCORDION
(function($) {
    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('p');

        $(this).closest('.accordion').find('p').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);


// SUBMENU
$('.site-header .navbar-left-sec .has-child a').has('.dropdown-toggle').addClass('drop-menu').append('<i class="dropdown-icon"></i>');

$('.site-header .navbar-left-sec .has-child dropdown-icon').click(function() {
    if (!$(this).siblings(".children-nav").is(":visible")) {
        $('.site-header .navbar-left-sec .has-child .children-nav').slideUp();
        $('.site-header .navbar-left-sec .has-child .children-nav').parent().removeClass('open');
        $(this).parent().addClass('open');
        $(this).siblings(".children-nav").slideDown();
    } else {
        $(this).siblings(".children-nav").slideUp();
        $('.site-header .navbar-left-sec .has-child .children-nav').parent().removeClass('open');

    }
});