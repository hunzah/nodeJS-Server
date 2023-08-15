let http = require('http')

let server = http.createServer( (req, res)=>{
    console.log('some request')
}  )

server.listen(7542);
