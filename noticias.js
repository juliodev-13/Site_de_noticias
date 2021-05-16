var http = require ('http')

var server = http.createServer( function(req, res){

    var categoria = req.url
    if (categoria == '/tecnologia') {
        res.end("<html><body>Noticias de tecnologia</body></html>")
    }else if (categoria == '/game'){
        res.end("<html><body>Portal de games</body></html>")
    }else if (categoria == '/geek'){
        res.end("<html><body>Portal de geek</body></html>")
    }else{
        res.end("<html><body>Portal de noticias</body></html>") 
    }
    

})
server.listen(4000)

