import Room from '../../models/Rooms.js';
import Hotel from '../../models/Hotels.js';

const rooms = {
  create: async (req, res, next) => {
    const hotelId = req.params.hotelId;
    try {
      const hotel = await Hotel.findOne(hotelId);
      if (!hotel) {
        return res.status(404).json({ success: false, message: 'Hotel not found' });
      }

      const newRoom = new Room(req.body);
      const savedRoom = await newRoom.save();

      hotel.rooms.push(savedRoom._id);
      await hotel.save();

      res.status(200).json(savedRoom);
    } catch (error) {
      next(error);
    }
  },
};

export default rooms;