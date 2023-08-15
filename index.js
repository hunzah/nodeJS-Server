let http = require('http')

let users = [
    {"id": 1, "banned": true, "name": "Oleg"},
    {"id": 2, "banned": false, "name": "Ali"}
]
let cors = (req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
}


let server = http.createServer( (req, res)=>{

    if(cors(req,res)) return 

    switch (req.url) {
        case '/users': 
        if ((req.method === POST)){
            users.push({name:'Alex'})
        }else {
            res.write(JSON.stringify(users))
        }
            break;
            case '/tasks': res.write(`<h2>Tasks<h2/>`)
            break;
        default: res.write(`<h2>Page Not Found<h2/>`)
            break;
    }
    res.end()
}  )



server.listen(7542);
