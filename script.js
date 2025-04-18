$(document).ready(function () {
  $(".filter-btn").click(function () {
    var filter = $(this).data("filter");
    $(".filter-btn").removeClass("active");
    $(this).addClass("active");

    if (filter === "all") {
      $(".gallery .filter").fadeIn(400);
    } else {
      $(".gallery .filter").hide();
      $(".gallery ." + filter).fadeIn(400);
    }
  });

  $(".gallery img").hover(
    function () {
      $(this).stop(true).fadeTo(200, 0.85);
    },
    function () {
      $(this).stop(true).fadeTo(200, 1);
    }
  );
});
