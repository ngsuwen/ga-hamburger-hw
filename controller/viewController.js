const express = require('express')
const router = express.Router()
const Product = require('../models/products');

// VIEW ALL PRODUCTS
router.get('/store', async(req,res)=>{
    const product = await Product.find()
    res.render('main.ejs', {product:product})
})

// ADD NEW PRODUCT
router.get('/new', async(req,res)=>{
    res.render('new.ejs')
})

// EDIT PRODUCT
router.get('/edit/:id', async(req,res)=>{
    const product = await Product.findById(req.params.id)
    res.render('edit.ejs', {data:product})
})

// VIEW ONE PRODUCT
router.get('/:id', async(req,res)=>{
    const product = await Product.findById(req.params.id)
    res.render('show.ejs', {data:product})
})

module.exports = router