import Hotel from '../../models/Hotels.js'


const hotels = {
    create: async (req, res, next) => {
        try{
            const { name, type, continent, country, address, distance, cover_photo, title, description, rating, rooms, cheapestPrice, featured } = req.body;
            
            const hotel = await Hotel.create({
                name,
                type,
                continent,
                country,
                address,
                distance,
                cover_photo,
                title,
                description,
                rating,
                rooms,
                cheapestPrice,
                featured
            });
            console.log(req.body)

            return res.status(201).json({
                success: true,
                message: "A new hotel has been created",
                hotel,
            });
        }catch (err) {
            next(err);
        }
    }
}

export default hotels