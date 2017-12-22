const express = require("express");
var app = express();
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const cookieParser = require("cookie-parser");
const db = require("./models");
const mysql = require("mysql");
const inquirer = require("inquirer");

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public/assets"));
app.use(bodyParser.urlencoded({ extended: false }));

// require("./routes/settings-api.js")(app);
// require("./routes/user-api.js")(app);
app.get("/", function(req, res) {
  db.Battings.findAll({
    where: {
      teamID: "BOS",
      yearID: 2016
    }
  }).then(function(data) {
    let bigHitters = [];
    data.forEach(function(player) {
      if (player.G > 30) {
        bigHitters.push(player);
      }
    });
    getPlayerInfo();
    res.send(bigHitters);
  });
});
function getPlayerInfo() {
  inquirer
    .prompt([
      {
        name: "playerID",
        message: "whats the players id?"
      },
      {
        name: "name",
        message: "whats the players name?"
      },
      {
        name: "team",
        message: "whats the teams name?"
      },
      {
        name: "base",
        message: "whats the onBase?"
      },
      {
        name: "speed",
        message: "whats the speed?"
      },
      {
        name: "position",
        message: "position?"
      },
      {
        name: "cost",
        message: "whats the cost?"
      },
      {
        name: "fielding",
        message: "whats his fielding?"
      },
      {
        name: "gb",
        message: "outGB?"
      },
      {
        name: "fb",
        message: "out fb?"
      },
      {
        name: "so",
        message: "out SO?"
      },
      {
        name: "walk",
        message: "walks?"
      },
      {
        name: "single",
        message: "whats the singles?"
      },
      {
        name: "double",
        message: "doubles?"
      },
      {
        name: "triples",
        message: "triples?"
      },
      {
        name: "homers",
        message: "homers?"
      }
    ])
    .then(function(answers) {
      db.Players.create({
        playerID: answers.playerID,
        playerName: answers.name,
        team: answers.team,
        onBase: parseInt(answers.base),
        speed: parseInt(answers.speed),
        position: answers.position,
        cost: parseInt(answers.cost),
        fielding: parseInt(answers.fielding),
        outGB: answers.gb,
        outFB: answers.fb,
        outSO: answers.so,
        walk: answers.walk,
        single: answers.single,
        double: answers.double,
        triple: answers.triples,
        homer: answers.homer
      });
    });
}

var PORT = process.env.PORT || 3000;
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
