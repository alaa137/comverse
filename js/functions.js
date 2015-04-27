/**
 * Created by alaa1_000 on 27/4/2015.
 */

var introduction_bg = document.querySelector(".introduction");
var slideshow_icon_1 = document.querySelector(".slideshow_1");
var slideshow_icon_2 = document.querySelector(".slideshow_2");
var slideshow_icon_3 = document.querySelector(".slideshow_3");
var slideshow_icon_4 = document.querySelector(".slideshow_4");

slideshow_icon_1.addEventListener("click",function(){
   introduction_bg.style.backgroundImage = "url('img/slide-bg-complexity.jpg')";
   slideshow_icon_1.style.backgroundColor = "gray";
   slideshow_icon_2.style.backgroundColor = null;
   slideshow_icon_3.style.backgroundColor = null;
   slideshow_icon_4.style.backgroundColor = null;
});

slideshow_icon_2.addEventListener("click",function(){
	introduction_bg.style.backgroundImage = "url('img/homepage_bulb.jpg')";
   slideshow_icon_1.style.backgroundColor = null;
   slideshow_icon_2.style.backgroundColor = "gray";
   slideshow_icon_3.style.backgroundColor = null;
   slideshow_icon_4.style.backgroundColor = null;
});

slideshow_icon_3.addEventListener("click",function(){
   introduction_bg.style.backgroundImage = "url('img/HP_TOP_Be_Ready.jpg')";
   slideshow_icon_1.style.backgroundColor = null;
   slideshow_icon_2.style.backgroundColor = null;
   slideshow_icon_3.style.backgroundColor = "gray";
   slideshow_icon_4.style.backgroundColor = null;
});

slideshow_icon_4.addEventListener("click",function(){
   introduction_bg.style.backgroundImage = "url('img/hp_top_be_prosperous.jpg')";
   slideshow_icon_1.style.backgroundColor = null;
   slideshow_icon_2.style.backgroundColor = null;
   slideshow_icon_3.style.backgroundColor = null;
   slideshow_icon_4.style.backgroundColor = "gray";
});