const router = require('express').Router();
const Quote = require('../models/quotes');

router.get('/getQuotes', async(req,res)=>{
    try {
        const allQuotes= await Quote.find({});
        res.status(200).json(allQuotes);
    } catch (error) {
        console.log(error);
        res.status(400).json({msg:error});
    }
})

router.post('/getQuotes',async(req,res)=>{
    const {author,quote}=req.body;
    await Quote.create({author,quote});
    res.status(200).json({msg:'Quote created successfully'});
})

module.exports= router;