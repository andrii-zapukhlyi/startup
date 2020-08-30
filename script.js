		// Стрелка вверх


		$(document).ready(function(){
			var $element = $('.home');
			let counter = 0;
			$(window).scroll(function() {
				var scroll = $(window).scrollTop() + $(window).height();
				var offset = $element.offset().top + $element.height();

				if (scroll > offset && counter == 0) {
					$('.scrolldown__link').css({'opacity':'1'});
				} else {
					$('.scrolldown__link').css({'opacity':'0'});
				}
			});
		});

		// Скролл

		$(document).ready(function() {
		// Get the header height
		var headerHeight= $('header').outerHeight();
		$('.nav__link').click(function(e) {
			var linkHref = $(this).attr('href');
			$('html, body').animate({
				scrollTop: $(linkHref).offset().top
		/* scrollTop: $(linkHref).offset().top - headerHeight 
		If Header position : fixed;*/
	},1000);
			e.preventDefault();
		});
	});

		$(document).ready(function() {
		// Get the header height
		var headerHeight= $('header').outerHeight();
		$('.scrolldown__link').click(function(e) {
			var linkHref = $(this).attr('href');
			$('html, body').animate({
				scrollTop: $(linkHref).offset().top
		/* scrollTop: $(linkHref).offset().top - headerHeight 
		If Header position : fixed;*/
	},1000);
			e.preventDefault();
		});
	});

		// Меню бургер


		$(document).ready(function(){
			$(".header__burger").click(function(){
				$(".header__nav").toggleClass("active"); return false;
			});
		});


		$(document).ready(function(){
			$(".header__burger").click(function(){
				$(".header__burger").toggleClass("active"); return false;
			});
		});


		$(document).ready(function(){
			$(".nav__link").click(function(){
				$(".header__nav").removeClass("active");
				$(".header__burger").removeClass("active");
			});
		});


		$(window).scroll(function() {    
			$(".header__nav").removeClass("active");
			$(".header__burger").removeClass("active");
		});


		$(document).ready(function(){
			$("section").click(function(){
				$(".header__nav").removeClass("active");
				$(".header__burger").removeClass("active");
			});
		});
		

		// Hover effects


		$(document).ready(function(){
			$(".team__member-img-1").mouseenter(function(){
				$(this).attr('src', 'img/about-active/1.png');
				$(".team__member__soc-networks-1").addClass("active");   
			});
			$(".team__member__soc-networks-1").mouseenter(function(){
				$(".team__member-img-1").attr('src', 'img/about-active/1.png');
				$(".team__member__soc-networks-1").addClass("active");   
			});
			$(".team__member-img-1").mouseleave(function(){ 
				$(this).attr('src', 'img/about/Layer_12.png');
				$(".team__member__soc-networks-1").removeClass("active");     
			});
			$(".team__member__soc-networks-1").mouseleave(function(){ 
				$(".team__member-img-1").attr('src', 'img/about/Layer_12.png');
				$(".team__member__soc-networks-1").removeClass("active");     
			});
			$(".team__member-img-2").mouseenter(function(){
				$(this).attr('src', 'img/about-active/2.png');
				$(".team__member__soc-networks-2").addClass("active");
			});
			$(".team__member-img-2").mouseleave(function(){ 
				$(this).attr('src', 'img/about/Layer_13.png');
				$(".team__member__soc-networks-2").removeClass("active");
			});
			$(".team__member__soc-networks-2").mouseenter(function(){
				$(".team__member-img-2").attr('src', 'img/about-active/2.png');
				$(".team__member__soc-networks-2").addClass("active");
			});
			$(".team__member__soc-networks-2").mouseleave(function(){ 
				$(".team__member-img-2").attr('src', 'img/about/Layer_13.png');
				$(".team__member__soc-networks-2").removeClass("active");
			});
			$(".team__member-img-3").mouseenter(function(){
				$(this).attr('src', 'img/about-active/3.png');
				$(".team__member__soc-networks-3").addClass("active");
			});
			$(".team__member-img-3").mouseleave(function(){ 
				$(this).attr('src', 'img/about/Layer_15.png');
				$(".team__member__soc-networks-3").removeClass("active");
			});
			$(".team__member__soc-networks-3").mouseenter(function(){
				$(".team__member-img-3").attr('src', 'img/about-active/3.png');
				$(".team__member__soc-networks-3").addClass("active");
			});
			$(".team__member__soc-networks-3").mouseleave(function(){ 
				$(".team__member-img-3").attr('src', 'img/about/Layer_15.png');
				$(".team__member__soc-networks-3").removeClass("active");
			});
			$(".team__member-img-4").mouseenter(function(){
				$(this).attr('src', 'img/about-active/4.png');
				$(".team__member__soc-networks-4").addClass("active");
			});
			$(".team__member-img-4").mouseleave(function(){ 
				$(this).attr('src', 'img/about/Layer_16.png');
				$(".team__member__soc-networks-4").removeClass("active");
			});
			$(".team__member__soc-networks-4").mouseenter(function(){
				$(".team__member-img-4").attr('src', 'img/about-active/4.png');
				$(".team__member__soc-networks-4").addClass("active");
			});
			$(".team__member__soc-networks-4").mouseleave(function(){ 
				$(".team__member-img-4").attr('src', 'img/about/Layer_16.png');
				$(".team__member__soc-networks-4").removeClass("active");
			});
		});


		$(document).ready(function(){
			$(".works__item-img-1").mouseenter(function(){
				$(this).attr('src', 'img/works-active/1.png');
				$(".works__item-btn-1").addClass("active");   
			});
			$(".works__item-btn-1").mouseenter(function(){
				$(".works__item-img-1").attr('src', 'img/works-active/1.png');
				$(".works__item-btn-1").addClass("active");   
			});
			$(".works__item-img-1").mouseleave(function(){ 
				$(this).attr('src', 'img/works/Layer_18.png');
				$(".works__item-btn-1").removeClass("active");     
			});
			$(".works__item-img-2").mouseenter(function(){
				$(this).attr('src', 'img/works-active/2.png');
				$(".works__item-btn-2").addClass("active");
			});
			$(".works__item-btn-2").mouseenter(function(){
				$(".works__item-img-2").attr('src', 'img/works-active/2.png');
				$(".works__item-btn-2").addClass("active");   
			});
			$(".works__item-img-2").mouseleave(function(){ 
				$(this).attr('src', 'img/works/Layer_19.png');
				$(".works__item-btn-2").removeClass("active");
			});
			$(".works__item-img-3").mouseenter(function(){
				$(this).attr('src', 'img/works-active/3.png');
				$(".works__item-btn-3").addClass("active");
			});
			$(".works__item-btn-3").mouseenter(function(){
				$(".works__item-img-3").attr('src', 'img/works-active/3.png');
				$(".works__item-btn-3").addClass("active");   
			});
			$(".works__item-img-3").mouseleave(function(){ 
				$(this).attr('src', 'img/works/Layer_20.png');
				$(".works__item-btn-3").removeClass("active");
			});
			$(".works__item-img-4").mouseenter(function(){
				$(this).attr('src', 'img/works-active/4.png');
				$(".works__item-btn-4").addClass("active");
			});
			$(".works__item-btn-4").mouseenter(function(){
				$(".works__item-img-4").attr('src', 'img/works-active/4.png');
				$(".works__item-btn-4").addClass("active");   
			});
			$(".works__item-img-4").mouseleave(function(){ 
				$(this).attr('src', 'img/works/Layer_21.png');
				$(".works__item-btn-4").removeClass("active");
			});
			$(".works__item-img-5").mouseenter(function(){
				$(this).attr('src', 'img/works-active/5.png');
				$(".works__item-btn-5").addClass("active");
			});
			$(".works__item-btn-5").mouseenter(function(){
				$(".works__item-img-5").attr('src', 'img/works-active/5.png');
				$(".works__item-btn-5").addClass("active");   
			});
			$(".works__item-img-5").mouseleave(function(){ 
				$(this).attr('src', 'img/works/Layer_22.png');
				$(".works__item-btn-5").removeClass("active");
			});
			$(".works__item-img-6").mouseenter(function(){
				$(this).attr('src', 'img/works-active/6.png');
				$(".works__item-btn-6").addClass("active");
			});
			$(".works__item-btn-6").mouseenter(function(){
				$(".works__item-img-6").attr('src', 'img/works-active/6.png');
				$(".works__item-btn-6").addClass("active");   
			});
			$(".works__item-img-6").mouseleave(function(){ 
				$(this).attr('src', 'img/works/Layer_23.png');
				$(".works__item-btn-6").removeClass("active");
			});
			$(".works__item-img-7").mouseenter(function(){
				$(this).attr('src', 'img/works-active/7.png');
				$(".works__item-btn-7").addClass("active");
			});
			$(".works__item-btn-7").mouseenter(function(){
				$(".works__item-img-7").attr('src', 'img/works-active/7.png');
				$(".works__item-btn-7").addClass("active");   
			});
			$(".works__item-img-7").mouseleave(function(){ 
				$(this).attr('src', 'img/works/Layer_26.png');
				$(".works__item-btn-7").removeClass("active");
			});
			$(".works__item-img-8").mouseenter(function(){
				$(this).attr('src', 'img/works-active/8.png');
				$(".works__item-btn-8").addClass("active");
			});
			$(".works__item-btn-8").mouseenter(function(){
				$(".works__item-img-8").attr('src', 'img/works-active/8.png');
				$(".works__item-btn-8").addClass("active");   
			});
			$(".works__item-img-8").mouseleave(function(){ 
				$(this).attr('src', 'img/works/Layer_25.png');
				$(".works__item-btn-8").removeClass("active");
			});
			$(".works__item-img-9").mouseenter(function(){
				$(this).attr('src', 'img/works-active/9.png');
				$(".works__item-btn-9").addClass("active");
			});
			$(".works__item-btn-9").mouseenter(function(){
				$(".works__item-img-9").attr('src', 'img/works-active/9.png');
				$(".works__item-btn-9").addClass("active");   
			});
			$(".works__item-img-9").mouseleave(function(){ 
				$(this).attr('src', 'img/works/Layer_24.png');
				$(".works__item-btn-9").removeClass("active");
			});
		});