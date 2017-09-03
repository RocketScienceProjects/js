var someObj = {
  friends: [
    {name: "Malfoy"},
    {name: "Crabbe"},
    {name: "Goyle"}
  ],
  color: "baby blue",
  isEvil: true
};

//extract Malfoy from the object

console.log(someObj.friends[0].name)
//or
console.log(someObj["friends"][0].name)
