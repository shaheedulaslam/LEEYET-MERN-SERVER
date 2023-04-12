const productModel = require('../model/productModel')


module.exports = {
    productList: async(req,res)=>{
    try {
        const products = await productModel.find()
        console.log(products)
        res.status(200).json({message:"product listed"})
    } catch (error) {
        console.log(error);
    }
    },
    addProducts: async(req,res)=>{
        try {
            let imageArray = []
            req.files.forEach((element) => {
                const image = element.path
                imageArray.push(image)
            });
    
            const createProduct = new productModel({
                name:req.body.name,
                image:imageArray,
                price:req.body.price,
                description:req.body.description
            })
            const result = await createProduct.save()
            console.log(result);
            res.status(201).json({messag:"product created"})
        } catch (error) {
            console.log(error);
        }

    },
    updateProduct: async(req,res)=>{
    try {
    const updateProductId = req.params.id
    const updating = await productModel.findByIdAndUpdate(updateProductId,{$set:req.body},{new:true})
    console.log(updating);
    res.status(200).json({message:"product updated"})
    } catch (error) {
        console.log(error);
    }
    },
    deleteProduct: async(req,res)=>{
        try {
            const deleteProductId = req.params.id
            const deleting = await productModel.findByIdAndDelete(deleteProductId)
            console.log(deleting);
            res.status(204).json({message:"not content here,product were deleted"})
        } catch (error) {
        console.log(error);
        }
   
    },
    viewProduct: async(req,res)=>{
        try {
            const viewProductId = req.params.id
            const viewProduct = await productModel.findById(viewProductId)
            console.log(viewProduct);
            res.status(200).json({message:"product have seened"})
        } catch (error) {
          console.log(error);  
        }
 
    }

}