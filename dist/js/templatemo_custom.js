$(document).ready(function($) {
	if (!$.curCSS) $.curCSS = $.css;

	$('#dock').Fisheye({
		maxWidth: 35,
		items: "a",
		itemsText: "span",
		container: ".dock-container",
		itemWidth: 45,
		proximity: 50,
		alignment: "center",
		valign: "bottom",
		halign: "center"
	});

	$('.project-item a').fancyZoom({scaleImg: true, closeOnClick: true});
	


	/*$(".projects-holder .umScaleIn").click(function () {
		var sign = "intro-p-"+($(this).index()+1);
		$(".p").removeClass("fadeIn").addClass("fadeOut");
		$(".intro-p>div").hide();
		$("."+sign).show().removeClass("fadeOut").addClass("fadeIn");
	});*/

	$(".intro-p>div").click(function () {
		$(this).removeClass("fadeIn").addClass("fadeOut");
		$(".p").removeClass("fadeOut").addClass("fadeIn");
	});

	$(".main-menu a").click(function(){
		var id =  $(this).attr('class');
		id = id.split('-');
		$('a.active').removeClass('active');
    	$(this).addClass('active');
		$("#menu-container .content").slideUp('slow');
		$("#menu-container #menu-"+id[1]).slideDown('slow');
		$("#menu-container .homepage").slideUp('slow');
		return false;
	});


	$(".main-menu a.homebutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .homepage").slideDown('slow');
		return false;
	});

	$(".main-menu a.aboutbutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .about-section").slideDown('slow');
		return false;
	});

	$(".main-menu a.projectbutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .project-section").slideDown('slow');
		return false;
	});

	$(".main-menu a.blogbutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .blog-section").slideDown('slow');
		return false;
	});

	$(".main-menu a.contactbutton").click(function(){
		$("#menu-container .content").fadeOut();
		$("#menu-container .contact-section").slideDown('slow');
		//loadScript();
		return false;
	});



	$('a.toggle-nav').click(function(){
		$('.menu-responsive').slideToggle();
	});

	$('.menu-responsive a').click(function() {
		$('.menu-responsive').slideToggle().hide();
	});

	//圆形进度条
	$(".circliful").circliful();

	$(".message-button").click(function () {
		leanCloud._dataStorage({
			name:$("#com_name").val(),
			email:$("#com_email").val(),
			url:$("#com_url").val(),
			message:$("#leave_message").val()
		},function(){
			$('#myModal').modal('show');
		});
	});
	$('#myModal').on('hide.bs.modal', function () {
		$(".contact-form").removeClass("fadeInUp").addClass("fadeOutDown");
		$(".xiao").addClass("fadeInDown");
	})
});


function loadScript() {
	  var script = document.createElement('script');
	  script.type = 'text/javascript';
	  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
	      'callback=initialize';
	  document.body.appendChild(script);
	}

	function initialize() {
	    var mapOptions = {
	      zoom: 15,
	      center: new google.maps.LatLng(16.8496189,96.1288854)
	    };
	    var map = new google.maps.Map(document.getElementById('map_canvas'),  mapOptions);
	}