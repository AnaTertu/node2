const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// const buscaCep = require('./src/functions/buscaCep')
const buscaNome = require('./src/functions/buscaNome')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.get('/', (req,res) => {
    res.render('index')
})

// app.post('/envia-cep', async(req, res) => {
//     const {cep} = req.body
//     const resultadoCep = await buscaCep(cep)

//     res.render('resultadoCep', {dado: resultadoCep})
// })

app.post('/envia-nome', async(req, res) => {
    const {nome} = req.body
    const resultadoNome = await buscaNome(nome)
    
    res.render('resultadoNome', {dado: resultadoNome})
})

app.listen(3333)