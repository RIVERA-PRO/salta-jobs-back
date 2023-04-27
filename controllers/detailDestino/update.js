import Detail from "../../models/Detail.js"

const updateDetail = {
    update: async (req, res, next) => {
        try {
            let { id } = req.params;

            if (typeof req.body.pages === 'string') {
                req.body.pages = req.body.pages.split(',');

                if (req.body.pages.length === 1 && req.body.pages[0] === '') {
                    req.body.pages = [];
                }
            } else {
                req.body.pages = [];
            }

            let detail = await Detail.findOneAndUpdate(
                { _id: id },
                req.body,
                { new: true }
            );

            if (detail) {
                return res.status(200).json({
                    success: true,
                    detail
                });
            } else {
                return res.status(404).json({
                    success: false,
                    message: "Detail not found"
                });
            }
        } catch (error) {
            next(error);
        }
    }
};

export default updateDetail