$(".header-right > a").click(
    function () {
      $(".hamburger-menu").show();
    }
);

$(".close").click(
  function () {
    $(".hamburger-menu").hide();
  }
);


// ALTERNATIVA
// var visible = false;
//
// $(".fas").click(
//   function () {
//     if(visible) {
//       $(".hamburger-menu").hide();
//       visible = false;
//     } else {
//       $(".hamburger-menu").show();
//       visible = true;
//     }
//   }
// )
