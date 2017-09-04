var comments = {};
comments.data = ["hello", "hi there", "i went to the club"]
//console.log(comments)


//print the comments data using a global Fucntion of forEach

var print = function(arr){
  arr.forEach( function(el) {
    console.log(el);
    }
  )
};

console.log(print(comments.data))



//make the print function to a part of the comments obj, that access &
//prints the comments.data
comments.print = function(){
  this.data.forEach( function(el) {
    console.log(el);
    }
  )
};

console.log(comments)
console.log(comments.print())
