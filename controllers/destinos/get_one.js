import Destino from '../../models/Destino.js'
import Category from '../../models/Category.js'
import Seller from '../../models/Seller.js'

const oneDest = {

    getOne: async (req, res, next) => {
        try {
            const destino = await Destino.findOne({ _id: req.params.id })


            if (destino) {
                return res
                    .status(200)
                    .json({
                        destino: destino
                    })
            } else {
                return res.status(404).json({
                    success: false,
                    message: "This destination dont exist already!",
                });
            }

        } catch (error) {
            next(error)
        }
    }
}



export default oneDest