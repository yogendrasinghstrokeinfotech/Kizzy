$(document).ready(function () {
  $(".Our-Specials-img a").hide();
  $("#drink-bottle-one").hover(
    function () {
      $("#drink-bottle-one img").css({
        transform: "rotate(10deg)",
        transition: "1s",
      });
      $("#drink-bottle-one a").show();
      $("#drink-bottle-one h4,#drink-bottle-one p").hide();
    },
    function () {
      $("#drink-bottle-one img").css({
        transform: "rotate(0deg)",
        transition: "1s",
      });
      $("#drink-bottle-one a").hide();
      $("#drink-bottle-one h4,#drink-bottle-one p").show();
    }
  );
  $("#drink-bottle-two").hover(
    function () {
      $("#drink-bottle-two img").css({
        transform: "rotate(10deg)",
        transition: "1s",
      });
      $("#drink-bottle-two a").show();
      $("#drink-bottle-two h4,#drink-bottle-two p").hide();
    },
    function () {
      $("#drink-bottle-two img").css({
        transform: "rotate(0deg)",
        transition: "1s",
      });
      $("#drink-bottle-two a").hide();
      $("#drink-bottle-two h4,#drink-bottle-two p").show();
    }
  );
  $("#drink-bottle-three").hover(
    function () {
      $("#drink-bottle-three img").css({
        transform: "rotate(10deg)",
        transition: "1s",
      });
      $("#drink-bottle-three a").show();
      $("#drink-bottle-three h4,#drink-bottle-three p").hide();
    },
    function () {
      $("#drink-bottle-three img").css({
        transform: "rotate(0deg)",
        transition: "1s",
      });
      $("#drink-bottle-three a").hide();
      $("#drink-bottle-three h4,#drink-bottle-three p").show();
    }
  );
  $("#drink-bottle-four").hover(
    function () {
      $("#drink-bottle-four img").css({
        transform: "rotate(10deg)",
        transition: "1s",
      });
      $("#drink-bottle-four a").show();
      $("#drink-bottle-four h4,#drink-bottle-four p").hide();
    },
    function () {
      $("#drink-bottle-four img").css({
        transform: "rotate(0deg)",
        transition: "1s",
      });
      $("#drink-bottle-four a").hide();
      $("#drink-bottle-four h4,#drink-bottle-four p").show();
    }
  );

  // cold-drink-menu start
  $(".menu-all").hover(
    function () {
      $(this).children().css({ color: "#fa754a", transition: "0.5s" });
      title = $(this).attr("data-title");
      testtt = $(".cold-drink-img").find("[data-title='" + title + "']");
      $(testtt).css({ height: "250px", transition: "1s" });
    },
    function () {
      $(this).children().css({ color: "#3d1959", transition: "0.5s" });
      title = $(this).attr("data-title");
      testtt = $(".cold-drink-img").find("[data-title='" + title + "']");
      $(testtt).css({ height: "220px", transition: "1s" });
    }
  );
  $(".cold-drink-all").hover(
    function () {
      $(this).css({ height: "250px", transition: "1s" });
      title = $(this).attr("data-title");
      testtt = $(".cold-drink-menu").find("[data-title='" + title + "']");
      testtt1 = $(".cold-drink-img").find("[data-title='" + title + "']");
      $(testtt).children().css({ color: "#fa754a", transition: "0.5s" });
      $(testtt1).css({ height: "250px", transition: "1s" });
    },
    function () {
      $(this).css({ height: "220px", transition: "1s" });
      title = $(this).attr("data-title");
      testtt = $(".cold-drink-menu").find("[data-title='" + title + "']");
      testtt1 = $(".cold-drink-img").find("[data-title='" + title + "']");
      $(testtt).children().css({ color: "#3d1959", transition: "0.5s" });
      $(testtt1).css({ height: "220px", transition: "1s" });
    }
  );
  // cold-drink-menu end

  // New Fresh start
  $(".new-fresh-box-one").hover(
    function () {
      $(".new-img-one").css({
        transform: "rotate(10deg)",
        transition: "1s",
      });
    },
    function () {
      $(".new-img-one").css({
        transform: "rotate(0deg)",
        transition: "1s",
      });
    }
  );
  $(".new-fresh-box-two").hover(
    function () {
      $(".new-img-two").css({
        transform: "rotate(10deg)",
        transition: "1s",
      });
    },
    function () {
      $(".new-img-two").css({
        transform: "rotate(0deg)",
        transition: "1s",
      });
    }
  );
  //  New Fresh end

  // $(".kizzy-Strawberry-Milk").hover(
  //   function () {
  //     $(".Strawberry-Milk-img img").css({
  //       transform: "translateY(42px)",
  //       transition: "3s",
  //     });
  //   },
  //   function () {
  //     $(".Strawberry-Milk-img img").css({
  //       transform: "translateY(-1.1rem)",
  //       transition: "3s",
  //     });
  //   }
  // );
  // $(".kizzy-Strawberry-Milk").scroll(function () {
  //   $(".Strawberry-Milk-img img").css({
  //     transform: "translateX(100px)",
  //     transition: ".5s",
  //   });
  // });
});
