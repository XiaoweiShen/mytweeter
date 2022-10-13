/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  //hide or show the compose tweet when click
  $(".top-bar-right").click(function(){
    $(".new-tweet").toggle();
  })  
});

