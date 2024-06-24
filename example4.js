var http = require ('http')

http.createServer(function(req,res){

    res.write("hi ")
    res.end("Welcome to Node JS")
}).listen(8080)
