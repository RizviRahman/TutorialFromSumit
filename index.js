/*

*/

// dependencies
const http = require('http');
const {handleReqRes} = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');


// app object
const app = {};


// configuration
// app.config = {
//   port: 3000
// };

console.log(environment);
// create server
app.createServer = () =>{
  const server = http.createServer(app.handleReqRes);

  server.listen(environment.port, () => {
    console.log(`Listening to port ${environment.port}`);
  });
}


// handle request response
app.handleReqRes = handleReqRes;

app.createServer();