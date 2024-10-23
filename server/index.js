const express = require('express');
const app = express();
require("dotenv").config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);
const bodyParser = require('body-parser');
const cors = require('cors');



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());


app.post("/payment", cors(), async (req, res) => {
    let {amount, id} = req.body;
    try{
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            description: "Roam-Free Tent",
            payment_method: id,
            confirm: true,
            return_url: "http://localhost:3000/payment-success",

            /* Disable redirect-based payment methods
            automatic_payment_methods: {
                enabled: true,
                allow_redirects: 'never',
            }
            */
        })
        console.log("Payment", payment)
        res.json({
            message: "Payment successful",
            success: true
        })

    }catch(error){
        console.log("Error", error)
        res.json({
            message: "Payment failed",
            success: false
        })
    }


})
app.listen(process.env.PORT || 4000, () => {
    console.log("Server is running on port 4000");
})
