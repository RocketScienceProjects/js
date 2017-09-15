var express = require('express');
var app = express();
var request = require('request');
app.set("view engine", "ejs"); //this is for templating

app.get("/", function(req,res){
  res.render("search");
})


app.get("/results", function(req, res){
  //get the search string
  var user_input = req.query.search1;
  console.log("Keyword specified by the user: " + user_input);
  //contruct the new url
  var url = "http://omdbapi.com/?s=" + user_input + "&apikey=thewdb";
  console.log("new url: " + url);
  request(url, function(error, response, body){
    if(!error && response.statusCode == 200){
      var data = JSON.parse(body);
      //res.send(results['Search']);
      res.render("results", {data: data});
    }
  })
})


app.listen(8989, function(){
  console.log("movie app have started..............")
})
