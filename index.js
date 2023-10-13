// import json server  index.js file 
const jsonServer = require('json-server')

// create a server in  from the media player app

const mediaPlayerServer = jsonServer.create()


// set up the path from json file  using router methord

 const router =  jsonServer.router("db.json")

 //Returns middlewares  used by JSON Server.
    const middlewares =jsonServer.defaults()

// set up port running  server (not clash update port ) || auto changes 
 const port = 4000 || process.env.PORT 
 
//   use middlewares  and router in server 
 mediaPlayerServer.use(middlewares)
 mediaPlayerServer.use(router)


//  to listen server from resolving  request from client  this the last step
mediaPlayerServer.listen(port,()=>{
    console.log("Media Player Server Started...");
})
