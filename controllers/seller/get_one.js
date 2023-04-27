import Seller from "../../models/Seller.js";

const getOneSeller = {
    get_one: async (req, res) => {
        try {
            let seller = await Seller.findOne({ _id: req.params.id }).select(
                "name city country createdAt photo user_id"
            );
            if (!seller) {
                author = await Seller.findOne({ user_id: req.params.id }).select(
                    "name city country createdAt photo user_id"
                );
            }
            if (seller) {
                return res.status(200).json({
                    success: true,
                    data: seller,
                });
            } else {
                return res.status(404).json({
                    success: false,
                    data: seller,
                    message: "This author dont exist already!",
                });
            }
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    },
};
export default getOneSeller;