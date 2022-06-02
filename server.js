const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 3000

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, function (){
    console.log(`Server is now running on PORT ${PORT}`)
})

app.post('/quotes', (req, res) =>{
    console.log(req.body)
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.post('/', (req, res) => {
    console.log('Helloooooooooooooooooo')
})
