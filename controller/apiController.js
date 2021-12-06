const express = require('express')
const router = express.Router()
const Product = require('../models/products');
const methodOverride = require("method-override");

router.use(methodOverride("_method"));

// BUY PRODUCTS
router.put('/buy/:id', async(req,res)=>{
    const product = await Product.findByIdAndUpdate(req.params.id, {$inc: {qty: -1}})
    res.redirect('/store')
})

// EDIT PRODUCTS
router.put('/edit/:id', async(req,res)=>{
    const product = await Product.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/store')
})

// CREATE PRODUCTS
router.post('/post', async(req,res)=>{
    const product = await Product.create(req.body)
    res.redirect('/store')
})

// DELETE PRODUCT
router.delete('/delete/:id', async(req,res)=>{
    const product = await Product.findByIdAndDelete(req.params.id)
    res.redirect('/store')
})

module.exports = router