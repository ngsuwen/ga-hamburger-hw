const express = require('express')
const router = express.Router()
const Product = require('../models/products');

// BUY PRODUCTS
router.put('/buy/:id', async(req,res)=>{
    const product = await Product.findByIdAndUpdate(req.params.id, {$inc: {qty: -1}})
    res.send(product)
})

// CREATE PRODUCTS
router.post('/post', async(req,res)=>{
    const product = await Product.create(req.body)
    res.send(product)
})

// DELETE PRODUCT
router.delete('/delete/:id', async(req,res)=>{
    const product = await Product.findByIdAndDelete(req.params.id)
    res.send(product)
})

module.exports = router