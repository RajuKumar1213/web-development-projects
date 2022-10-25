const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

let today = new Date();
let currentDate = today.toLocaleDateString("en-US", options);
console.log(currentDate)

app.get("/", function (req, res) {
    res.render("index", {currentDate: "headingDate"});
})



app.listen(3000, function () {
    console.log("The server is runnig at port 3000");
})

