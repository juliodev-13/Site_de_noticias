var express = require ('express')
var app = express()

app.set('view engine', 'ejs')

app.get('/',function(req, res){
    res.render("home/index")
})
app.get('/formulario_incluso_noticia',function(req, res){
    res.render("admin/form_add_noticia")
})
app.get('/noticias',function(req, res){
    res.render("noticias/noticias")
})
app.get('/geek',function(req, res){
    res.send("<html><body>Portal de geek</body></html>")
})
app.listen(3000, function(){
    console.log ("Servidor rodando com express")

})