var setScroll;
var calcTop;
var stickyWidth;
var setPosition;
var headerHeight;
var slick_trackOffset;
$(function() {

	//multiselect start
	if ($('.multi-selectbox').length > 0) {
		$(".multi-selectbox").multipleSelect({
			selectAll : false,
			placeholder : "Type"
		});
	}
	//multiselect end

	//custom select start
	if ($('.select').length > 0) {
		$(".select").selectbox();
	}
	//custom select end

	//sticky header start
	$(window).scroll(function() {
		var scrl = $(window).scrollTop();
		if (scrl > 0) {
			$(".sticky-header").addClass("stick");
		} else {
			$(".sticky-header").removeClass("stick");
		}

		if ($(window).outerWidth() > 1024) {
		
			if ($(".sticky-header").length > 0) {
                 
                
				

				
				if (((scrl + headerHeight) > slick_trackOffset) && (scrl < setScroll)) {	
					
					 $("#sticky-add").addClass("setRelative").removeClass("setFixed").css({
						"top" : scrl+100-slick_trackOffset
					});				
					// $("#sticky-add").addClass("setFixed").removeClass("setRelative").css({
						// "top" : calcTop
					// });

				
				} else if (scrl < slick_trackOffset) {
					
					$("#sticky-add").addClass("setRelative").removeClass("setFixed").css({
						"top" : 0
					});
				
				} else {
					
					$("#sticky-add").addClass("setRelative").removeClass("setFixed").css({
						"top" : parseInt(setPosition)
					});
					
				}
			
			}
		}

	});
	//sticky header end
	//sticky header end

	// place-slider

	if ($('.place-content').length > 0) {
		$('.place-content').slick({
			slidesToShow : 5,
			slidesToScroll : 1,
			autoplay : true,
			responsive : [{
				breakpoint : 1920,
				settings : {
					slidesToShow : 4
				}
			}, {
				breakpoint : 1600,
				settings : {
					slidesToShow : 3
				}
			}, {
				breakpoint : 1024,
				settings : {
					slidesToShow : 2
				}
			}, {
				breakpoint : 768,
				settings : {
					slidesToShow : 1,
					centerMode : true,
					centerPadding : '25px',
					arrows : false
				}
			}]
		});
	}
	// place-slider end

	// listing-slider start
	if ($('.listing-slider').length > 0) {
		$('.listing-slider').slick({
			slidesToShow : 1,
			slidesToScroll : 1,
			infinite : false,
			responsive : [{
				breakpoint : 768,
				settings : {
					centerMode : true,
					centerPadding : '25px',
					infinite : true,
				}
			}]
		});
	}
	// listing-slider end
	// review-slider start
	if ($('.review-slider').length > 0) {
		$('.review-slider').slick({
			slidesToShow : 2,
			slidesToScroll : 1,
			dots : true,
			arrows : false,
			responsive : [{
				breakpoint : 1600,
				settings : {
					slidesToShow : 1
				}
			}]
		});
	}
	// .news-slider start
	if ($('#news-slider').length > 0) {
		$('#news-slider ul').slick({
			slidesToShow : 2,
			slidesToScroll : 1,
			responsive : [{
				breakpoint : 1600,
				settings : {
					slidesToShow : 1
				}
			}]
		});
	}
	if ($('.article-area').length > 0) {
		$('.article-area-list').slick({
			slidesToShow : 3,
			slidesToScroll : 1,
			autoplay : true,
			responsive : [{
				breakpoint : 1600,
				settings : {
					slidesToShow : 2
				}
			}, {
				breakpoint : 768,
				settings : {
					slidesToShow : 1
				}
			}]
		});
	}
	if ($('#news-slider1').length > 0) {
		$('#news-slider1 ul').slick({
			slidesToShow : 1,
			slidesToScroll : 1
		});
	}
	// booking-slider start
	if ($('.booking-slider').length > 0) {
		$('.booking-slider').slick({
			slidesToShow : 4,
			slidesToScroll : 1,
			responsive : [{
				breakpoint : 1025,
				settings : {
					slidesToShow : 2
				}
			}, {
				breakpoint : 768,
				settings : {
					slidesToShow : 1,
					centerMode : true,
					centerPadding : '25px',
					arrows : false
				}
			}]
		});
	}
	// selectpicker start
	if ($('.selectpicker').length > 0) {
		$('.selectpicker').selectpicker();
	}
	// humberger-click start
	$(".menu-hamburger").click(function() {
		$(this).toggleClass("hamburger-active");
		$('.menu-wrap').toggleClass("menu-wrap-active");
		$('.animation-block').toggleClass("ani");
		$('.header').toggleClass("menu-stick");
		$("html").toggleClass("hidden");
	});
	// tree animation start
	$(window).scroll(function(event) {
		var scroll = $(window).scrollTop();
		$('.ani2').css('left', scroll + 1);
		$('.ani3').css('right', scroll + 1);
		$('.ani1').css('left', scroll + 1);
		$('.ani2').css('margin-left', scroll + 1);
	});
	if ($('.sticky-banner').length > 0) {
		var counter = 0;
		var x = $(".addvertise-one").outerHeight();
		var y = $(".addvertise-one").offset().top;
		var stick_banner = y + x - 100;
		$(window).scroll(function() {
			if ($(this).scrollTop() >= stick_banner && counter == 0) {
				$(".sticky-banner").addClass("sticky-add");
			} else {
				$(".sticky-banner").removeClass("sticky-add");
			}

		});
	}
	$(".close-banner").click(function() {
		$(".sticky-banner").removeClass("sticky-add");
		counter++;
	});
	if ($(window).width() >= 768 && $(window).width() <= 1024) {
		$(".email-content h4").click(function() {
			$(".email-form").slideToggle();
			$(this).toggleClass("active");
		});
	}
	//datepicker
	$(function() {
		if ($('#datepicker').length > 0) {
			$("#datepicker").datepicker({
				autoclose : true,
				todayHighlight : false
			}).datepicker('update', new Date());
		}
	});
	$("body").on("click", ".current-m", function() {
		$('#datepicker').datepicker('update', new Date());
	})
	//close btn
	$(".input-group-addon").click(function() {
		$('.date-picker-wrap strong').remove();
	});
	//country-featured slider
	if ($('.country-slider').length > 0) {
		$('.country-slider ul').slick({
			slidesToShow : 1,
			slidesToScroll : 1
		});
	}
	//Search Page Paragraph ellipsis
	if ($('.para-ellipsis').length > 0) {
		$('.search-area .para-ellipsis ').curtail({
			limit : 84,
			ellipsis : '...',
			toggle : true
		});

	}
	//Brochure Page Tab
	if ($(".brochure-tab").length > 0) {
		$('.brochure-tab li').click(function() {
			var index = $(this).index();
			$(".brochure-tab-content").removeClass("active");
			$(".brochure-tab-content").eq(index).addClass("active");
		});
	}
	//Brochure Page Feature List
	if ($(window).width() < 1025) {
		if ($(".feature-list").length > 0) {
			$(".more-featured").click(function() {
				$(".feature-list").slideToggle();
			});
		}
	}
	$(document).on('click touchstart', function(event) {
		if (!$(event.target).closest('.ms-drop,.ms-choice').length) {
			$(".ms-drop").css("display", "none");
		}
	});
	//ready
	$(".form-input .required").focusout(function() {
		var text = $(this).val();
		$(this).siblings(".red").remove();
		(($(this).val() == "")) ? $(this).addClass("error").after("<span class='red' >You need to fill it first</span>") : "";
	})
	$(".form-input .required").focusin(function() {
		$(this).removeClass("error").siblings(".red").remove();
		var text = $(this).val();
		$(this).next(".red").remove();
	})

	$(".form-validate .required").focusout(function() {

		var text = $(this).val();
		$(this).siblings(".red").remove();
		(($(this).val() == "")) ? $(this).addClass("error").after("<span class='red' >You need to fill it first</span>") : "";
	})
	$(".form-validate .required").focusin(function() {
		$(this).removeClass("error").siblings(".red").remove();
		var text = $(this).val();
		$(this).next(".red").remove();
	})
	$(".form-input .required.text-only").focusout(function() {
		var check = $(this).val();
		var textt = $(this).val();
		var text = textt.replace(/\s/g, '');
		text.trim();
		(!text.match(/^[a-zA-Z]+$/) && !(text == "") || (check[0] == " ") ) ? $(this).addClass("error").after("<span class='red' >Please enter Valid Contact name.</span>") : "";
	})
	$(".form-validate .required.text-only").focusout(function() {
		var check = $(this).val();
		var textt = $(this).val();
		var text = textt.replace(/\s/g, '');
		text.trim();
		(!text.match(/^[a-zA-Z]+$/) && !(text == "") || (check[0] == " ") ) ? $(this).addClass("error").after("<span class='red' >Please enter Valid Contact name.</span>") : "";
	})
	$(".form-validate .required.email-only").focusout(function() {
		var check = $(this).val();
		var textt = $(this).val();
		var text = textt.replace(/\s/g, '');
		text.trim();
		(!$(this).val().match(/^[\w-.+]+\@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/) && !($(this).val() == "")) ? $(this).after("<span class='red' >Please enter valid Email ID</span>") : "";
	})

	$("body .form-validate .btn-primary").on("click", function(e) {
		e.preventDefault();
		$(this).parents(".form-validate").find("input").trigger('focusout');
	})
	$(".btn-wrap .btn-primary").on("click", function(e) {
		e.preventDefault();
		$(".form-input input").trigger('focusout');
		$(".dropdown-toggle.error").siblings(".red").remove();
		for (var i = 0; i < $(".dropdown-toggle").length; i++) {
			if ($(".dropdown-toggle").eq(i).siblings(".dropdown-menu").find(".selected").length == 0) {
				$(".dropdown-toggle").eq(i).addClass("error").after("<span class='red' >You need to fill it first</span>");
			}
		}
		if ($(".fileupload-buttonbar").find(".btn-warning cancel").length == 0) {
			$(".fileupload-buttonbar").removeClass("error").siblings(".red").remove();
			$(".fileupload-buttonbar").addClass("error").after("<span class='red' >You need to upload image</span>");
		}
		if (!($("body").find("#check1").is(":checked"))) {
			$(".checkbox-wrap").removeClass("error").siblings(".red").remove();
			$(".checkbox-wrap").addClass("error").after("<span class='red' > It must be checked</span>");
		}
	})
	$("#check1").click(function(e) {
		e.stopPropagation()
		if (!($(this).is(":checked"))) {
			//$(".checkbox-wrap").addClass("error").after("<span class='red' >It must be checked</span>");
		} else {
			$(".checkbox-wrap").removeClass("error").siblings(".red").remove();
		}
	})
	$("body").on("click", ".fileinput-button", function() {

		$(".fileupload-buttonbar").removeClass("error").siblings(".red").remove();
	})
	$(".dropdown-toggle").click(function() {
		$(this).removeClass("error").siblings(".red").remove();
	})
	// Agent Start
	$(".agent-area >ul").empty()
	window.location = "#";
	var counter = 18;
	var categoryCounter = 0;
	var bool = false;
	var countLoops = -1;
	function loadData(count) {
		$.ajax({
			url : "assets/json/agent.json",
			data : count,
			type : "GET",
			crossDomain : true,
			success : function(data) {
				agentData(data, counter);
			},
			error : function(e) {
			}
		});
	}

	loadData(counter);
	function agentData(data, count) {
		var counting = 0;
		data.forEach(function(val, i) {
			if (categoryCounter < counter && countLoops < i) {
				categoryCounter++;
				countLoops = i;
				$(".agent-area >ul").append("<li><div class='d-flex agent-card align-items-center'><div class = agent-img><a href= 'javascript:void(0)'><img src = " + val.image + "></a></div><div class = agent-detail><strong><a href = 'javascript:void(0)' class = agent-title>" + val.agentTitle + "<a/></strong><address><i class = icon-map></i>" + val.address + "</address></div><div class = agent-link><a href = 'javascript:void(0)' class = btn-secondary>" + val.agentlink + "</a></div></div></li>")
			}
			counting++;
		})
		if (counter >= counting) {
			$("body").find(".btn-primary").hide();
		}
	}


	$("body").on("click", ".agent-more .btn-primary", function(e) {
		changeUrl++;
		e.preventDefault();
		counter = counter + 18;
		loadData(counter);
		window.location = "#" + changeUrl;

	});
	// Agent End

	// Blog   ninja blog Start
	$("#blog-area >ul").empty();
	var blogAppend = ($(window).width() < 768) ? 4 : ($(window).width() > 767 && $(window).width() <= 1024) ? 7 : 8;
	var advertiseCounter = 0;
	var blogCounter = 0;
	var blogLengthCompare = -1;
	var furthestORclosest = "";
	var arr = [];
	var sorted;
	var storeadd;
	function blogData() {
		$.ajax({
			url : "assets/json/blog.json",
			type : "GET",
			crossDomain : true,
			success : function(data) {
				storeadd = data.add;
				ninjaBlog(data);
			},
			error : function(e) {
			}
		});
	}

	blogData();
	function ninjaBlog(data) {
		data.data.forEach(function(val, i) {
			var obj = {};
			var date = new Date($.trim(val.date));
			var timestamp = date.getTime();
			obj.time = timestamp;
			obj.index = i;
			obj.value = val;
			arr.push(obj);
		});
		sortDate(furthestORclosest);
	}

	function sortDate(furthestORclosest) {
		var dateCounter = 0;
		sorted = arr.sort(function(a, b) {
			if (furthestORclosest == "ASC") {
				return a.time > b.time;
			} else {
				return b.time > a.time;
			}
		});
		sorted.forEach(function(val, i) {
			if (blogCounter < blogAppend && blogLengthCompare < i) {
				blogCounter++;
				blogLengthCompare = i;
				$("#blog-area >ul").append("<li class = sequencing><div class = blog><figure><a href = 'javascript:void(0)'><img src = " + val.value.image + "><i><img src = " + val.value.logo + "></i></a></figure><div class = blog-body><span>" + val.value.blogTitle + "</span><strong><a href = 'javascript:void(0)'>" + val.value.blog + "</a></strong><span class = date>" + val.value.date + "</span></div></div></li>")
				if (blogCounter % 5 == 0) {
					advertiseCounter++;
					$("#blog-area >ul").append("<li class = 'grey-bg sequencing mr-0'><div class = blog-advertisement><figure><a href = 'javascript:void(0)'><img src = " + storeadd[advertiseCounter].addimage + "></a></figure><i class = large-star><img src = 'assets/images/wheel-large.png'></i><i class = medium-star><img src = 'assets/images/wheel-one.png'></i><i class = small-star><img src = 'assets/images/wheel-small.png'></i></div></li>")
					if ($(window).width() > 1024) {
						$("#blog-area >ul >li:last-child").after("<li class = 'w-100 hidden-sm hidden-xs'><figure><img class = 'hidden-xs' src = " + storeadd[advertiseCounter].addlogo + "></figure></li>")
					}
				}
				if ((i + 1) % 3 == 0 && (i + 1) % 6 != 0) {
					$("body").find(".sequencing").eq(i).addClass("mr-0");
				}
			}
			dateCounter++;
		});
		if ($("body").find(".sequencing").length % 3 == 0) {
			$("body").find(".sequencing:last").addClass("mr-0");
		}

		if (blogAppend >= dateCounter) {
			$("body").find("#blog-more .btn-more").hide();
		}
	}

	var changeUrl = 0;
	$("body").on("click", "#blog-more .btn-more", function(e) {
		changeUrl++;
		e.preventDefault();
		var increaseCounter = ($(window).width() < 768) ? 2 : ($(window).width() > 767 && $(window).width() <= 1024) ? 3 : 5;
		blogAppend = blogAppend + increaseCounter;

		sortDate(furthestORclosest);
		window.location = "#" + changeUrl;
	});
	$("body").on("click", ".furthest", function() {
		$(".blog-area >ul").empty();
		window.location = "#" + 0;
		$("body").find(".blog-more .btn-more").show();
		blogAppend = ($(window).width() < 768) ? 4 : ($(window).width() > 767 && $(window).width() <= 1024) ? 7 : 8;
		advertiseCounter = 0;
		blogCounter = 0;
		blogLengthCompare = -1;
		furthestORclosest = "ASC";
		sortDate(furthestORclosest);
	})
	$("body").on("click", ".closest", function() {
		$(".blog-area >ul").empty();
		window.location = "#" + 0;
		$("body").find(".blog-more .btn-more").show();
		blogAppend = ($(window).width() < 768) ? 4 : ($(window).width() > 767 && $(window).width() <= 1024) ? 7 : 8;
		advertiseCounter = 0;
		blogCounter = 0;
		blogLengthCompare = -1;
		furthestORclosest = "";
		sortDate(furthestORclosest);
	})
	// Blog End

	//Search holidays found Start
	$("#search-area >ul").empty();
	var packageAppend = ($(window).width() < 768) ? 4 : ($(window).width() > 767 && $(window).width() <= 1024) ? 7 : 8;
	var packageAdvertiseCounter = 0;
	var packageCounter = 0;
	var packageLengthCompare = -1;
	var lowOrhigh = "";
	var packageArr = [];
	var packageSorted;
	var packageStoreAdd;
	function packageData() {
		$.ajax({
			url : "assets/json/holidayPackage.json",
			type : "GET",
			crossDomain : true,
			success : function(data) {
				packageStoreAdd = data.add;
				holidayPackage(data);
			},
			error : function(e) {

			}
		});
	}

	packageData();
	function holidayPackage(data) {
		data.data.forEach(function(val, i) {
			var obj = {};
			var price = val.price;

			obj.price = price;
			obj.index = i;
			obj.value = val;
			packageArr.push(obj);
		});
		sortPrice(lowOrhigh);
	}

	function sortPrice(lowOrhigh) {
		var priceCounter = 0;
		packageSorted = packageArr.sort(function(a, b) {
			if (lowOrhigh == "low") {
				return a.price > b.price;
			} else {
				return b.price > a.price;
			}
		});
		packageSorted.forEach(function(val, i) {
			if (packageCounter < packageAppend && packageLengthCompare < i) {
				packageCounter++;
				packageLengthCompare = i;
				$("#search-area >ul").append("<li class = sequence><div class = blog><figure><a href = 'javascript:void(0)'><img src = " + val.value.image + "><i><img src = " + val.value.logo + "></i></a><a class = feature>" + val.value.feature + "<a/><figcaption><span>from</span><strong>£ " + val.value.price + "<span>pp</span></strong></figcaption></figure><div class = 'blog-body d-flex justify-content-between'><div class = left><strong><a href = 'javascript:void(0)'>" + val.value.blogTitle + "</a></strong><ul class = 'd-flex align-items-center'><li><i class = icon-moon></i><span class = text-capitalize>" + val.value.nights + "</span></li><li><i class = icon-time></i><strong>DATE</strong><span>" + val.value.date + "</span></li></ul><div class = para-ellipsis><p>" + val.value.blog + "</p></div></div><div class = right><a href = 'javascript:void(0)'><img src = " + val.value.travelImage + "></a></div></div></div></li>");
				if (packageCounter % 5 == 0) {
					packageAdvertiseCounter++;
					$("#search-area >ul").append("<li class = 'grey-bg sequence mr-0'><div class = blog-advertisement><figure><a href = 'javascript:void(0)'><img src = " + packageStoreAdd[packageAdvertiseCounter].addimage + "></a></figure><i class = large-star><img src = 'assets/images/wheel-large.png'></i><i class = medium-star><img src = 'assets/images/wheel-one.png'></i><i class = small-star><img src = 'assets/images/wheel-small.png'></i></div></li>");
					if ($(window).width() > 1024) {
						$("#search-area >ul >li:last-child").after("<li class = 'w-100 hidden-sm hidden-xs'><figure><img class = 'hidden-xs' src = " + packageStoreAdd[packageAdvertiseCounter].addlogo + "></figure></li>")
					}
				}
				if ((i + 1) % 3 == 0 && (i + 1) % 6 != 0) {
					$("body").find(".sequence").eq(i).addClass("mr-0");
				}
			}
			priceCounter++;
		});
		if (($("body").find(".sequence").length) % 3 == 0) {
			$("body").find(".sequence:last").addClass("mr-0");
		}
		if (packageAppend >= priceCounter) {
			$("body").find("#search-area .btn-more").hide();
		}
	}

	var changeUrl = 0;
	$("body").on("click", "#search-area .btn-more", function(e) {
		changeUrl++;
		e.preventDefault();
		var increaseCounter = ($(window).width() < 768) ? 2 : ($(window).width() > 767 && $(window).width() <= 1024) ? 3 : 5;
		packageAppend = packageAppend + increaseCounter;
		sortPrice(lowOrhigh);
		window.location = "#" + changeUrl;
	});
	$("body").on("click", ".low", function() {
		$(".blog-area >ul").empty();
		window.location = "#" + 0;
		$("body").find(".blog-more .btn-more").show();
		packageAppend = ($(window).width() < 768) ? 2 : ($(window).width() > 767 && $(window).width() <= 1024) ? 7 : 8;
		packageAdvertiseCounter = 0;
		packageCounter = 0;
		packageLengthCompare = -1;
		lowOrhigh = "low";
		sortPrice(lowOrhigh);
	})
	$("body").on("click", ".high", function() {
		$(".blog-area >ul").empty();
		window.location = "#" + 0;
		$("body").find(".blog-more .btn-more").show();
		packageAppend = ($(window).width() < 768) ? 2 : ($(window).width() > 767 && $(window).width() <= 1024) ? 7 : 8;
		packageAdvertiseCounter = 0;
		packageCounter = 0;
		packageLengthCompare = -1;
		lowOrhigh = "";
		sortPrice(lowOrhigh);
	})
	//Search End
});

if ($(".article-sticky").length > 0) {
	$(window).on('load resize', function() {
		if ($(window).width() < 1024) {
			var ap = $("#more-holiday");
			$(".article-sticky").append(ap);
		}
		if ($(window).width() > 1024) {
			var a = new StickySidebar('#sidebar', {
				topSpacing : 20,
				bottomSpacing : 20,
				containerSelector : '.article-sticky',
				innerWrapperSelector : '.sidebar__inner'
			});
		}
	})
}

if ($(".menu-wrap").length > 0) {
	$(window).on('load', function() {
		$(".menu-wrap").addClass("menu-load");
	});

	$(document).ready(function() {
		$(".menu-wrap").addClass("menu-ready");
	});

}

//Youtube Video
$(document).on('click', '.js-videoPoster', function(e) {
	e.preventDefault();
	player.playVideo()
	$(this).hide();
});
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
function onYouTubePlayerAPIReady() {

	player = new YT.Player('ik_player_iframe', {
		height : '390',
		width : '640',
		videoId : '',
		events : {
			'onReady' : onPlayerReady,
			'onStateChange' : onPlayerStateChange
		}
	});

}

function onPlayerReady(event) {
	_isPlayerReady = true;
}

function onPlayerStateChange(event) {

	switch (event.data) {
		case YT.PlayerState.UNSTARTED:

			break;
		case YT.PlayerState.ENDED:

			$("body").find(".js-videoPoster").show()
			break;
		case YT.PlayerState.PLAYING:

			break;
		case YT.PlayerState.PAUSED:

			break;
		case YT.PlayerState.BUFFERING:

			break;
		case YT.PlayerState.CUED:

			break;
	}
}


$(window).on("load", function() {
	
	headerHeight = $("body .header").outerHeight(true);
	stickyWidth = $("body #sticky-add").width();
	calcTop = $("body .header").outerHeight(true);
	if ($("#sticky-add").length > 0) {
        slick_trackOffset = $("body").find(".listing-content .slick-track").offset().top				
		if ($(window).outerWidth() > 1024 && $(window).outerWidth() < 1600) {

			setScroll = (parseInt($("body").find(".listing-content .slick-slide").eq(2).offset().top) - $("body .header").outerHeight(true) - ($("#sticky-add").height() - $("body").find(".listing-content .slick-slide").eq(2).height()))
			setPosition = (parseInt($("body").find(".listing-content .slick-slide").eq(2).offset().top - 1 - $("body").find(".listing-content .slick-track").offset().top) - ($("#sticky-add").height() - $("body").find(".listing-content .slick-slide").eq(2).height()))
		} else {
			setScroll = (parseInt($("body").find(".listing-content .slick-slide:last-child").offset().top) - $("body .header").outerHeight(true) - ($("#sticky-add").height() - $("body").find(".listing-content .slick-slide:last-child").height()))
			setPosition = (parseInt($("body").find(".listing-content .slick-slide:last-child").offset().top + 1 - $("body").find(".listing-content .slick-track").offset().top) - ($("#sticky-add").height() - $("body").find(".listing-content .slick-slide:last-child").height()))
		}
	}
})
