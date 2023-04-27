import Hotel from '../../models/Hotels.js'


const oneHotel = {

    getOne: async (req, res, next) => {
        try {
            const hotel = await Hotel.findOne({ _id: req.params.id })


            if (hotel) {
                return res
                    .status(200)
                    .json({
                        hotel: hotel
                    })
            } else {
                return res.status(404).json({
                    success: false,
                    message: "This hotel dont exist already!",
                });
            }

        } catch (error) {
            next(error)
        }
    }
}



export default oneHotel