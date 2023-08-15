let http = require('http')
let {getUsers, setUsers} = require('./repository')


let cors = (req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Request-Method', '*')
    res.setHeader('Access-Control-Allow-Method', 'OPTIONS, GET')
    res.setHeader('Access-Control-Allow-Headers', '*')
    if (req.method === 'OPTIONS'){
        res.writeHead(200)
        res.end();
        return
    }
}


let server = http.createServer( (req, res)=>{

    if(cors(req,res)) return 

    switch (req.url) {
        case '/users': 
        if ((req.method === POST)){
            users.push({name:'Alex'})
        }else {
            res.write(JSON.stringify(getUsers))
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
