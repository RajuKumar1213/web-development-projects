const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended : true}))

app.get("/" , function(req, res ){
    res.sendFile(__dirname+"/index.html");
})

app.post("/" , function(req, res){
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);

    let bmi = weight/Math.pow(height,2);
    res.send("<h1>Your Bmi is </h1>"+bmi);
})

app.listen(3000 , function(){
    console.log("Server is running at port 3000");
})