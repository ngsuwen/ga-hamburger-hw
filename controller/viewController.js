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
    res.render('edit.ejs', {data:req.params.id})
})

// VIEW ONE PRODUCT
router.get('/:id', async(req,res)=>{
    res.render('show.ejs', {data:req.params.id})
})

module.exports = router