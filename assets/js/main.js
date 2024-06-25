(function($) {
    "user strict";

    // preloader
    $(window).on('load', function() {
        $(".preloader").delay(500).animate({
            "opacity": "0"
        }, 500, function() {
            $(".preloader").css("display", "none");
        });
    });

    $("select").niceSelect(),

        // aos
        AOS.init({
            'duration': 1000,
            'once': true
        });

    $('.video').lightcase();

    $('.img-popup').lightcase();

    //Create Background Image
    (function background() {
        let img = $('.bg_img');
        img.css('background-image', function() {
            var bg = ('url(' + $(this).data('background') + ')');
            return bg;
        });
    })();

    setInterval(function() {
        $(".banner-group-shape").addClass("active")
    }, 1000);

    // scroll-to-top
    var ScrollTop = $(".scrollToTop");
    $(window).on('scroll', function() {
        if ($(this).scrollTop() < 100) {
            ScrollTop.removeClass("active");
        } else {
            ScrollTop.addClass("active");
        }
    });

    // header-fixed
    var lastScrollTop = '';
    $(window).on('scroll', function() {
        var st = $(this).scrollTop();
        var mainMenuTop = $('.header-section');
        if ($(window).scrollTop() > 500) {
            if (st > lastScrollTop) {
                mainMenuTop.removeClass('animated fadeInDown header-fixed');

            } else {
                mainMenuTop.addClass('animated fadeInDown header-fixed');
            }
        } else {
            mainMenuTop.removeClass('animated fadeInDown header-fixed');
        }
        lastScrollTop = st;
    });

    // navbar-click
    $(".navbar li a").on("click", function() {
        var element = $(this).parent("li");
        if (element.hasClass("show")) {
            element.removeClass("show");
            element.children("ul").slideUp(500);
        } else {
            element.siblings("li").removeClass('show');
            element.addClass("show");
            element.siblings("li").find("ul").slideUp(500);
            element.children('ul').slideDown(500);
        }
    });

    // window.addEventListener('resize', function () {
    //   if (screen.width > 1199) {
    //     $('.sub-menu').show();
    //   }else{
    //     $('.sub-menu').hide();
    //   }
    // }, true);

    // navbar-click
    $(".navigation-three li a").on("click", function() {
        var element = $(this).parent("li");
        if (element.hasClass("show")) {
            element.removeClass("show");
            element.children("ul").slideUp(500);
        } else {
            element.siblings("li").removeClass('show');
            element.addClass("show");
            element.siblings("li").find("ul").slideUp(500);
            element.children('ul').slideDown(500);
        }
    });

    //Odometer
    if ($(".statistics-item,.icon-box-items,.counter-single-items").length) {
        $(".statistics-item,.icon-box-items,.counter-single-items").each(function() {
            $(this).isInViewport(function(status) {
                if (status === "entered") {
                    for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
                        var el = document.querySelectorAll('.odometer')[i];
                        el.innerHTML = el.getAttribute("data-odometer-final");
                    }
                }
            });
        });
    }

    // custom cursor 
    var cursor = $(".cursor"),
        follower = $(".cursor-follower");

    var posX = 0,
        posY = 0;

    var mouseX = 0,
        mouseY = 0;

    TweenMax.to({}, 0.016, {
        repeat: -1,
        onRepeat: function() {
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;

            TweenMax.set(follower, {
                css: {
                    left: posX - 12,
                    top: posY - 12
                }
            });

            TweenMax.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            });
        }
    });

    $(document).on("mousemove", function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    $("a").on("mouseenter", function() {
        cursor.addClass("active");
        follower.addClass("active");
    });
    $("a").on("mouseleave", function() {
        cursor.removeClass("active");
        follower.removeClass("active");
    });

    $('input').attr('autocomplete', 'off');

    //plan-tab-switcher
    $('.plan-tab-switcher').on('click', function() {
        $(this).toggleClass('active');

        $('.plan-area').toggleClass('change-subs-duration');
    });

    // faq
    $('.faq-wrapper .faq-title').on('click', function(e) {
        var element = $(this).parent('.faq-item');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('.faq-content').removeClass('open');
            element.find('.faq-content').slideUp(300, "swing");
        } else {
            element.addClass('open');
            element.children('.faq-content').slideDown(300, "swing");
            element.siblings('.faq-item').children('.faq-content').slideUp(300, "swing");
            element.siblings('.faq-item').removeClass('open');
            element.siblings('.faq-item').find('.faq-title').removeClass('open');
            element.siblings('.taq-item').find('.faq-content').slideUp(300, "swing");
        }
    });

    // slider
    var swiper = new Swiper('.banner-slider', {
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            speeds: 2000,
            delay: 4000,
        },
        speed: 1000,
        breakpoints: {
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 2,
            },
        }
    });

    var swiper = new Swiper('.brand-slider', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            speeds: 2000,
            delay: 4000,
        },
        speed: 1000,
        breakpoints: {
            991: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1,
            },
            420: {
                slidesPerView: 1,
            },
        }
    });

    var swiper = new Swiper('.brand-slider-two', {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            speeds: 2000,
            delay: 4000,
        },
        speed: 1000,
        breakpoints: {
            991: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 2,
            },
            420: {
                slidesPerView: 1,
            },
        }
    });

    var swiper = new Swiper('.feature-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            speeds: 2000,
            delay: 4000,
        },
        speed: 1000,
        breakpoints: {
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1,
            },
        }
    });

    var swiper = new Swiper('.project-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
        autoplay: {
            speeds: 2000,
            delay: 4000,
        },
        speed: 1000,
        breakpoints: {
            1300: {
                slidesPerView: 2,
                centeredSlides: false,
            },
            1199: {
                slidesPerView: 2,
                centeredSlides: false,
            },
            991: {
                slidesPerView: 2,
                centeredSlides: false,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1,
                centeredSlides: false,
            },
        }
    });

    var swiper = new Swiper('.gallery-widget-item-slider', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
        autoplay: {
            speeds: 2000,
            delay: 4000,
        },
        speed: 1000,
        breakpoints: {
            991: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 1,
            },
        }
    });

    var swiper = new Swiper('.service-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            speeds: 2000,
            delay: 4000,
        },
        speed: 1000,
        breakpoints: {
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1,
            },
        }
    });

    var swiper = new Swiper('.service-slider-two', {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            speeds: 2000,
            delay: 4000,
        },
        speed: 1000,
        breakpoints: {
            1590: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1,
            },
        }
    });

    var swiper = new Swiper('.client-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.client-pagination',
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
        autoplay: {
            speeds: 2000,
            delay: 4000,
        },
        speed: 1000,
        breakpoints: {
            1199: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 1,
            },
        }
    });

    var swiper = new Swiper('.client-slider-two', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.client-pagination',
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
        autoplay: {
            speeds: 2000,
            delay: 4000,
        },
        speed: 1000,
        breakpoints: {
            991: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 1,
            },
        }
    });

    var swiper = new Swiper('.client-slider-three', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
        autoplay: {
            speeds: 2000,
            delay: 4000,
        },
        speed: 1000,
        breakpoints: {
            991: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 1,
            },
        }
    });

    var swiper = new Swiper('.team-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
        autoplay: {
            speeds: 2000,
            delay: 4000,
        },
        speed: 1000,
        breakpoints: {
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1,
            },
        }
    });

    var swiper = new Swiper('.blog-slider', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
        autoplay: {
            speeds: 2000,
            delay: 4000,
        },
        speed: 1000,
        breakpoints: {
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1,
            },
        }
    });

    // Case Study Slider
    var swiper = new Swiper('.case-study-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        observer: true,
        observeParents: true,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        autoplay: {
            speeds: 2000,
            delay: 4000,
        },
        navigation: {
            nextEl: '.next-text',
            prevEl: '.prev-text',
        },
        speed: 1000,
        breakpoints: {
            1300: {
                slidesPerView: 2,
                centeredSlides: false,
            },
            1199: {
                slidesPerView: 2,
                centeredSlides: false,
            },
            991: {
                slidesPerView: 2,
                centeredSlides: false,
            },
            767: {
                slidesPerView: 1,
                centeredSlides: false,
            },
            575: {
                slidesPerView: 1,
                centeredSlides: false,
            },
        }
    });


    // Banner Three Slider 
    var swiper = new Swiper('.banner-three-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        effect: "fade",
        navigation: {
            nextEl: '.next-text',
            prevEl: '.prev-text',
        },
        pagination: {
            el: '.custom-pagination',
            type: 'progressbar',
        },
        autoplay: {
            speeds: 2000,
            delay: 4000,
        },
        speed: 1500,
        breakpoints: {
            1300: {
                slidesPerView: 1,
                centeredSlides: false,
            },
            1199: {
                slidesPerView: 1,
                centeredSlides: false,
            },
            991: {
                slidesPerView: 1,
                centeredSlides: false,
            },
            767: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 1,
                centeredSlides: false,
            },
        }
    });

    // menu
    $('.menu-toggler').on('click', function() {
        $('.header-bottom-area').toggleClass('open');
    });

    // Home Three Menu Opem
    $('.menu-toggler.home-three').on('click', function() {
        $('.menu-open').addClass('open');
    });

    $('.close-btn').on('click', function() {
        $('.menu-open').removeClass('open');
    });

    // init Isotope
    var $grid = $('.grid').isotope({
        // options
        itemSelector: '.grid-item',
        // percentPosition: true,
        masonry: {
            columnWidth: '.grid-item'
        }
    });
    var $gallery = $(".grid").isotope({

    });
    // filter items on button click
    $('.filter-btn-group').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });
    $('.filter-btn-group').on('click', 'button', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });

    $(window).on('load', function() {
        galleryMasonaryTwo();
    })

    function galleryMasonaryTwo() {
        // filter functions
        var $grid = $(".grid");
        var filterFns = {};
        $grid.isotope({
            itemSelector: '.grid-item',
            masonry: {
                columnWidth: 0,
            }
        });
        // bind filter button click
        $('ul.filter').on('click', 'li', function() {
            var filterValue = $(this).attr('data-filter');
            // use filterFn if matches value
            filterValue = filterFns[filterValue] || filterValue;
            $grid.isotope({
                filter: filterValue
            });
        });
        // change is-checked class on buttons
        $('ul.filter').each(function(i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'li', function() {
                $buttonGroup.find('.active').removeClass('active');
                $(this).addClass('active');
            });
        });
    }

    /*-------------------------
        product + - start here
    -------------------------*/
    $(function() {
        $(".qtybutton").on("click", function() {
            var $button = $(this);
            var oldValue = $button.parent().find("input").val();
            if ($button.text() === "+") {
                var newVal = parseFloat(oldValue) + 1;
            } else {
                // Don't allow decrementing below zero
                if (oldValue > 1) {
                    var newVal = parseFloat(oldValue) - 1;
                } else {
                    newVal = 1;
                }
            }
            $button.parent().find("input").val(newVal);
        });
    });



})(jQuery);