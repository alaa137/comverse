
var introduction_bg = document.querySelector(".introduction");
var slideshow_icon_1 = document.querySelector(".slideshow_1");
var slideshow_icon_2 = document.querySelector(".slideshow_2");
var slideshow_icon_3 = document.querySelector(".slideshow_3");
var slideshow_icon_4 = document.querySelector(".slideshow_4");

window.onload = slideShow(1);

function slideShow(icon)
{
	slideshow_icon_1.style.backgroundColor = null;
	slideshow_icon_2.style.backgroundColor = null;
	slideshow_icon_3.style.backgroundColor = null;
	slideshow_icon_4.style.backgroundColor = null;
	
	if(icon == 1)
	{
		slideshow_icon_1.style.backgroundColor = "gray";
		introduction_bg.style.backgroundImage = "url('img/slide-bg-complexity.jpg')";
	}
	else if(icon == 2)
	{
		slideshow_icon_2.style.backgroundColor = "gray";
		introduction_bg.style.backgroundImage = "url('img/homepage_bulb.jpg')";
	}
	else if(icon == 3)
	{
		slideshow_icon_3.style.backgroundColor = "gray";
		introduction_bg.style.backgroundImage = "url('img/HP_TOP_Be_Ready.jpg')";
	}
	else if(icon == 4)
	{
		slideshow_icon_4.style.backgroundColor = "gray";
		introduction_bg.style.backgroundImage = "url('img/hp_top_be_prosperous.jpg')";
	}
}

slideshow_icon_1.addEventListener("click",function(){slideShow(1);});
slideshow_icon_2.addEventListener("click",function(){slideShow(2);});
slideshow_icon_3.addEventListener("click",function(){slideShow(3);});
slideshow_icon_4.addEventListener("click",function(){slideShow(4);});

c_nav_display = 1;
document.querySelector(".hamburger_bg").addEventListener("click",function(){
	
	if(c_nav_display)
	{
		document.querySelector(".c_nav").style.display= "block";
		c_nav_display = 0;
		
		document.querySelector(".search_form").style.display = "none";
		search_box = 1;
	}
	else
	{
		document.querySelector(".c_nav").style.display = "none";
		c_nav_display = 1;
	}
});

search_box = 1;
document.querySelector(".search_bg").addEventListener("click",function(){
	
	if(search_box)
	{
		document.querySelector(".search_form").style.display= "block";
		search_box = 0;
		
		document.querySelector(".c_nav").style.display= "none";
		c_nav_display = 1;
	}
	else
	{
		document.querySelector(".search_form").style.display = "none";
		search_box = 1;
	}
});
