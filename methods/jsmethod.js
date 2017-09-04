/*
when a function is out of the properties/attribute of an object, it is known also
called a method in javascript
Fucntion is used in objects:
1. Avoid Namespace collision
 */

var workout = {
  set1: "benchpress",
  set2: "incline press",
  set3: "fly",
  //notice the function name, its still a symbol and doesn't need the var keyword
  calories: function(x,y) {
    return x + y;
  }
}

workout.energyLevel = "Strong"  // this adds a new property in the object

console.log(workout)

console.log(workout.calories(3,4))
