/* Challenge 7: Movie Watch Time
 * Difficulty: 8 kyu
 *
 * Description:
 * You're building a movie tracking app. Create a function that takes an array of movies
 * watched and formats their duration into a readable format. For movies longer than
 * 2 hours, add a "⏰" emoji at the end.
 *
 * Each movie object has:
 * - title: string
 * - durationMinutes: number
 * - genre: string
 *
 * Examples:
 * const movies = [
 *   { title: "The Matrix", durationMinutes: 136, genre: "Sci-Fi" },
 *   { title: "Finding Nemo", durationMinutes: 100, genre: "Animation" }
 * ]
 *
 * formatMovieTimes(movies) should return:
 * ["2h 16m ⏰", "1h 40m"]
 */

// Test cases
// const movies = [
//   { title: "The Matrix", durationMinutes: 136, genre: "Sci-Fi" },
//   { title: "Finding Nemo", durationMinutes: 100, genre: "Animation" },
//   { title: "Lord of the Rings", durationMinutes: 178, genre: "Fantasy" },
//   { title: "Up", durationMinutes: 96, genre: "Animation" },
// ];


// const formattedTimes = formatMovieTimes(movies);
// console.log(formattedTimes);
/*
  Expected Output:
  ["2h 16m ⏰", "1h 40m", "2h 58m ⏰", "1h 36m"]
  */