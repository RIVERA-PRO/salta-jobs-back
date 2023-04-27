import Detail from '../../models/Detail.js'

const destoyDetail = {

    destroy: async (req, res, next) => {
        try {
            let { id } = req.params
            let detail = await Detail.findOneAndDelete(
                { _id: id },
            )
            if (detail) {
                return res.status(200).json({
                    succes: true,
                    message: "Destination successfully deleted",
                })
            } else {
                return res.status(404).json({
                    success: false,
                    message: "Destination not found"
                })

            }
        } catch (error) {
            next(error)
        }
    }
}

export default destoyDetail