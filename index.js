const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const categorias = require('./routes/categorias')
const publicacoes = require('./routes/publicacoes')
const port = process.env.PORT || 3000

app.set('view engine','ejs')
app.use(bodyParser.urlencoded())

app.get('/',(req,res) => {
    res.render('index')
})

app.use('/categorias',categorias)
app.use('/publicacoes',publicacoes)


app.listen(port,(err) => {
    if(err){
        console.log('Error in anyone place!'+err)
    }else{
        console.log(`server is running: ${port}`)
    }
})




