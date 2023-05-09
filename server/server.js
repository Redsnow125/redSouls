const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'))

const {gethomepage, getds1, getds2, getds3, getds4} = require('./filesender')
const {pullAllDB1, pullDB1, pullAllDB2, pullDB2, pullAllDB3, pullDB3} = require('./controller')

app.get('/', gethomepage)
app.get('/ds1', getds1)
app.get('/ds2', getds2)
app.get('/ds3', getds3)
app.get('/ds4', getds4)

app.get('/ds1/bosses', pullAllDB1)
app.get('/ds1/randbosses', pullAllDB1)
app.get('/ds1/bosses/name/:', pullDB1)

app.get('/ds2/bosses', pullAllDB2)
app.get('/ds2/randbosses', pullAllDB2)
app.get('/ds2/bosses/name/:', pullDB2)

app.get('/ds3/bosses', pullAllDB3)
app.get('/ds3/randbosses', pullAllDB3)
app.get('/ds3/bosses/name/:', pullDB3)

app.listen(4000, console.log(`App running on 4000`))