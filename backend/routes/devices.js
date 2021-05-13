var express = require('express');
const request = require('request');
const { createProxyMiddleware } = require('http-proxy-middleware');
var router = express.Router();
var parseString = require('xml2js').parseString;





















request('https://wwweurope1.systemmonitor.eu.com/api/?apikey=6edf84904cef55f30a8df7dff0bcafdc&service=list_devices_at_client&clientid=339119&devicetype=workstation', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  parseString(body, function (err, result) {
    console.dir(result);
    console.log(JSON.stringify(result));
});

});


  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/api/devices', request);
  app.listen(4000);
 
  

module.exports = router;
