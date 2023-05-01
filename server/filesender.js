const path = require('path')

module.exports ={
    gethomepage : (req,res) =>{
        res.status(200).sendFile(path.join(__dirname, '../public/home.html'))
    },
    getds1 : (req,res) =>{
        res.status(200).sendFile(path.join(__dirname, '../public/ds1/ds1.html'))
    },
    getds2 : (req,res) =>{
        res.status(200).sendFile(path.join(__dirname, '../public/ds2/ds2.html'))
    },
    getds3 : (req,res) =>{
        res.status(200).sendFile(path.join(__dirname, '../public/ds3/ds3.html'))
    },
    getelden : (req,res) =>{
        res.status(200).sendFile(path.join(__dirname, '../public/elden/elden.html'))
    },

}