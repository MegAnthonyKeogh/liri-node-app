// console.log ("the bot is running");
// var client = require('./keys.js');
// var spotify = require('./spotkey.js');
// var movie = process.argv[2];

// var Twitter = require('twitter');


 
 
// var params = {screen_name: 'MommyValidated'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   }
// });
// /// 

// // client.post('statuses/update', {status: 'I REALLY REALLY Love Twitter'},  function(error, tweet, response) {
// //     if(error) throw error;
// //     console.log(tweet);  // Tweet body.
// //     console.log(response);  // Raw response object.
// //   });

// ///

// spotify.search({ type: 'track', query: 'Bad Romance' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
 
// console.log(data); 
// });

// // Basic Node application for requesting data from the OMDB website
// // Here we incorporate the "request" npm package
// var request = require("request");

// // We then run the request module on a URL with a JSON
// request("http://www.omdbapi.com/?t=" + movie + "&apikey=trilogy", function(error, response, body) {

//   // If there were no errors and the response code was 200 (i.e. the request was successful)...
//   if (!error && response.statusCode === 200) {

//     // Then we print out the imdbRating
//     console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
//   }
// });