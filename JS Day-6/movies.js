class Movie {
      constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
      }
    
      static getPG(movies) {
        return movies.filter((movie) => movie.rating === "PG");
      }
    }

movieArray = []; 
function getMovie(title,studio,rating){  
    movieArray.push(new Movie(title,studio,rating));
}
getMovie("Spider-Man: No Way Home","marvel");
getMovie("ayalaan","PhantomFX Studios","PG-8");
getMovie("Casino Royale","Eon Productions","PG");



console.log("Movies with PG rating :");
console.log(Movie.getPG(movieArray));