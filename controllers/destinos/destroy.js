import Destino from "../../models/Destino.js";


const destroyD = {
    destroy: async (req,res,next) => {
        try{
            let destino = await Destino.findOneAndDelete(
                { _id: req.params.id }
            )
            if(destino){
                return res.status(200).json({
                    success: true,
                    message: "destination successfully deleted",
                })
            }else{
                return res.status(404).json({
                    success: false,
                    message: "destination not found"
                })
            }
        }catch(error){
            next(error)
        }
    }
}

export default destroyD