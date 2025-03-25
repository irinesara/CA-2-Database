const express = require("express")
const route = express.Router()
const Movie = require("../Model/movieschema")

// POST

route.post('/movie',async(req,res)=>{
    try {
        const {title,director,genre,availableCopies} = req.body
        if(!title||!director||!genre||!availableCopies){
            return res.status(400).json({message:"Fields are required"})
        }
        const post = await Movie.create()
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
});

// GET all

route.get('/movie',async(req,res)=>{
    try {
        const get = await Movie.find()
        res.status(200).json(get)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
});

// GET specific

route.get('/movie',async(req,res)=>{
    try {
        const get = await Movie.findById(req.params.id)
        if(!movie){
            return res.status(404).json({message:"Movie not found"})
        }
        res.status(200).json(get)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
});

// PUT

route.put('/movie',async(req,res)=>{
    try {
        const put = await Movie.findByIdAndUpdate(req.params.id)
        if(!movie){
            return res.status(404).json({message:"Movie not found"})
        }
        const update = await Movie.findById(id)
        res.status(200).json(update)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
});

// DELETE

route.delete('/movie',async(req,res)=>{
    try {
        const remove = await Movie.findByIdAndUpdate(req.params.id)
        if(!movie){
            return res.status(404).json({message:"Movie not found"})
        }
        res.status(200).json({message:"Movie deleted"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
});

module.exports=route