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
