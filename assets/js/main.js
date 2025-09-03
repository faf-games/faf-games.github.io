/************* Main Js File ************************
    Template Name: Faf
    Author: Themescare
    Version: 1.0
    Copyright 2020
*************************************************************/


/*------------------------------------------------------------------------------------
    
JS INDEX
=============
1 - buy me a coffe button
01 - Menu Toggle JS
02 - Search Toggle
03 - Main Slider JS
04 - Testimonial Slider JS
05 - Counter JS
06 - Mouse Cursor JS
07 - Youtube Popup JS
08 - Quantity Js
09 - Range sliders
10 - Header Scroll

-------------------------------------------------------------------------------------*/


// === Inject Buy Me a Coffee floating button globally ===
(() => {
  if (window.__bmcInjected) return;
  window.__bmcInjected = true;

  // 1) Add CSS
  const style = document.createElement('style');
  style.textContent = `
    .bmc-fixed-btn{
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 2147483647;
      transform-origin: bottom right;
    }
    @media (max-width:768px){ .bmc-fixed-btn{ bottom:15px; right:15px; transform:scale(.9); } }
    @media (max-width:480px){ .bmc-fixed-btn{ bottom:12px; right:12px; transform:scale(.85); } }
    body.has-bottom-anchor .bmc-fixed-btn{ bottom:84px; }
  `;
  document.head.appendChild(style);

  // 2) Create wrapper
  const wrap = document.createElement('div');
  wrap.className = 'bmc-fixed-btn';

  // 3) Create the BMC script with attributes
  const s = document.createElement('script');
  s.type = 'text/javascript';
  s.src = 'https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js';
  s.setAttribute('data-name', 'bmc-button');
  s.setAttribute('data-slug', 'malikshahal');
  s.setAttribute('data-color', '#FFDD00');
  s.setAttribute('data-emoji', '☕');
  s.setAttribute('data-font', 'Inter');
  s.setAttribute('data-text', 'Buy me a coffee');
  s.setAttribute('data-outline-color', '#000000');
  s.setAttribute('data-font-color', '#000000');
  s.setAttribute('data-coffee-color', '#ffffff');

  wrap.appendChild(s);
  document.body.appendChild(wrap);

  // 4) Nudge up if a Google bottom anchor ad is present
  const mark = () => {
    const hasAnchor = !!document.querySelector('iframe[id^="google_ads_iframe"]:not([style*="display: none"])');
    document.body.classList.toggle('has-bottom-anchor', hasAnchor);
  };
  setTimeout(mark, 800);
  setTimeout(mark, 2000);
  setTimeout(mark, 4000);
  window.addEventListener('resize', mark);
})();








(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {


		/* 
		=================================================================
		01 - Menu Toggle JS
		=================================================================	
		*/
		$(".menu-toggle").on("click", function () {
			$(this).toggleClass("is-active");
		});

		/* 
		=================================================================
		02 - Search Toggle
		=================================================================	
		*/
        
        $("#search-trigger").on("click", function () {
			$(".search-block").toggleClass("active");
		});
        
        $(".search-block input").on("click", function () {
			$(".search-block span").toggleClass("active");
		});
        
        $(".search-toggle").on("click", function () {
			$(".search-block").removeClass("active");
			$(".search-block span").removeClass("active");
		});
        


		/* 
		=================================================================
		03 - Main Slider JS
		=================================================================	
		*/

		$(".fag-slide").owlCarousel({
			animateOut: 'fadeOutLeft',
			animateIn: 'fadeIn',
			items: 2,
			nav: false,
			dots: true,
			autoplayTimeout: 7000,
			autoplaySpeed: 2000,
			autoplay: false,
			loop: true,
			navText: ["<i class='fa fa-long-arrow-left'><i>", "<i class='fa fa-long-arrow-right'><i>"],
			mouseDrag: true,
			touchDrag: true,
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				600: {
					items: 1
				},
				750: {
					items: 1
				},
				1000: {
					items: 1
				},
				1200: {
					items: 1
				}
			}
		});

		$(".fag-slide").on("translate.owl.carousel", function () {
			$(".fag-main-slide h2, .fag-main-slide p").removeClass("animated fadeInUp").css("opacity", "0");
			$(".fag-main-slide .fag-btn-outline").removeClass("animated fadeInDown").css("opacity", "0");
			$(".fag-main-slide h3").removeClass("animated fadeInLeft").css("opacity", "0");
		});
		$(".fag-slide").on("translated.owl.carousel", function () {
			$(".fag-main-slide h2, .fag-main-slide p").addClass("animated fadeInUp").css("opacity", "1");
			$(".fag-main-slide .fag-btn-outline").addClass("animated fadeInDown").css("opacity", "1");
			$(".fag-main-slide h3").addClass("animated fadeInLeft").css("opacity", "1");
		});


		/* 


document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementById("cookie-consent-banner");
    const acceptButton = document.getElementById("accept-cookies");

    // Check if the user has already accepted cookies
    if (!localStorage.getItem("cookiesAccepted")) {
        banner.style.display = "block"; // Show the banner
    }

    acceptButton.addEventListener("click", function() {
        localStorage.setItem("cookiesAccepted", "true"); // Save the user's choice
        banner.style.display = "none"; // Hide the banner
    });
});

  
		=================================================================
		04 - Testimonial Slider JS
		=================================================================	
		*/

		$(".testimonial-slider").owlCarousel({
			margin: 20,
			nav: true,
			dots: false,
			autoplayTimeout: 7000,
			autoplaySpeed: 2000,
			autoplay: true,
			loop: true,
			navText: ["<i class='fa fa-angle-left'><i>", "<i class='fa fa-angle-right'><i>"],
			mouseDrag: true,
			touchDrag: true,
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				600: {
					items: 1
				},
				750: {
					items: 2
				},
				1000: {
					items: 2
				},
				1200: {
					items: 2
				}
			}
		});



		/* 
		=================================================================
		06 - Mouse Cursor JS
		=================================================================	
		*/


		$('body').on("mouseup", function () {
			$('#cursor-small').removeClass("click");
		});

		$('body').on('click', function (e) {
			$('#cursor-small').css({
				left: e.pageX,
				top: e.pageY
			});
			$('#cursor-small').addClass("click");
		});

		var cursorLarge = $('#cursor-large');
		var cursorSmall = $('#cursor-small');

		$(document).mousemove(function (e) {
			var x = e.clientX;
			var y = e.clientY;

			cursorLarge.css({
				"left": `${x}px`,
				"top": `${y}px`
			});
			cursorSmall.css({
				"left": `${x}px`,
				"top": `${y}px`
			});
		});

		/* 
		=================================================================
		07 - Youtube Popup JS
		=================================================================	
		*/
		var $animation_elements = $('.heading_animation');
		var $window = $(window);

		function check_if_in_view() {
			var window_height = $window.height();
			var window_top_position = $window.scrollTop();
			var window_bottom_position = (window_top_position + window_height);

			$.each($animation_elements, function () {
				var $element = $(this);
				var element_height = $element.outerHeight();
				var element_top_position = $element.offset().top + 150;
				var element_bottom_position = (element_top_position + element_height);

				//check to see if this current container is within viewport
				if ((element_bottom_position >= window_top_position) &&
					(element_top_position <= window_bottom_position)) {
					$element.addClass('extend');
				}
			});
		}
		$window.on('scroll resize', check_if_in_view);
		$window.trigger('scroll');


		/* 
		=================================================================
		07 - Youtube Popup JS
		=================================================================	
		*/

		$('.popup-youtube, .play-video').magnificPopup({
			type: 'iframe',
			mainClass: 'mfp-fade',
			preloader: true,
		});

		/*==============================
		08 - Quantity Js
		==============================*/
        $(".num-in span").on("click", function () {
			var $input = $(this).parents('.num-block').find('input.in-num');
			if ($(this).hasClass('minus')) {
				var count = parseFloat($input.val()) - 1;
				count = count < 1 ? 1 : count;
				if (count < 2) {
					$(this).addClass('dis');
				} else {
					$(this).removeClass('dis');
				}
				$input.val(count);
			} else {
				var count = parseFloat($input.val()) + 1
				$input.val(count);
				if (count > 1) {
					$(this).parents('.num-block').find(('.minus')).removeClass('dis');
				}
			}

			$input.change();
			return false;
		});
        


		/*==============================
		09 - Range sliders
		==============================*/

		if ($('#filter_range').length) {
			var firstSlider = document.getElementById('filter_range');
			noUiSlider.create(firstSlider, {
				range: {
					'min': 0,
					'max': 500
				},
				step: 1,
				connect: true,
				start: [18, 300],
				format: wNumb({
					decimals: 0,
					prefix: '$'
				})
			});
			var firstValues = [
				document.getElementById('filter_range-start'),
				document.getElementById('filter_range-end')
			];
			firstSlider.noUiSlider.on('update', function (values, handle) {
				firstValues[handle].innerHTML = values[handle];
			});
		} else {
			return false;
		}


	});

	/*==============================
	10 - Header Scroll
	==============================*/
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('.fag-header').addClass('scroll');
		} else {
			$('.fag-header').removeClass('scroll');
		}

	});


}(jQuery));

