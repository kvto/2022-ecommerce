const express = require("express")
const Stripe = require("stripe")
const cors = require("cors")

const stripe = new Stripe("sk_test_51LYcsLCC8ihmzqlnY4S994634VVWqv01dkxq4adhS617A5aeIizCFVm17fn1CRwlMYmzcQKCzIrYhq8CgPnykwgl001uCJKOyy")

const app = express();

app.use(cors({origin: "http://localhost:3000"}));
app.use(express.json())

app.post("/api/checkout", async (req,res) => {
    console.log(req.body);
    const {id, amount} = req.body;

    try{
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "EUR",
            description: "Basket of products",
            payment_method: id,
            confirm: true,
        });
        console.log(payment)
        return res.status(200).json({message: "Succesful Payment"})
    }
    catch(error){
        return res.json(error.raw.message)
    }
})


app.listen(3001, ()=> console.log("Server listening port", 3001))