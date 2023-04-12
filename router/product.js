const express = require('express')
const router = express.Router()
const {
    productList,
    addProducts,
    updateProduct,
    deleteProduct,
    viewProduct
} = require('../controller/productController')


router.post('/',addProducts)
router.get('/products',productList)
router.put('/products/:id',updateProduct)
router.delete('/products/:id',deleteProduct)
router.get('/products/:id',viewProduct)







module.exports = router