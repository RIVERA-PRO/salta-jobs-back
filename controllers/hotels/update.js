import Hotel from '../../models/Hotels.js'

const updateHotel = {
    update: async (req,res,next) => {
        try{
            let hotel = await Hotel.findOneAndUpdate(
                {_id: req.params.id},
                req.body,
                {new: true}
            )
            if(hotel){
                return res.status(200).json({
                    success: true,
                    message: "Hotel was successfully updated",
                    hotel
                })
            }else{
                return res.status(404).json({
                    success: false,
                    message: "Hotel not found"
                })
            }
        }catch(error){
            next(error)
        }
    }
}

export default updateHotel