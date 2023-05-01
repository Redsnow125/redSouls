const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'))

console.log(__dirname, '../public/home.html')

app.get('/', (req,res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/home.html'))
})



app.get('/ds1', (req,res) =>{
    res.status(200).sendFile(path.join(__dirname, '../public/ds1.html'))
})

//test git after move

app.listen(4000, console.log(`App running on 4000`))