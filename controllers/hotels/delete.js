import Hotel from "../../models/Hotels.js";


const destroyHotel = {
    destroy: async (req,res,next) => {
        try{
            let hotel = await Hotel.findOneAndDelete(
                { _id: req.params.id }
            )
            if(hotel){
                return res.status(200).json({
                    success: true,
                    message: "hotel successfully deleted",
                })
            }else{
                return res.status(404).json({
                    success: false,
                    message: "hotel not found"
                })
            }
        }catch(error){
            next(error)
        }
    }
}

export default destroyHotel