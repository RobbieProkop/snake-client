const net = require("net")

const connect = function (){
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541//Port number here
  })
  
  
  conn.on("connect", (data)=> {
    //code that does something once the connection is established
    console.log("Be happy. Now move your snake.")
  })
  conn.setEncoding("utf8")
  return conn
}

module.exports = connect