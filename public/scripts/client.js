/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const createTweetElement = function(tweet) {
  let $tweet = `
   <article class="tweet">
     <section class="tweet-header">
     <div class="tweet-header-left">
     <img class = 'avatar' src = ${tweet['user']['avatars']}>
     <p class="tweet-user-name">${tweet['user']['name']}</p>
    </div>
  <p class="tweet-name2">${tweet['user']['handle']}</p>
  </section>
  <section class="tweet-content">
     ${escape(tweet['content']['text'])}
   </section>
   <footer class="tweet-footer">
    <div class="tweet-footer-time">${timeago.format(tweet['created_at'])}</div>
    <div class="tweet-footer-right">
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </div>
  </footer>
</article>
  `
 return $tweet;
};

$(document).ready(function() {
    
  $('p.err-toolong').hide();
  //hide or show the compose tweet when click
  $(".top-bar-right").click(function(){
    $(".new-tweet").toggle();
  });

  
  $("form#newtweet").submit(function(event){
    event.preventDefault();
    const querystring =  $(this).serialize();
      $.ajax({
      type:"POST",
      url:`/tweets`,
      data:querystring
    }).then(()=>{
      $("#tweet-text").val("");
      $("#new-count").val('140');
      loadTweets();
    });
  });

  //get array and render into tweets container
  const renderTweets = function(tweetdata) {
    for (let tweet of tweetdata) {
      const $tweet = createTweetElement(tweet);
      $('section.tweets-container').prepend($tweet);
    }
  return;
  };

  //fetch data from server..
  const loadTweets = function(){
    $.ajax(
      '/tweets',
      { method: 'GET' }
    ).then((data)=>{
      $('section.tweets-container').empty();
      renderTweets(data);
      //console.log(data);
    })
  };
  loadTweets();
}); 
