const express = require('express')
const app = express()
const path = require('path')


app.use(express.static(path.join(__dirname, 'client')))
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.sendFile('./client/index.html', {root: __dirname})
})

app.get('/login', (req, res) => {
    res.sendFile('./client/login.html', {root: __dirname})
})

app.post('/login', (req, res) => {
    if(req.body.username == 'rodolfo' && req.body.password == 'martinez') {
        res.sendFile('./client/login.html', {root: __dirname})
    } else {
        res.status(404).send('Usuário ou senha inválida')
    }
})

const PORTA = process.env.PORT || 3030

app.listen(PORTA, () => console.log(`Servidor rodando na porta ${PORTA}`))