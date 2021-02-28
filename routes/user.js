const express = require("express");

const router = express.Router();

// middlewares
const { authCheck } = require("../middlewares/auth");

const {
    userCart,
    getUserCart,
    emptyCart,
    saveAddress,
    applyCouponToUserCart
} = require("../controllers/user");


router.post("/user/cart", authCheck, userCart);
router.get("/user/cart", authCheck, getUserCart); // get cart
router.delete("/user/cart", authCheck, emptyCart); // empty cart
router.post("/user/address", authCheck, saveAddress);


router.post("/user/order", authCheck, createOrder); // stripe


// coupon
router.post("/user/cart/coupon", authCheck, applyCouponToUserCart);

// router.get("/user", (req, res) => {
//     res.json({
//         data: "hey you hit user API endpoint",
//     });
// });

module.exports = router;
