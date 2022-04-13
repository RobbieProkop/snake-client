const net = require("net")

const connect = function (){
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541//Port number here
  })

  
  conn.on("connect", (data)=> {
    //code that does something once the connection is established
    console.log("Be happy. Now move your snake.")
    conn.write('Name: ROL')
    
    // for (let i = 0; i< 10; i++){
    //   setTimeout(()=>{
    //     conn.write('Move: up')
    //   },1000*i)

    // }

    //times must be different or the server will get confused and pick the last one
    // setTimeout(()=>{
    //   conn.write('Move: left')
    // },200)
    // setTimeout(()=>{
    //   conn.write('Move: left')
    // },300)
    // setTimeout(()=>{
    //   conn.write('Move: left')
    // },400)
    // setTimeout(()=>{
    //   conn.write('Move: left')
    // },500)
    // setTimeout(()=>{
    //   conn.write('Move: left')
    // },600)
    // setTimeout(()=>{
    //   conn.write('Move: left')
    // },700)
  
  })
  conn.on("connect", (data)=> {
    //code that does something once the connection is established
    setTimeout(()=>{
      conn.write('Move: left')
    },200)
  
  })
  conn.setEncoding("utf8")
  return conn
}


module.exports = connect