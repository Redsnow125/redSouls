const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'))

const {gethomepage, getds1, getds2, getds3, getelden} = require('./filesender')

app.get('/', gethomepage)
app.get('/ds1', getds1)
app.get('/ds2', getds2)
app.get('/ds3', getds3)
app.get('/eldenRing', getelden)
//test git after move

app.listen(4000, console.log(`App running on 4000`))