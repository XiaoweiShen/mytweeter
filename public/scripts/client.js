/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  }
  // {
  //   "user": {
  //     "name": "Descartes",
  //     "avatars": "https://i.imgur.com/nlhLi3I.png",
  //     "handle": "@rd" },
  //   "content": {
  //     "text": "Je pense , donc je suis"
  //   },
  //   "created_at": 1461113959088
  // }
];

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
     ${tweet['content']['text']}
   </section>
   <footer class="tweet-footer">
    <div class="tweet-footer-time">${tweet['created_at']}</div>
    <div class="tweet-footer-right">
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </div>
  </footer>
</article>
  `
  console.log($tweet);
  return $tweet;
};

$(document).ready(function() {
  //hide or show the compose tweet when click
  $(".top-bar-right").click(function(){
    $(".new-tweet").toggle();
  })  

  const $tweet = createTweetElement(data[0]);
  $('section.tweets-container').append($tweet);
});





//const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
// console.log($tweet); // to see what it looks like


//const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
//}



//renderTweets(data);