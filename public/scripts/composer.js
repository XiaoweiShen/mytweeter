$(document).ready(function () {
  $("#scrollup").hide();
  $(window).scroll(function () {
    if ($(document).scrollTop() >= 120) {
      $("#scrollup").show();
    } else {
      $("#scrollup").hide();
    }
  });

  $("#scrollup").click(function () {
    $(window).scrollTop(0);
    $("#scrollup").hide();
    $(".new-tweet").show();
  });
});
