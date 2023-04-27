import Seller from '../../models/Seller.js'

const newSeller = {
    create: async(req,res,next) => {
        const userId = req.user._id;
        req.body.user_id = userId;
        req.body.active = true;
        try{
            await Seller.create(req.body)
            return res.status(200).json({
                success: true,
                message: 'New seller created successfully',
                data: req.body
            })
        }catch(error){
            next(error)
        }
    }
}

export default newSeller;

