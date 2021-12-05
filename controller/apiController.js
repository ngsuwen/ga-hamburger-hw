const express = require('express')
const router = express.Router()
const Product = require('../models/products');

// BUY PRODUCTS
router.put('/buy/:id', async(req,res)=>{
    const product = await Product.findByIdAndUpdate(req.params.id, {$inc: {qty: -1}})
    res.send(product)
})

module.exports = router