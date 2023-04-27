import Room from '../../models/Rooms.js'


const oneRoom = {

    getOne: async (req, res, next) => {
        try {
            const room = await Room.findOne({ _id: req.params.id })


            if (room) {
                return res
                    .status(200)
                    .json({
                        room: room
                    })
            } else {
                return res.status(404).json({
                    success: false,
                    message: "This room dont exist already!",
                });
            }

        } catch (error) {
            next(error)
        }
    }
}



export default oneRoom