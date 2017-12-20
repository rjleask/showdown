const express = require("express");
var app = express();
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const cookieParser = require("cookie-parser");
const db = require("./models");
const mysql = require("mysql");

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public/assets"));
app.use(bodyParser.urlencoded({ extended: false }));

// require("./routes/settings-api.js")(app);
// require("./routes/user-api.js")(app);
app.get("/", function(req, res) {
  db.Masters.findAll({
    where: {
      nameFirst: "david",
      nameLast: "ortiz"
    }
  }).then(function(data) {
    res.send(data);
  });
});

var PORT = process.env.PORT || 3000;
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
