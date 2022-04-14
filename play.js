
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
const conn = connect();

const handleUserInput = function(key){
  console.log(key)
  if( key === '\u0003'){
    process.exit();
  }
  if( key === 'w'){
    conn.write('Move: up')
  }
  if( key === 'a'){
    conn.write('Move: left')
  }
  if( key === 's'){
    conn.write('Move: down')
  }
  if( key === 'd'){
    conn.write('Move: right')
  }

}
const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput)
  return stdin;
};


console.log("Connecting ...");
setupInput(conn);
