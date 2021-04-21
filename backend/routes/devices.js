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
    console.log(body);
});

});







/*const options = {
    target: 'https://wwweurope1.systemmonitor.eu.com/api/?apikey=6edf84904cef55f30a8df7dff0bcafdc&service=list_devices_at_client&clientid=339119&devicetype=workstation', // target host
    json : true,
    changeOrigin: true, // needed for virtual hosted sites
    ws: true, // proxy websockets
    pathRewrite: {
      '^/api/old-path': '/api/new-path', // rewrite path
      '^/api/remove/path': '/path', // remove base path
   }
    ,
    
    router: {
      // when request.headers.host == 'dev.localhost:3000',
      // override target 'http://www.example.org' to 'http://localhost:8000'
      'integration.localhost:3000' : 'http://localhost:8001',  // host only
        'staging.localhost:3000'     : 'http://localhost:8002',  // host only
     'localhost:3000/api'         : 'http://localhost:8003',  // host + path
          '/rest'                      : 'http://localhost:8004'   // path only
    },
    
    
  };*/
 
  
 /* function onError(err, req, res) {
    res.writeHead(500, {
      'Content-Type': 'application/xml',
    });
    res.end('Something went wrong. And we are reporting a custom error message.');
  }*/
  // create the proxy (without context)
  
  //const devices = createProxyMiddleware(options);
 
  // mount `exampleProxy` in web server
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/api/devices', request);
  app.listen(4000);
 
  

module.exports = router;
