
  //prompt for the action & store the input
  var input = prompt("What would you like to do? Options: new/list/quit")
  //define an empty array to hold the list
  var todo = [];
  //body of the app
  while(input !== "quit"){
  if(input === "new"){
    var item = prompt("Enter the item for todo")
    todo.push(item);
  } else if(input === "list") {
    console.log(todo);
  }
  var input = prompt("What would you like to do? Options: new/list/quit");
  }
  console.log("Goodbye & Have a nice day!!!!")
