//This is a function that calculates the avarage and returns the rounded value
function average(arr){
  var sum = arr.reduce((a, b) => a + b, 0);
  console.log(Math.round(sum/arr.length))
  }


average([1, 2, 4])
