(function() { // protect the lemmings!
	/* The goal of this exercise is practice callbacks and 
	 * familiarize yourselves with making GET requests. 
	 * 
	 * Keep in mind these concepts from last class:
	 * 	 - using ajax to make an api call
	 * 	 - using query parameters
	 * 	 - asynchronous javascript
	 * 	
	 * 
	 * We'll start by trying out OMDBI, 
	 * an api with information about different movies.
	 */

	// PART 1: MOVIES
	// ------------------------------------------------------------ 
	// PROBLEM 1:
	// ------------------------------------------------------------ 
	 /* Please make a call to the godFatherUrl below and log the response. 
	 */
	 const godFatherUrl = 'http://www.omdbapi.com/?t=the+godfather&y=&plot=short&r=json'
	
	$.get(godFatherUrl, (response) => {
		/* Log the response here */
	})

	// ------------------------------------------------------------ 
	// PROBLEM 2:
	// ------------------------------------------------------------ 
	/* Cool. Now following a similar format,
	 * Make another call and get info for the movie 'Titanic'(1997)
	 * and print the names of the actors.
	 * Hint: (Query Params)
	 */

	// ------------------------------------------------------------ 
	// PROBLEM 3:
	// ------------------------------------------------------------ 
	  /* At this point you'll notice it's annoting to write out the urls.  
	   * Let's make a generateOMDBurl function to make life easier.
	   * 
	   * @param(string) title - function shoudld take the title of the movie
	   * @returns(string) url - function should return a url similar to those above
	   *
	   * Use your function to generate urls for 'the eternal sunshine of the spotless mind' and 
	   * Hostel and Mrs. Doubtfire.
	   * Make sure it works for all those movies(don't get tripped up by spaces),
	   * Then console.log out each director.
	   */
	// ------------------------------------------------------------ 
	// PROBLEM 4:
	// ------------------------------------------------------------ 
	/*
	 * Use your generateOMDBurl function to fill in these variables.
	 * Then make a call for each movie and log out the titles in alphabetical order.

	 * Once you think you've got it working try refreshing your browser to
	 * make sure you always get the same results.
	 * Remember javascript runs asynchronously, so you may not always get 
	 * what you expect.
	 */
	 const psychoUrl 
	 const theBirdsUrl
	 const frenzyUrl

	// ------------------------------------------------------------ 
	// PROBLEM 5:
	// ------------------------------------------------------------ 
	/*
	 * Console.log which movie came out first: Frenzy, Psycho or The Birds.
	 * Once again remember that these calls are all running simultaneously.
	 */
	 let birdsYear 
	 let psychoYear
	 let frenzyYear

	// ------------------------------------------------------------ 
	// PROBLEM 6:
	// ------------------------------------------------------------ 
	 /*
	  * Console.log which movie has the highest rating: Psycho, The Birds,or Ratatouille.
	  */
	 let psychoRating
	 let theBirdsRating
	 let ratatouilleRating 

	// ------------------------------------------------------------ 
	// PROBLEM 7:
	// ------------------------------------------------------------ 
	/* Let's wrap things up by combining our new api skills with our prior knowledge
	 * Make a request to the movie of your choice. 
	 * Get the poster from the response. Then use jquery to create an image element with the movie poster.
	 * and append that image element to the div with the movie id. 
	 *
	 * Key Tools: 
	 * - append or appendChild
	 * - css and background image
	 */

	// PART 2: GIFFY
	/* Let try another api. The giffy api gives you urls to a bunch of cool gifs.
	 */
	// ------------------------------------------------------------ 
	// PROBLEM 8:
	// ------------------------------------------------------------ 
	/* Make a get request to the below url. Get a url link from the response
	 * and add it to the div with the id of 'puppy', the same way we did with our movie poster.
	 * I reccomend printing the response object as a first step.
	 */
	 const puppy = 'http://api.giphy.com/v1/gifs/search?q=funny-dog&api_key=dc6zaTOxFJmzC'
	// ------------------------------------------------------------ 
	// PROBLEM 9:
	// ------------------------------------------------------------ 
	/* Sweet, now let's combine everything. 
	 * Make requests to get gifs for the terms ardvark, batman and cat. 
	 * Make sure they load in alphabetical order.
	 * Get the gifs from the response object and append each to 
	 * the div with the matching id.
	 * 
	 * So, we should see an ardvark gif load on our page, then a batman one,
	 * then a cat git.
	 */
	// ------------------------------------------------------------ 
	// PROBLEM 10: BONUS
	// ------------------------------------------------------------ 
	/* These apis were good for practice because they don't require an api key.
	 * However most do. One of the keys to getting comfortable with apis is learing
	 * how to read the documentation. 
	 * 
	 * If you want more practice, take a look at the openweathermap api.
	 * https://openweathermap.org/api
	*/
})();