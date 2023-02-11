// ECHO is on.

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const query = req.body.country;
  const appkey = "a63598a7f05ce96a458db2621bd7ba5f";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    appkey +
    "&units=Metric";

  https.get(url, function (response) {
    // console.log(response.statusCode);
    response.on("data", function (data) {
      const openWeather = JSON.parse(data);
      const temp = openWeather.main.temp;
      const countryName = openWeather.name;
      const sky = openWeather.weather[0].main;
      const WeatherDescription = openWeather.weather[0].description;
      res.write("<h1>Country : " + countryName + "</h1>");
      res.write("<h1> Today Sky Will be :  " + sky + "</h1>");
      res.write("<h1> Weather Description : " + WeatherDescription + "</h1>");
      res.write("<h1>the weather  temperature is : " + temp + "</h1>");
      res.send();

      // console.log(openWeather);
    });
  });
});

app.listen(3000, function (req, res) {
  console.log("server started at port 3000");
});

// apikey;
// a63598a7f05ce96a458db2621bd7ba5f
