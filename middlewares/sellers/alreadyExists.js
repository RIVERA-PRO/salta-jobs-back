import Seller from "../../models/Seller.js"

async function alreadyExists(req, res, next) {
    const seller = await Seller.findOne({ user_id: req.user._id })
    if (seller) {
        if (seller.active) {
            return res.status(400).json({
                success: false,
                message: 'You are already an active author'
            })
        } else {
            await Seller.findOneAndUpdate(
                {_id: seller._id},
                {active: true}
            )
            return res.status(200).json({
                success: true,
                message: "Welcome back "+seller.name
            })
        }
    } else {
        next()
    }
}

export default alreadyExists