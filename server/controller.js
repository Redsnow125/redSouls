const ds1DB = require('./dbs/ds1bosses.json')
const ds2DB = require('./dbs/ds2bosses.json')
const ds3DB = require('./dbs/ds3bosses.json')

module.exports ={
//=======Ds1=============================
    pullAllDB1 : (req,res) =>{  
        res.status(200).send(ds1DB)
    },
    pullDB1 : (req,res) =>{  
        console.log("search")
        let sQuery = req.query.giant        
        res.status(200).send(ds1DB)
    },
//=======Ds2=============================
    pullAllDB2 : (req,res) =>{  
        res.status(200).send(ds2DB)
    },
    pullDB2 : (req,res) =>{  
        let sQuery = req.query.giant
        res.status(200).send(ds2DB)
    },
//=======Ds3=============================
    pullAllDB3 : (req,res) =>{  
        res.status(200).send(ds3DB)
    },

    pullDB3 : (req,res) =>{  
        let sQuery = req.query.giant  
        res.status(200).send(ds3DB)
    }
}
