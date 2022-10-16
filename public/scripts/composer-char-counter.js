//const { text } = require("body-parser");

//counter of chars and color change due to num of chars
let count = 140;
$(document).ready(function() {
  $('.new-submit').prop('disabled',true);
  $('.new-submit').addClass('btn-disable');
  $('#tweet-text').on('input', function(event){
    count=140 - $('#tweet-text').val().length;
    $('#new-count').toggleClass("negtive-counter",count<0);
    $('#new-count').text(count);
    if(count<0){
      $('p.err-toolong').slideDown();
      $('.new-submit').prop('disabled',true);
    }else{
      $('p.err-toolong').slideUp();
      $('.new-submit').prop('disabled',false);
    }
    $('.new-submit').toggleClass('btn-disable',(count===140||count<0));
    
  })

});