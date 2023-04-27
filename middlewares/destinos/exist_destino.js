import Seller from "../../models/Seller.js";
import Destino from "../../models/Destino.js";

async function finds_id(req, res, next) {
    const seller = await Seller.findOne({ user_id: req.user._id });

    if (!seller) {
        return res.status(404).json({
            success: false,
            message: "Seller not found",
        });
    }

    const sellerId = seller._id;

    const existingDestino = await Destino.findOne({
        title: req.body.title,
        seller_id: sellerId,
    });

    if (existingDestino) {
        return res.status(400).json({
            success: false,
            message: "Destino with the same title already exists for this seller",
        });
    }

    req.body.seller_id = sellerId;

    return next();
}

export default finds_id;
