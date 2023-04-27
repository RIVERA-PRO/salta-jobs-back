import Room from '../../models/Rooms.js'

const updateRoom = {
    update: async (req,res,next) => {
        try{
            let room = await Room.findOneAndUpdate(
                {_id: req.params.id},
                req.body,
                {new: true}
            )
            if(room){
                return res.status(200).json({
                    success: true,
                    message: "Room was successfully updated",
                    room
                })
            }else{
                return res.status(404).json({
                    success: false,
                    message: "Room not found"
                })
            }
        }catch(error){
            next(error)
        }
    }
}

export default updateRoom