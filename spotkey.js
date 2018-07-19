var Spotify = require('node-spotify-api');
 

  var spotify = new Spotify({
    id: "d2aab13ed17548f0921aa6ea65eb6425",
    secret: "ddc5be90c2ec4a2ab773850a756c3db7"
  });

  module.exports = spotify;
   