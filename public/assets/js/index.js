// $(function() {
//   var i = 0;
//   var images = ["gold1.gif", "gold3.gif"];
//   var image = $(".card-box");
//   image.css("background-image", "url(/images/gold1.gif)");
//   setInterval(function() {
//     image.fadeOut(1000, function() {
//       image.css("background-image", "url(/images/" + images[i] + ")");
//       image.fadeIn(1000);
//     });
//     if (i == images.length - 1) {
//       i = 0;
//     } else {
//       i++;
//     }
//   }, 3000);
// });
$(".search-bar").on("change", function(e) {
  e.preventDefault();
  let result = $(this)
    .val()
    .split(" ");
  let obj = { first: result[0], last: result[1] };
  if (result.length <= 1 || result.length > 2) {
    alert(
      "Please enter first name then last name of player with space inbetween"
    );
  } else {
    $.post("/", obj, function(data) {
      console.log(data);
    });
  }
});
$(".btn").on("click", function(e) {
  e.preventDefault();
  console.log(e);
  // $.post("/",values,function())
  // })
});
