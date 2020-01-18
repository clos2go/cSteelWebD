

var movies = [{
    title: "Jaws",
    rating: 5,
    hasWatched: true,
},
{
    title: "Tin Cup",
    rating: 3,
    hasWatched: false,
},
{
    title: "Friday the 13th",
    rating: 4.5,
    hasWatched: true,
},
{
    title: "Cujo",
    hasWatched: true,
    rating: 4.5
},
];


//iterating through the array and objects with for loop
// for (var i = 0; i < movies.length; i++) {
//     var watched = movies[i].hasWatched;
//     var movTitle = movies[i].title;
//     var movRating = movies[i].rating
//     if (movies[i].hasWatched === true) {
//         watched = "have";
//     } else {
//         watched = "have not"
//     }
//     console.log("You " +watched+ " watched \"" +movTitle+ "\" - " +movRating+ " stars")
// }


//Iterating with forEach

// movies.forEach(function(movie){
//     var result = "You have ";
//     if (movie.hasWatched) {
//         result += "watched ";
//     } else {
//         result += "not seen ";
//     }
//     result += "\"" +movie.title+ "\" - " +movie.rating+ " stars";
//     console.log(result);
// });

//Iterating with forEach() and buildString() function
function buildString(movie) {
    var result = "You have ";
    if (movie.hasWatched) {
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" +movie.title+ "\" - " +movie.rating+ " stars";
    return result;
}

movies.forEach(function(movie){
    console.log(buildString(movie));
});

