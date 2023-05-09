const ds1DB = require('./dbs/ds1bosses.json')
const ds2DB = require('./dbs/ds2bosses.json')
const ds3DB = require('./dbs/ds3bosses.json')

module.exports ={
    pullAllDB1 : (req,res) =>{  
        console.log('in all pull')
        res.status(200).send(ds1DB)
    },
    pullDB1 : (req,res) =>{  
        console.log("search")
        // console.log(req)
        let sQuery = req.query.giant
        console.log(sQuery)
        
        res.status(200).send(ds1DB)
    },

    pullAllDB2 : (req,res) =>{  
        console.log('in all pull')
        res.status(200).send(ds2DB)
    },
    pullDB2 : (req,res) =>{  
        console.log("search")
        // console.log(req)
        let sQuery = req.query.giant
        console.log(sQuery)
        
        res.status(200).send(ds2DB)
    },

    pullAllDB3 : (req,res) =>{  
        console.log('in all pull')
        res.status(200).send(ds3DB)
    },
    pullDB3 : (req,res) =>{  
        console.log("search")
        // console.log(req)
        let sQuery = req.query.giant
        console.log(sQuery)
        
        res.status(200).send(ds3DB)
    }
}
