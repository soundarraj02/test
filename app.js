const express = require("express")

const app = express()

app.get('/name', (req,res)=>{
    console.log("soundhar")
    res.send({message:"soundhar"})
})

app.get('/place', (req,res)=>{
    console.log("soundhar")
    res.send({message:"salem"})
})

app.listen(300) 