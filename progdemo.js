 
( function($) {
	
		$.fn.progressBar = function(options) {
			var settings = $.extend({
				limit : [50, 100, 150, 200],
				value : [1500, 1000, 1200, 5000],
				content : ["content1", "content2", "content3", "content4"],
				flagText : "text",
				progress : "100"
			}, options);
			console.log(settings.limit.length)
			var animatePercent = 100 / settings.limit.length;
			var c = 0;
			var bool = false;
			var flag = false;
			if (settings.limit.length < 2 || settings.limit.length > 4) {
				alert("Limit Criteria is greater than 1 and less than 5 ")
			} else if (settings.limit.length != settings.value.length || settings.content.length != settings.limit.length) {
				alert("limit and value or content should be in same length")
			} else if (repeatLimit()) {
				alert("Limit Value Can not repeat");
			} else {
				//alert()
				$(this).append("<div id='wrapper'><div class='content'><section class='progress-bar'><div class='container'><div class='progress-bar-wrap'><div class='bar-ui-wrap'><ul class='bar-ui clearfix'></ul><div class='overlay-color'><div class='current-value'>	<strong>90</strong>	<span>abc text</span></div></div><ul class='progress-update clearfix'></ul></div></div></div></section></div></div>");
				var setWidth = (($(".container").width() - 40) / (settings.limit.length));
				var progressAnimate = ($(".container").width() * settings.progress) / 100;
				var animationTime = 4000;
				for (var i = 0; i < settings.limit.length; i++) {
					var setLimit = settings.limit[i];
					var setValue = settings.value[i];
					var setContent = settings.content[i];
					if (setLimit < settings.progress) {
						var percentage = animatePercent * (i + 1);
						var maxLimit = settings.limit[i + 1];
						var minLimit = setLimit;
						var getPer = settings.progress - minLimit;
						bool = true;
						flag = true;
					} else if (maxLimit == undefined) {
						var percentage = animatePercent * (i );
						var maxLimit = settings.limit[i];
						var minLimit = 0;
						var getPer = settings.progress - minLimit;
						bool = true;
						if (maxLimit > getPer) {
							bool = false;
						}
					}
					$(".progress-update").append("<li style='width: " + setWidth + "px;'><strong> " + setValue + " </strong><span>" + setContent + "</span></li>");
					$(".bar-ui").append("<li style='width: " + setWidth + "px;'><div class='unreached '><span class='step-values '> " + setLimit + " </span><i class='icon-tick'></i></div></li>");
				}
			
				var remainPercentage = (animatePercent * ((getPer * 100) / (maxLimit - minLimit))) / 100;
				var setColor = (percentage / animatePercent);
				progressAnimate = (percentage + remainPercentage);
			
				var callBacktime = (animationTime / ((progressAnimate / animatePercent)));
	
				$(".bar-ui").find("li").eq(0).find("div").prepend("<span class='step-values beg'> 0 </span>");
				$(".current-value").find("strong").text(settings.progress);
				$(".current-value").find("span").text(settings.flagText);
				$(".overlay-color").css("overflow","visible");
				$(".bar-ui").find("li").eq(0).find("div").addClass("processing").removeClass("unreached");
				
				var myVar = setInterval(function() {
					
					myTimer()
					
				}, callBacktime);
				
				
				function demo(v){
					$(".overlay-color").width(v+"%");
					setTimeout(function(){
					 console.log(v+"%"=='25%')
						demo(v+1)
					},100)
					// "width" : progressAnimate + '%'
				}
				demo(0)
				// $(".overlay-color").animate({
					// "width" : progressAnimate + '%'
				// }, animationTime, function() {
					// //$(".bar-ui").find("li").eq(setColor).find("div").addClass("processing").removeClass("unreached");
					// $(".bar-ui").find("li").eq(setColor).find("div").find("span").css("color", "#d75800");
				// });
				
				
				
				
				function myTimer() {
					
					if (bool) {
						
						$(".bar-ui").find("li").eq(c+1).find("div").addClass("processing").removeClass("unreached");
						$(".bar-ui").find("li").eq(c).find("div").addClass("active-complete").removeClass("unreached");
						$(".progress-update").find("li").eq(c).find("strong").css("color", "#8ac43f");
					}
					c++;
					if (c >= setColor) {
						myStopFunction();
					}
				}

				function myStopFunction() {
					clearInterval(myVar);
					setTimeout(function() {
						
						if (maxLimit == settings.progress) {
							if (flag) {
								$(".bar-ui").find("li").eq(c).find("div").addClass("active-complete").removeClass("unreached");
								$(".progress-update").find("li").eq(c).find("strong").css("color", "#8ac43f");
							}
						}
					}, 700)
				}

			}
			
			function repeatLimit() {
				var bool1 = false;
				for (var k = 0; k < settings.limit.length; k++) {
					for ( j = k + 1; j < settings.limit.length; j++) {
						if (settings.limit[k] == settings.limit[j]) {
							bool1 = true;
						}
					}
				}
				return bool1;
			}

		}
	}(jQuery));
