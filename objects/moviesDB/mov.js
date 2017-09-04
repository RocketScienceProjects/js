var movie = [
  {
    title: "The Last Samurai",
    rating: 4,
    hasWatched: true
  },
  {
    title: "The Hobbits",
    rating: 5,
    hasWatched: true
  },
  {
    title: "SOR",
    rating: 5,
    hasWatched: false
  }
];

//loop to access data:

// for (i=0; i<movie.length; i++){
//   if(movie[i].hasWatched === true){
//     console.log("You have watched movie\[i\].title - movie\[i\].rating stars")
//   }
// }


movie.forEach(function(n){
  if(n.hasWatched){
    console.log( `You have watched \"${n.title}\" - ${n.rating} stars` )
  }
})
