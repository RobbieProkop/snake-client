const connect = require("./client")
const conn = connect()
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
  if( key === 'o'){
    conn.write('Say: ok')
  }
  if( key === 'n'){
    conn.write('Say: no')
  }
  if( key === 'y'){
    conn.write('Say: yes')
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
module.exports = setupInput