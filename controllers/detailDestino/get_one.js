import Detail from "../../models/Detail.js";

const getOne = {
    get_one: async (req, res, next) => {
        try {
            let detail = await Detail.findById(req.params.id)

            if (detail) {
                return res.status(200).json({
                    success: true,
                    detail,
                });
            }

            return res.status(404).json({
                success: false,
            });
        } catch (error) {
            next(error);
        }
    },
};

export default getOne;