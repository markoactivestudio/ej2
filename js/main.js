var windowWidth = $(window).width();
$(window).resize(function () {
    windowWidth = $(window).width();
});

$(".game-group .game").on("click", function () {
    if (windowWidth <= 768) {
        var integrisana = $(this).children("div").children("div").children("div").attr("onclick");
            var res = integrisana.split("'");
            //res[3] je ime
        var game = $(this).children('.overlay-loggedin').children('span').text();
            if(game==undefined || game==""){
              game=res[3];
              game = game.replace(/([A-Z])/g, ' $1').trim()
            }

        var link = $(this).children('.overlay-loggedin').children('div').attr('onclick');
        $('.play-modal .modal-body h3').html(game);
        $('.play-modal .play-modal-buttons a').attr('onclick', link);
        var iid = $(this).attr("id");
        $('.play-modal .play-modal-buttons a').attr('id', iid);
        var play = $('[data-remodal-id=play-game-modal]').remodal();
        play.open();
    };
});

if (windowWidth <= 480) {
    $(document).on('opening', '.remodal', function () {
        $('body').addClass('fixed');
    });
    $(document).on('closing', '.remodal', function (e) {
        $('body').removeClass('fixed');
    });
};

$(document).ready(function () {
    if (windowWidth >= 768) {
        var visina = Math.round(($('.game-group > div > div:nth-child(2) > .game img').height()) * 2 + 20) + "px";
        $('.promo-slider').css("height", visina);
        $('.promo-slider .item').css("height", visina);
    };

    $('.deposit-table').stacktable();
    $('.promotions .promo > div').matchHeight();
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        $($(e.target).attr('href'))
            .find('.owl-carousel')
            .owlCarousel('invalidate', 'width')
            .owlCarousel('invalidate', 'height')
            .owlCarousel('update')
    });

    $(".range-input .btn-range-value.plus").on("click", function () {
        var vrednost = parseInt($(this).parent(".range-value").siblings(".limits").val()) + 5;
        $(this).parent(".range-value").siblings(".limits").val(vrednost);
        $(this).siblings("h1").html($(this).parent(".range-value").siblings(".limits").val() + '€');
    });

    $(".range-input .btn-range-value.minus").on("click", function () {
        var vrednost = parseInt($(this).parent(".range-value").siblings(".limits").val()) - 5;
        $(this).parent(".range-value").siblings(".limits").val(vrednost);
        $(this).siblings("h1").html($(this).parent(".range-value").siblings(".limits").val() + '€');
    });

    $(".payment-method-list li").on("click", function () {
        $(".payment-method-list li").removeClass('active');
        $(this).addClass('active');
        var amountlogo = $(this).children('img').attr('src');
        var altlogo = $(this).children('img').attr('alt');
        $('.method-set .payment-method img').attr("src", amountlogo);
        $('.method-set .payment-method img').attr("alt", altlogo);
        $(".list-method").hide();
        $(".method-set").fadeIn();
    });

    $(".payment-method").on("click", function () {
        $(".method-set").hide();
        $(".list-method").fadeIn();
    });

    $(".card-group .amount-card").on("click", function () {
        var amount = $(this).text();
        $('.deposit-amount > span').html(amount + '$');
        $('.amount-type').val(amount);
    });

    $(".amount-type").on('input', function () {
        var amount = $(this).val();
        $('.deposit-amount > span').html(amount + '$');
    });

    $('.amount-type').on('keyup keydown', function (e) {
        if ($(this).val() > 9999 &&
            e.keyCode != 46 &&
            e.keyCode != 8
        ) {
            e.preventDefault();
            $(this).val(9999);
        }
    });

    $(".documnent-upload .upload-item input.yellow-file").change(function () {
        var logoslika = URL.createObjectURL(event.target.files[0]);
        $(this).parent('.btn-container').siblings('.upload-preview').css({
            'background-image': 'url(' + logoslika + ')'
        });
        $(this).parent('.btn-container').siblings('.upload-preview').children('.no-file').remove();
    });

    $('#startdate').datetimepicker({
        format: "dd.mm.yyyy.",
        startView: 'month',
        minView: 'month',
        autoclose: true
    });

    $('#enddate').datetimepicker({
        format: "dd.mm.yyyy.",
        startView: 'month',
        minView: 'month',
        autoclose: true
    });

    $('.bingo-ball img').enllax();
    $(".icon-show").on("click", function () {
        $(this).hide();
        $('.icon-hide').show();
        $('#pwd0').prop('type', 'text');
    });

    $(".icon-hide").on("click", function () {
        $(this).hide();
        $('.icon-show').show();
        $('#pwd0').prop('type', 'password');
    });

    $(".green-file").jfilestyle({
        input: false,
        buttonText: "<i class='icon-upload'></i>"
    });

    $(".yellow-file").jfilestyle({
        input: false,
        buttonText: "<span class='btn-default'>Browse</span>"
    });

    $('.selectpicker').selectpicker({});
    var bingoplay = $('.bingo-play-carousel');
    bingoplay.owlCarousel({
        margin: 10,
        nav: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    $('.home-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        responsive: {
            0: {
                items: 1
            }
        },
        autoplay: true,
        autoplayTimeout: 7000,
        navText: ["<i class='icon-arrow_left'></i>", "<i class='icon-arrow_right'></i>"]
    });

    $('.home-game-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        responsive: {
            0: {
                items: 1
            }
        },
        autoplay: true,
        autoplayTimeout: 5000,
        navText: ["<i class='icon-arrow_left'></i>", "<i class='icon-arrow_right'></i>"]
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        responsive: {
            0: {
                items: 1
            }
        },
        autoplay: true,
        autoplayTimeout: 6000,
        navText: ["<i class='icon-arrow_left'></i>", "<i class='icon-arrow_right'></i>"]
    });

    $('#rootwizard').bootstrapWizard({
        'tabClass': 'nav nav-tabs'
    });
    $('[data-toggle="tooltip"]').tooltip();
    $('.lang-dropdown, .user-dropdown').on('click', function () {
        $(this).toggleClass('rotate');
    });
});

$(window).on('load', function () {
    $('#status').fadeOut('slow');
    $('#preloader').delay(360).fadeOut('slow');
});

// var start_year = new Date().getFullYear();
// for (var i = start_year; i > start_year - 120; i--) {
//     $('.year').append('<option value="' + i + '">' + i + '</option>');
// };
// for (var i = 1; i < 32; i++) {
//     $('.day').append('<option value="' + i + '">' + i + '</option>');
// };

$(document).on('opening', '.remodal.deposit-modal', function () {
    if (document.documentMode || /Edge/.test(navigator.userAgent)) {
        $(this).show();
        $('.deposit-modal .remodal-close').fadeIn();
        $(this).removeClass('animated slideInRight');
    } else {
        $(this).hide();
    }
});

$(document).on('opened', '.remodal.deposit-modal', function () {
    if (document.documentMode || /Edge/.test(navigator.userAgent)) {} else {
        $(this).show().addClass('animated slideInRight');
        $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('animated slideInRight');
        });
    }
});

$(document).on('closing', '.remodal.deposit-modal', function (e) {
    if (document.documentMode || /Edge/.test(navigator.userAgent)) {
        $('.remodal-overlay').fadeOut();
        $('.remodal-close').fadeOut();
        $(this).fadeOut();
    } else {
        $('.remodal-overlay').removeClass('remodal-is-closing');
        $('.remodal-close').addClass('animated fadeOut');
        $(this).addClass('animated slideOutRight').removeClass('remodal-is-closing');
        $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).addClass('remodal-is-closed').removeClass('animated slideOutRight');
            $('.remodal-close').removeClass('animated fadeOut');
        });
    }
});

$(document).on('opening', '.remodal.menu-modal', function () {
    if (document.documentMode || /Edge/.test(navigator.userAgent)) {
        $(this).show();
        $('.menu-modal .remodal-close').fadeIn();
        $(this).removeClass('animated slideInRight');
    } else {
        $(this).hide();
    }
});

$(document).on('opened', '.remodal.menu-modal', function () {
    if (document.documentMode || /Edge/.test(navigator.userAgent)) {} else {
        $(this).show().addClass('animated slideInLeft');
        $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('animated slideInLeft');
        });
    }
});

$(document).on('closing', '.remodal.menu-modal', function (e) {
    if (document.documentMode || /Edge/.test(navigator.userAgent)) {
        $('.remodal-overlay').fadeOut();
        $('.remodal-close').fadeOut();
        $(this).fadeOut();
    } else {
        $('.remodal-overlay').removeClass('remodal-is-closing');
        $('.remodal-close').addClass('animated fadeOut');
        $(this).addClass('animated slideOutLeft').removeClass('remodal-is-closing');
        $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).addClass('remodal-is-closed').removeClass('animated slideOutLeft');
            $('.remodal-close').removeClass('animated fadeOut');
        });
    }
});

var offset = 500,
    offset_opacity = 1500,
    scroll_top_duration = 700,
    $back_to_top = $('.to-top');
$(window).scroll(function () {
    ($(this).scrollTop() > offset) ? $back_to_top.addClass('to-top-is-visible'): $back_to_top.removeClass('to-top-is-visible to-top-fade-out');
    if ($(this).scrollTop() > offset_opacity) {
        $back_to_top.addClass('to-top-fade-out');
    }
});

$back_to_top.on('click', function (event) {
    event.preventDefault();
    $('body,html').animate({
        scrollTop: 0,
    }, scroll_top_duration);
});

$(window).on('resize', function () {
    var win = $(this);
    $('.promo-slider').css("height", "");
    $('.promo-slider .item').css("height", "");
    if (win.width() >= 768) {
        var visina = Math.round(($('.game-group > div > div:nth-child(2) > .game img').height()) * 2 + 20) + "px";
        $('.promo-slider').css("height", visina);
        $('.promo-slider .item').css("height", visina);
    }
});
