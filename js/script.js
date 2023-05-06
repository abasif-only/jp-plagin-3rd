
// nav
$(document).ready(function(){
$(function(){
  $(".ss-menu").ssMenu({
    theme: "purple",
  });
});

// nav
 $("menu-toggle-btn").click(function () {
    $(".menu-toggle-btn").toggleClass("effect");
    $(".menu-list").toggleClass("effect");
  });

// slider
$('.stonehenge').stonehenge({

  // animation speed
  speed: 1.0,

  // config the auto-scroll behavior
  autoscroll: true,
  autoscrollOnce: true,
  autoscrollSpeed: 20,
  autoscrollPeriod: 500,
  autoscrollEasing: 'linear', 
});

$('.example div').loadimage({
  transition: 'opacity 20s', 
  width:"500px", 
  height:"400px",  
  border: 'solid gray 1px',
  // more CSS properties here
});
});



