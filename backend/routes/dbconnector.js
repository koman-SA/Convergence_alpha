 var Connection = require('tedious').Connection;

  var config = {
    server: "192.168.1.210", // or "localhost"
    options: {},
    authentication: {
      type: "default",
      options: {  
        userName: "test",
        password: "test",
      }
    }
  };

  var connection = new Connection(config);

  // Setup event handler when the connection is established. 
  connection.on('connect', function(err) {
    if(err) {
      console.log('Error: ', err)
    }
    // If no error, then good to go...
    executeStatement();
  });

  // Initialize the connection.
  connection.connect();