let http = require('http')

let server = http.createServer( (req, res)=>{
    console.log('some request')
    res.write('aaaaaa')
    res.end()


    switch (url) {
        case '/': res.write(`<h2>Home<h2/>`)
            break;
            case '/tasks': res.write(`<h2>Tasks<h2/>`)
            break;
        default: res.write(`<h2>Page Not Found<h2/>`)
            break;
    }
    res.end()
}  )



server.listen(7542);
