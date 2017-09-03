//Initializing objects in js
//make an empty objects
 var person = {}

//or
var man = {
  name: "Sinclair",
  age: 27,
  city: "Madrid"
}

//or
var person = new Object();
person.name = "jack";
person.age = 21;


//Retrieving from objects


var man = {
  name: "Sinclair",
  age: 27,
  city: "Madrid"
}

console.log(man["name"])
man["age"] +=1
console.log(man["age"])


//Objects can hold any data types
