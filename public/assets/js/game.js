$(document).ready(() => {
  // const md5 = require("md5");
  // $(".game-page-wrapper").append(
  //   "<button class='btn btn-default roster2'>Roster</button>"
  // );
  // team1
  let url = "https://gateway.marvel.com:443/v1/public/characters";
  let pubKey = "9e7c676a7c13e64bae9b4c03ead26828";
  let prvKey = "028fba96261349e50dc0501868d87f6b85d5bf01";
  var ts = new Date().getTime();
  let hash = CryptoJS.MD5(ts + prvKey + pubKey).toString();
  $.getJSON(url, {
    ts: ts,
    apikey: pubKey,
    hash: hash
  })
    .done(function(data) {
      // sort of a long dump you will need to sort through
      console.log(data);
    })
    .fail(function(err) {
      // the error codes are listed on the dev site
      console.log(err);
    });

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
