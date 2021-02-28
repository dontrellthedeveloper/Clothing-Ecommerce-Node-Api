const User = require("../models/user");
const Cart = require("../models/cart");
const Product = require("../models/product");
const Coupon = require("../models/coupon");
const coupon = require("../models/coupon");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

exports.createPaymentIntent = async (req, res) => {
    // console.log(req.body);


    // later apply coupon
    // later calculate price


    // create payment intent with order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 100,
        currency: "usd",
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
    });
};
