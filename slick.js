$slickElement.on('afterChange', function(event, slick, currentSlide, nextSlide){
    var showNum = $(this).find('.slick-active').index()+1;
    $('.small, .big').removeAttr('style','');
    $('.roll0' + showNum + '').find('.small').animate({'opacity':'1'},800,function(){
      $('.roll0' + showNum + '').delay(800).find('.big').animate({'opacity':'1'},800);
    });
  });
  
  
  ex)
  
  // first slide
	var start = function(){
		var scene01 = document.getElementById('mainContainer');
		//new Parallax(scene01);
	}
	var mainSlide = function(){
		var $slickElement = $('#firstRoll');
		
		$slickElement.slick({
			infinite: true,
			autoplay: false,
			autoplaySpeed: 7000,
			fade: true,
			slidesToShow: 1,
			speed: 800,
			pauseOnHover:false,
			pauseOnFocus:false, 
			arrows: false,
			dots: true,
			customPaging : function(slider, i) {
				var thumb = $(slider.$slides[i]).data();
				return '<a class="dot"><span>'+(i+1)+'</span></a>';
			},
		});
		$('#firstRoll .slick-slide a').hover(function(){
			$(this).children('.over').stop().animate({'opacity':'1'},600);
		},function(){
			$(this).children('.over').stop().animate({'opacity':'0'},600);
		});
		
		$slickElement.eq(0).find('.small, .big').animate({'opacity':'1'},800);
		$slickElement.on('afterChange', function(event, slick, currentSlide, nextSlide){
			var showNum = $(this).find('.slick-active').index()+1;
			$('.small, .big').removeAttr('style','');
			$('.roll0' + showNum + '').find('.small').animate({'opacity':'1'},800,function(){
				$('.roll0' + showNum + '').delay(800).find('.big').animate({'opacity':'1'},800);
			});
		});
		start();
		setTimeout( function(){  
			
		}, 1000);
	};
	mainSlide();
