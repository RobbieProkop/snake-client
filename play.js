const net = require('net')

const connect = function (){
  const conn = net.createConnection({
    host: //IP address here 
    port: //Port number here
  })
  conn.setEncoding("utf8")
  
  conn.on("connect", (data)=> {
    //code that does something once the connection is established
    console.log("Be happy. Now move your snake.")
  })
  return conn
}

console.log("connecting.....")
connect()