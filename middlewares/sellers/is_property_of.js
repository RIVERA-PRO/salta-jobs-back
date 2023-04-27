import Seller from "../../models/Seller.js"
import Destino from "../../models/Destino.js"

async function is_property_of(req, res, next) {
    const destino = await Destino.findById(req.params.id)
    const seller = await Seller.findOne({ user_id: req.user._id })
    if (destino.seller_id.toString() === seller._id.toString()) {
        next()
    } else {
        return res.status(403).json({
            success: false,
            message: 'You are not authorized to perform this action'
        })
    }
}

export default is_property_of
