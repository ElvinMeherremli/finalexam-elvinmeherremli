const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.use(cors())
app.use(bodyParser.json())

const productsSchema = new mongoose.Schema({
    name: String,
    price: Number,
    img: String
})

const productModel = mongoose.model('product', productsSchema)

app.get('/api/products', async(req,res) => {
    const {title} = req.query
    let products;
    if (title) products = await productModel.find({title: title})
    else products = await productModel.find()
    
    if (products.length > 0) {
        res.status(200).send({
            message: 'success',
            data: products
        })
    } else {
        res.status(204).send({
            message: 'not found',
            data: null
        })
    }
})

app.get('/api/products/:id', async (req, res) => {
    const {id} = req.params
    let products;
    try {
        products = await productModel.findById(id)
    } catch (error) {
        res.send({error: error})
    }

    if (products) {
        res.status(200).send({
            message: 'success',
            data: products
        })
    } else {
        res.status(204).send({
            message: 'not find',
            data: null
        })
    }
})

app.post('/api/products', async (req, res) => {
    const products = new productModel(req.body)
    await products.save()
    res.send({
        message: 'posted',
        data: products
    })
})

app.delete('/api/products/:id', async (req, res) => {
    const {id} = req.params
    let respons;
    try {
        respons = await productModel.findByIdAndDelete(id)
    } catch (error) {
        res.send({error: error})
    }

    if (respons) {
        res.send({
            message: 'deleted',
            respons: respons
        })
    } else {
        res.send({
            message: 'error',
            respons: null
        })
    }
})

mongoose.connect(process.env.CONNECTION_STRING).then(res => console.log('connected')).catch(err => console.log(err))


app.listen(process.env.PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", process.env.PORT, '\nhttp://localhost:1212/api/products/');
})