
const connect = require("./client")


// establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: "165.227.47.243",
//     port: 50541 // PORT number here,
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   return conn;
// };
const setupInput = require('./input')
const conn = connect();

console.log("Connecting ...");
setupInput(conn);
