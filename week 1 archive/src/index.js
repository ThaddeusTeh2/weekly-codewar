//array (holding movies)
const movies = [
  { title: "The Matrix", durationMinutes: 136, genre: "Sci-Fi" },
  { title: "Finding Nemo", durationMinutes: 100, genre: "Animation" },
  { title: "Lord of the Rings", durationMinutes: 178, genre: "Fantasy" },
  { title: "Up", durationMinutes: 96, genre: "Animation" },
];
console.log(durationMinutes);

//function
function formatMovieTimes(movies) {
  return movies.map(({ durationMinutes }) => {
    //convert mins to hours (.floor rounds number so it doesnt go on forever)
    const hours = Math.floor(durationMinutes / 60);
    //get the remaining mins w/ "%"
    const remainingMinutes = durationMinutes % 60;
    const formattedTime = hours + "h" + remainingMinutes + "m";
    return durationMinutes > 120 ? formattedTime + "⏰" : formattedTime;
  });
}
//renames function
const formattedTimes = formatMovieTimes(movies);
//echo
console.log(formattedTimes);
