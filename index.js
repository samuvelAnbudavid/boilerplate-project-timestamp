// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();
require('dotenv').config()
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/:date?", function (req, res) {
 
 let date = req.params.date

let convertDate = Number(date)?date*1:date
if(!date){
  valueDate={"unix":  Math.floor(new Date().getTime() ),"utc":new Date().toUTCString()}

}
 else if(new Date(convertDate).toUTCString()=='Invalid Date'){
    res.json({error : "Invalid Date" });
  }
 
  else{
  valueDate={"unix":  Math.floor(new Date(convertDate).getTime() ),"utc":new Date(convertDate).toUTCString()}
  }
 
  res.json(valueDate);
 



});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
