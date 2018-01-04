$(document).ready(() => {
  // $(".game-page-wrapper").append(
  //   "<button class='btn btn-default roster2'>Roster</button>"
  // );
  // team1
  $(".game-page-wrapper").on("click", ".team1", () => {
    $(".team1")
      .parent()
      .addClass("disappear")
      .removeClass("reappear");
  });
  $(".game-page-wrapper").on("click", ".roster", () => {
    let nav = $(".navbar");
    $(".roster")
      .parent()
      .find(nav)
      .addClass("reappear")
      .removeClass("disappear");
  });
  // $(".card-box").on("click", () => {
  //   $(this).remove();
  // });
  // team 2
  // $(".game-page-wrapper").on("click", ".team2", () => {
  //   $(".team2")
  //     .parent()
  //     .addClass("disappear")
  //     .removeClass("reappear");
  // });
  // $(".game-page-wrapper").on("click", ".roster2", () => {
  //   let nav = $(".nav-bot");
  //   $(".roster2")
  //     .parent()
  //     .find(nav)
  //     .addClass("reappear")
  //     .removeClass("disappear");
  // });
});
