var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//forEach taking an annonynous function.
num.forEach(function(x){
  if(x%3 === 0){
    console.log(x);
  }
})


//using for loop instead of forEach;
console.log("printing from for loop implementation")
for(var i=0; i < num.length; i++){
  if(num[i]%3 === 0)
  console.log(num[i]);
}
