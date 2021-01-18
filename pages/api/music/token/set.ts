import { NextApiRequest, NextApiResponse } from 'next'

var request = require('request'); // "Request" library
var cors = require('cors');

var client_id = process.env.CLIENT_ID_SPOTYFY; // Your client id
var client_secret = process.env.CLIENT_SECRET_SPOTYFY; // Your secret

export default (_req: NextApiRequest, res: NextApiResponse) => {

  try {

    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      form: {
        grant_type: 'client_credentials'
      },
      json: true
    };
    
    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        res.status(200).json({ access_token: body.access_token })
    
        // use the access token to access the Spotify Web API
        // var token = body.access_token;
        // var options = {
        //   url: 'https://api.spotify.com/v1/users/xzxe8glowk229dkswfj9s3suq',
        //   headers: {
        //     'Authorization': 'Bearer ' + token
        //   },
        //   json: true
        // };
        // request.get(options, function(error, response, body) {
        //   if (!error && response.statusCode === 200) {
        //     res.status(200).json({ access_token: token })
        //   }
        // });
      }
    });

  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}
