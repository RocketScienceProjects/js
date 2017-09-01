var num = 5;
console.log("printing numbers divisible by 5 and 6 between 5 and 50")
while (num <= 50) {
  if(num%3 == 0 && num%5 == 0) {
    console.log(num);
  }
  num++;
}
