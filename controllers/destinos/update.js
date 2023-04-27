import Destino from "../../models/Destino.js"

const updateD = {
    update: async (req,res,next) => {
        try{
            let destino = await Destino.findOneAndUpdate(
                {_id: req.params.id},
                req.body,
                {new: true}
            )
            if(destino){
                return res.status(200).json({
                    success: true,
                    destino
                })
            }else{
                return res.status(404).json({
                    success: false,
                    message: "Destination not found"
                })
            }
        }catch(error){
            next(error)
        }
    }
}

export default updateD