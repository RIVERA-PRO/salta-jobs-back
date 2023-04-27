import Room from '../../models/Rooms.js'
import Hotel from '../../models/Hotels.js'


const rooms = {
    destroy: async (req, res, next) => {
        const hotelId = req.params.hotelid;
        try {
            await Room.findOneAndDelete(req.params.id)
            try{
                await Hotel.findOneAndUpdate(hotelId, {
                    $pull: { rooms: req.params.id },
                })
            } catch (err) {
                next(err)
            }
            res.status(200).json("Room has been deleted")
        } catch (err) {
            next(err)
        }
    }
}

export default rooms