import Seller from "../../models/Seller.js"

async function is_active(req, res, next) {
    const seller = await Seller.findOne({ user_id: req.user._id })
    if (seller) {
        if (seller.active) {
            next()
        } else {
            return res.status(400).json({
                success: false,
                message: 'Seller is not active'
            })
        }
    } else {
        return res.status(404).json({
            success: false,
            message: 'Seller not found'
        })
    }
}

export default is_active