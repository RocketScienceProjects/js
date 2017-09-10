var express = require('express');
var web = express();

web.get("/", function(req, res){
  res.send("Hi there, welcome to my world!")
});

web.get("/speak/:animal", function(req, res){
  var animal = req.params.animal;
  console.log(animal.typeof);
  var voice = {pig: "Oink", dog: "Woof", cow: "Moo", bem: "Arie"};
  res.send(voice[animal]);
});

web.listen(9090);
