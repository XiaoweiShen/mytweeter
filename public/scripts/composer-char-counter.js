//const { text } = require("body-parser");

//counter of chars and color change due to num of chars
let count = 140;
$(document).ready(function() {
  $('#tweet-text').on('input', function(event){
    count=140 - $('#tweet-text').val().length;
    $('#new-count').toggleClass("negtive-counter",count<0)
    $('#new-count').text(count);
    })
  // --- our code goes here ---

});