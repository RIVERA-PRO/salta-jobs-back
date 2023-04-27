import Destino from "../../models/Destino.js";
import Category from "../../models/Category.js";
import Seller from "../../models/Seller.js";

const destinos = {
    create: async (req, res, next) => {
        try {
            const { jornada, modalidad, requisitos, telefono, web, instagram, facebook, mail, photo, name, title, cover_photo, categoria, description, ubicacion, salario, vacantes, lugar, seller_id, category_id, user_id } = req.body;
            const category = await Category.findById(category_id); // encuentra la categoría por su id

            if (!category) {
                return res.status(404).json({
                    success: false,
                    message: "Category not found!",
                });
            }

            const destino = await Destino.create({
                modalidad,
                jornada,
                requisitos,
                title,
                cover_photo,
                description,
                categoria,
                ubicacion,
                lugar,
                salario,
                vacantes,
                seller_id,
                category_id,
                name,
                photo,
                mail,
                telefono,
                web,
                instagram,
                facebook,
                user_id: req.user._id // Agregar el user_id aquí
            });

            console.log(req.body)

            return res.status(201).json({
                success: true,
                message: "A new destino has been created",
                destino,
            });
        } catch (err) {
            next(err);
        }
    },
};

export default destinos;

