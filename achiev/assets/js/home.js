function loadModalScript(){$.ajax({url:"/assets/js/modal.js",dataType:"script",beforeSend:function(i){}})}function animateElements(){$(".logos").removeClass("animate"),setTimeout(function(){$(".social, .nav, .slide-wrapper").removeClass("animate")},400);var i=400;$(".slider .slide-wrapper .slide").each(function(){var n=$(this);setTimeout(function(){n.removeClass("animate")},i),i+=200}),setTimeout(function(){$(".order").removeClass("animate"),$(".sidebar").removeClass("animate")},800),setTimeout(function(){$(".social, .nav, .order").removeClass("clear-animation")},1200),setTimeout(function(){$(".switch-lang").removeClass("animate")},1700)}function sliderPos(){if($(".slider .slide-wrapper").outerHeight(!0)<$(window).height()&&$(window).width()>=960)$(window).height(),$(".slider .slide-wrapper").outerHeight(!0);else 0;$(".slider").width()<$(window).width()&&$(window).width()>=960?$("body").addClass("overflow"):$("body").removeClass("overflow")}function navVisibility(){if($(window).width()<960){var i=parseInt($("body").scrollTop());$(window).width()<740&&(i+=30),i<130&&$(".navbar").css({opacity:1}),i>140&&$(".navbar").css({opacity:.9}),i>160&&$(".navbar").css({opacity:.8}),i>180&&$(".navbar").css({opacity:.7}),i>200&&$(".navbar").css({opacity:.6}),i>220&&$(".navbar").css({opacity:.3}),i>240&&$(".navbar").css({opacity:.3}),i>260&&$(".navbar").css({opacity:.2}),i>280&&$(".navbar").css({opacity:.1}),i>300&&$(".navbar").css({opacity:0})}else{var n=parseInt($(".slider").css("left")),a=$(window).width()-$(".slider").width()-n;a<-200&&($(".sidebar").fadeOut("fast").css({"z-index":"0"}),$(".switch-lang").fadeIn()),a>-200&&($(".sidebar").fadeIn("fast").css({"z-index":"100"}),$(".switch-lang").fadeOut()),n>-100&&$(".navbar").fadeIn("fast"),n<-100&&$(".navbar").fadeOut("fast")}}function popupBgPreload(){$(".preloader").append('<img src="/assets/images/modal-bg.png" alt="" class="imgpreload"><img src="/assets/images/inners-bg.png" alt="" class="imgpreload">')}$(window).on("load",function(){"use strict";$(".preloader-image").delay(100).fadeOut("fast"),setTimeout(function(){animateElements()},300),popupBgPreload()}),$(document).ready(function(){$(".preloader-image").delay(300).removeClass("inner").addClass("home"),"ru"==$("html").attr("lang")?window.stepLang="Шаг":window.stepLang="Step",$.ajax({url:"/includes/modal.php?steplang="+stepLang,beforeSend:function(i){}}).done(function(i){$("#include-modal").html(i),setTimeout(function(){loadModalScript()},300)}),$(document).on("click",".thumb",function(i){i.preventDefault();var n=$(this).find("a").attr("href");window.location=n}),$(window).width()<960&&$(".block-infos").before($(".block-wow")),$(window).resize(function(){sliderPos()}),setTimeout(function(){$(window).resize(),navVisibility()},100),$(document).on("click",".navigation a",function(i){i.preventDefault(),$("html, body").animate({scrollTop:0},1500,function(){navVisibility()})}),$(window).on("orientationchange",function(i){$(window).width()<599?setTimeout(function(){$(window).resize()},1500):($("html, body").css({opacity:0}),location.reload())}),$("html, body").animate({scrollTop:0},20),$(document).on("click",".nav a.show-contacts",function(i){i.preventDefault(),$(".social").addClass("active"),$(".navbar .invisible").slideUp(),$(".contacts").slideDown()}),$(document).on("click",".contacts .close",function(i){i.preventDefault(),$(".social").removeClass("active"),$(".navbar .invisible").slideDown(),$(".contacts").slideUp()}),$("body").touchScrolling(),$(document).scroll(function(){navVisibility()})}),function(i){var n=i.jInvertScroll([".scroll"],{width:"auto",height:"auto",onScroll:function(i){navVisibility()}});i(window).resize(function(){i(window).width()<960?n.destroy():n.reinitialize()})}(jQuery),$.fn.touchScrolling=function(){var i=0,n=$(this);n.bind("touchstart",function(a){var e=a.originalEvent;$(window).width()<960||(i=n.scrollTop()+e.touches[0].pageX)}),n.bind("touchmove",function(a){var e=a.originalEvent;$(window).width()<960?navVisibility():(n.scrollTop(i-e.touches[0].pageX),e.preventDefault())})};