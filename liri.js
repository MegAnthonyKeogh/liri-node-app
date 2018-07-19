require("dotenv").config();
var keys = require('./keys.js');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var request = require("request");

//twitter call 
function tweets() {
    var params = 'MommyValidated';
    client.get('search/tweets', {
        q: params
    }, function (error, tweets, response) {
        if (error) {
            return console.log(error)
        }
        if (!error) {
            for (var i = 0; i < 20; i++) {
                console.log("tweet created at " + tweets.statuses[i].created_at);
                console.log("tweet said " + tweets.statuses[i].text)
                //console.log(tweets);
            }
        }
    });
}
//spotify call
function playSong(song) {
    if(song){
        var songName = song;
    } else {
        var songName = "";
    }
    console.log("SongName " + songName);
    var args = process.argv
    // if (args.length < 4) {
    //     songName = "Ace of Base";
    //     console.log("ace of base");
    // }
    for (var i = 3; i < args.length; i++) {
        songName = songName + " " + args[i];
    }
    console.log("SongName" + songName);

    spotify.search({
        type: 'track',
        query: songName
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log("The artist is " + data.tracks.items[0].artists[0].name);
        console.log("album name " + data.tracks.items[0].album.name);
        console.log("song name " + data.tracks.items[0].name);
        console.log("preview link " + data.tracks.items[0].preview_url);


    });

}

//omdb call
function movieRequest() {
    var movie = "";
    var title = process.argv
    for (var i = 3; i < title.length; i++) {
        movie = movie + " " + title[i];
    }
    console.log("The movie's name is" + movie);

    // We then run the request module on a URL with a JSON
    request("http://www.omdbapi.com/?t=" + movie + "&apikey=trilogy", function (error, response, body) {
        var parseBody = JSON.parse(body);
        // If there were no errors and the response code was 200 (i.e. the request was successful)...
        if (!error && response.statusCode === 200) {
            //ratings.length
            console.log("Title is " + parseBody.Title);
            console.log("The country is:" + parseBody.Country);
            console.log("The plot is:" + parseBody.Plot);
            console.log("The year this movie came out:" + parseBody.Year);
            console.log("The rating was:" + parseBody.imdbRating);
            console.log("The actors were " + parseBody.Actors);
            console.log("I love watching this movie in " + parseBody.Language);
            console.log("Rotten Tomatoes Rating was: " + JSON.parse(body).Ratings[1].Value);
        }
    });
}

function readFile() {
    fs = require('fs')
    fs.readFile('./random.txt', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        console.log(data.trim().split(","));
        playSong(data.trim().split(",")[1])
    })
}

//actual code 
if (process.argv[2] === "my-tweets") {
    tweets();
    console.log("go to twitter");
} else if (process.argv[2] === "spotify-this-song") {
    if(process.argv[3]){
        playSong();
    } else {
        playSong('Ace of Base');
    }
    
    console.log("got to spotify");
} else if (process.argv[2] === "movie-this") {
    movieRequest();
    console.log("OMDB");
} else if (process.argv[2] === "do-what-it-says") {
    readFile();
    console.log("just do it");
} else {
    console.log("I don't know what you want");
}

