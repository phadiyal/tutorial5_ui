var express = require('express');
var router = express.Router();
var supply = require('./Models/model')

//to fetch data
router.get('/supply',async(req,res)=>{
    const isupply = await supply.find()
    res.send(isupply)
})

//to add the movies
router.post("/supply",async(req,res)=>{
    const isupply = new supply(req.body)

    await isupply.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "My-message":msg
            })
        }
    })

})


// api for updating movie

router.patch('/supply/:id',async (req,res)=>{
    const supply= await supply.findOne({_id:req.params.id})
    isupply.name = req.body.name
    isupply.password = req.body.password
    await igadget.save((err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }
    })

})

//delete api

router.delete("/supply/:name",async(req,res)=>{
    await supply.deleteOne({name:req.params.name},(err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }

    })
})
module.exports = router 