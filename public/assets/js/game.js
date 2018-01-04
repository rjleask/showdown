// team1
$(".game-page-wrapper").on("click", ".team1", () => {
  $(".team1")
    .parent()
    .slideUp(500, () => {});
});
$(".game-page-wrapper").on("click", ".roster", () => {
  let nav = $("nav");
  $(".roster")
    .parent()
    .find(nav)
    .slideDown(500, "linear", () => {});
});
// team 2
$(".nav-bot").on("click", ".team2", () => {
  $(this)
    .parent()
    .slideDown(500, () => {});
});
// $(".game-page-wrapper").on("click", ".roster2", () => {
//   let nav = $(".nav-bot");
//   $(".roster2")
//     .parent()
//     .find(nav)
//     .slideUp(500, "linear", () => {});
// });
