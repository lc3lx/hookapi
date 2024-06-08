const express = require('express');
const bodyParser = require('body-parser');
const json = require("json")
const mongoose = require("mongoose")
const Order = require("./Module/Order")
mongoose.connect("mongodb+srv://doadmin:6L7vI8F24k5Hsp19@db-mongodb-nyc3-16092-a9d3bf76.mongo.ondigitalocean.com/admin?tls=true&authSource=admin").then(()=>{
    console.log("connction is scssfoyl")
    }).catch(()=>{
        console.log("game over try again")
})

const app = express();
const cors = require("cors")
app.use(cors({origin:"*"}))
app.use(bodyParser.json());
app.use(express.json())

app.get("/getorder",async(req,res) =>{
    const orders = await Order.find()
    res.status(200).json(orders)
})

app.post('/webhook',async (req, res) => {
    const orderr = new Order({
        event:req.body.event,
        merchant:req.body.merchant,
        created_at:req.body.created_at,
        data: req.body.data

    })
    const resulat = await orderr.save()
    res.status(200).json(resulat)

    
});


const PORT = 1099;

app.listen(PORT, () => {
    console.log(`Webhook receiver listening on port ${PORT}`);
});
