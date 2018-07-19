
require("dotenv").config();
var keys = require('./keys.js');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var request = require("request");
var movie = process.argv[2];
  
// function tweets(){
//  var params = 'MommyValidated';
//  client.get('search/tweets', {q: params}, function(error, tweets, response) {
//      if (error){
//          return console.log(error)
//      }
//       if (!error) {
//         for (var i = 0; i < 20; i++){
//            console.log("tweet created at " + tweets.statuses[i].created_at);
//            console.log("tweet said " + tweets.statuses[i].text)
//        //console.log(tweets);
//       }
//     }
// });
// }
// function playSong(){
// var songName = "";
// var args = process.argv
//  for (var i = 3; i < args.length; i++) {
//      songName = songName + " " + args[i];
//  } console.log("SongName" + songName);
 
// spotify.search({ type: 'track', query: songName }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
 
// console.log("album name " + data.tracks.items[i].album.name  );
// console.log("song name "+ data.tracks.items[i].name );
// console.log("preview link " + data.tracks.items[i].preview_url);
 
// });
// }

// Basic Node application for requesting data from the OMDB website
// Here we incorporate the "request" npm package


// // We then run the request module on a URL with a JSON
// request("http://www.omdbapi.com/?t=" + movie + "&apikey=trilogy", function(error, response, body) {

//   // If there were no errors and the response code was 200 (i.e. the request was successful)...
//   if (!error && response.statusCode === 200) {

//     // Then we print out the imdbRating
//     console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
//   }
// });

//actual code 
if (process.argv[2] === "my-tweets") {
    tweets();
    console.log("go to twitter");
} else if (process.argv[2] === "spotify-this-song") { 
    playSong();
    console.log("got to spotify");
} else if (process.argv[2] === "movie-this"){
    console.log("OMDB");
} else if (process.argv[2]=== "do-what-it-says"){
    console.log("just do it");
} else {
    console.log("I don't know what you want");
}
