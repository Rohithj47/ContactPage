const http = require('http')
const fs = require('fs')

const port = 8080

const server = http.createServer(function(req,res){
    if(req.url === '/'){
        fs.readFile('./index.html',function(err, data){
            if (err) throw err
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end()
        })
    }
    else if(req.url === '/index.html'){
        fs.readFile('./index.html', function(err,data){
            if (err) throw err
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end()
        })
    }
    else if(req.url === '/about.html'){
        fs.readFile('./about.html', function(err,data){
            if (err) throw err
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end()
        })
    }
    else{
        fs.readFile('./404.html', function(err, data){
            console.log('Hi From error block')
            if (err) throw err
            res.writeHead(404, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        })
    }
})

server.listen(port,function(){
    console.log("Server Running")
})