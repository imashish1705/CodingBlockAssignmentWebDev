const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/shoppingCart', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("connected to shoppingCart DB");
})
.catch(err => {
    console.log("Error...");
    console.log(err);
});
const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        maxlength : 20, 
    },
    price : {
        type : Number
    },
    isOnSale : {
        type : Boolean
    },
    lowPrice : {
        under25K : {
            type : Boolean,
        }
    }
})

const product = mongoose.model("Product", productSchema);
const MotoGbike = new product({name : "BMW", price:10000, isOnSale:true, 'lowPrice.under25K':true});

// Product.insertMany([{ price: 20000, isOnSale: false }])
//     .then(p => {
//         console.log(p);
//     })
//     .catch(err => {
//         console.log("SOMETHING WENT WRONG");
//         console.log(err);
//     })