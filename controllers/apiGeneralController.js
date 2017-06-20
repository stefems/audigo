var request = require("request");

var generalApiController = {

    //https://stackoverflow.com/questions/33029349/getting-spotify-api-access-token-with-node-js-express-js
    setAuth: function(req, res) {
        var formData = {
            grant_type: "client_credentials",

        };
        var headers =  {
            "Authorization": "Chrome/51.0.2704.103"
        };
        //send the request to spotify
        request.post({url: "https://accounts.spotify.com/api/token", formData: formData, headers: }, 
            function (error, response, body) {     

            }
        );
    }
}

module.exports = generalApiController;
