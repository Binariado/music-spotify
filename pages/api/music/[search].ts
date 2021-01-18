import { NextApiRequest, NextApiResponse } from 'next'

var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');

export default (_req: NextApiRequest, res: NextApiResponse) => {

  try {
    const {
      query: { search },
    } = _req

    var authOptions = {
      url: `https://api.spotify.com/v1/search?${querystring.stringify({
        q: search,
        type: 'track,artist',
        market: 'ES',
        limit: 10,
        offset: 5,
      })
        }`,
      headers: {
        'Authorization': 'Bearer ' + 'BQAOInZGkcf-knaBXae4aEZnSwsIbVgsLgTAY5MZKY9F0aj5t8cGmYy01UVX2EY_kx8INK8nwB1ZiGyyOA9cYAQPIKpOMqgOb6iRH6REMTZds-ZTh5WV2rZwNSukOOzgbLlCG-wKMojOysxeX5qXJ9cYjCCxKHEgtoRtWcHmXXJRViguNQ',
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
