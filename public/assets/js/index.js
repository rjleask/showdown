$("button").on("click", function() {
  alert("works");
  $.ajax({
    method: "GET",
    url:
      "http://api.sportradar.us/mlb-t6/seasontd/2017/REG/teams/93941372-eb4c-4c40-aced-fe3267174393/statistics.json?api_key=27x4sf52ca9vgqkpn5hg7e9t",
    dataType: "json",
    success: function(data) {
      console.log(data);
    }
  });
});
