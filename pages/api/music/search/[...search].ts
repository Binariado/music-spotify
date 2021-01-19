import { NextApiRequest, NextApiResponse } from 'next'

var express = require('express'); 
var request = require('request'); 
var cors = require('cors');
var querystring = require('querystring');

export default (_req: NextApiRequest, res: NextApiResponse) => {

  try {
    const {
      query: { search },
    } = _req

    let urlApi = `https://api.spotify.com/v1/search?${querystring.stringify({
      q: search[0],
      type: 'track,artist',
      market: 'ES',
      limit: 20,
      offset: 5,
    })
      }`;

    if(search[2]){
      urlApi = search[2];
    }

    var authOptions = {
      url: urlApi,
      headers: {
        'Authorization': 'Bearer ' + search[1],
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      json: true
    };

    request.get(authOptions, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        res.status(200).json({ search: body })
      }
    });

    // requesting access token from refresh token
    // var refresh_token = "AQCFUadzJmt1AB00FrgEmyVuU32hNHW4kv1HeTwOQAHfHNQwliUq4oEVjJEgEnp_RJezsvNmX7rdNvYneqVujioTXwo1Yz6zijG8Ub9HryOXbjo72Ccy6wuVRJEeYYJI8EE";
    // var authOptions = {
    //   url: 'https://accounts.spotify.com/api/token',
    //   headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
    //   form: {
    //     grant_type: 'refresh_token',
    //     refresh_token: refresh_token
    //   },
    //   json: true
    // };

    // request.post(authOptions, function(error, response, body) {
    //   if (!error && response.statusCode === 200) {
    //     var access_token = body.access_token;
    //     res.send({
    //       'access_token': access_token
    //     });
    //   }
    // });

    // res.status(200).json({ search: authOptions })
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}
