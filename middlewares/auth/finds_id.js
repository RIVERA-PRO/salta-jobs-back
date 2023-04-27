import Seller from "../../models/Seller.js"

async function finds_id(req, res, next) {
    const seller = await Seller.findOne({ user_id: req.user._id })

    if (seller) {
        req.body.seller_id = seller._id
        return next()
    }

    return res.status(400).json({
        success: false,
        message: 'No authors founded'
    })
}

export default finds_id