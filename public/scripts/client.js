/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  //highlight the footer element when mouse hover
  $(".tweet-footer-right").children().mouseover(function(){
    $(this).css("color",'orange');
  }).mouseout(function(){
    $(this).css("color",'');
  })

  //box shadow when mouse hover
  $("article.tweet").mouseover(function(){
    $(this).css("box-shadow","5px 10px #888888");
  }).mouseout(function(){
    $(this).css("box-shadow","");
  })
  
  //counter color toggle due to count of chars
  $(".top-bar-right").click(function(){
    $(".new-tweet").toggle();
  })  
});

