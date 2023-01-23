const express = require("express");
const { userRegister } = require("./Routes/user_Register_Rout");
const { product } = require("./Routes/product_Routes");
const { cart } = require("./Routes/cart_Routes");
let HomeRoute = require('./Routes/home_Routes')
const cors = require("cors");
const {mongoose } = require("mongoose");
const app = express();


app.use(cors());

app.use(express.json());

app.use("/user", userRegister);

app.use("/product", product);

app.use("/cart",  cart);

app.use('/',HomeRoute)

mongoose.connect('mongodb+srv://pranitkhadse:pranit@cluster0.hqcdxvk.mongodb.net/BecoolDB?retryWrites=true&w=majority').then((res)=>{
  app.listen(8000, async () => {
    console.log('Server has been started')
  });
})
