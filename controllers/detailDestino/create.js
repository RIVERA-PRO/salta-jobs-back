import Detail from '../../models/Detail.js'

const createDetail = {
    create: async (req, res, next) => {
        try {
            req.body.price = Number(req.body.price);

            if (typeof req.body.pages === 'string') {
                req.body.pages = req.body.pages.split(',');

                if (req.body.pages.length === 1 && req.body.pages[0] === '') {
                    req.body.pages = [];
                }
            } else {
                req.body.pages = [];
            }

            let detail = await Detail.create(req.body);
            return res.status(201).json({
                success: true,
                price: req.body.price,
                pages: req.body.pages,
                detail
            });
        } catch (error) {
            next(error);
        }
    }
};



export default createDetail