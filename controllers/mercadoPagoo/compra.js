import mercadopago from "mercadopago";
import nodemailer from "nodemailer";

mercadopago.configure({ access_token: process.env.PROD_ACCESS_TOKEN });

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    tls: {
        rejectUnauthorized: false
    }
});
const controller = {
    compra: (req, res) => {

        let products = req.body;
        let productos = req.user
        const totalPrice = products.reduce((total, product) => {
            return total + product.price * product.quantity;
        }, 0);
        // Obtén todos los productos del req.body
        const message = {

            from: process.env.SMTP_USER,
            to: req.user.mail,
            subject: "Thank you for shopping at Odyssey here are the details of your order!",
            html: `<div  style=" text-align:center;" > 

            <img  style="width: 100%; " src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/873875107714719.5fad336f1fe85.png" alt="photo" /> 
            <h3 style="font-size:20px; text-align:center">Thank you for your purchase ${req.user.name}!</h3>
            <p style="font-size:16px; text-align:center">Here are the details of your order:</p>
            
            <div>
            
            <div>
                ${products.map((product) => `<p>${product.title}: ${product.type}: $${product.price} : quantity: ${product.quantity}</p> `).join('')}
                </div>
            </div>

            <p style="font-size:14px; text-align:center; ">Total price: $${totalPrice}</p>

            
            <p>We appreciate your business and hope you enjoy your purchase!</p>
            </div>`

        };

        console.log(products)

        console.log(req.user)
        // Calcula la suma de los precios de los productos utilizando reduce()


        console.log("Total Price:", totalPrice);

        // Resto del código para crear la preferencia de MercadoPago con el totalPrice

        let preference = {
            items: products.map((product) => ({
                id: product.id,
                title: product.title,
                currency_id: "ARS",
                unit_price: product.price,
                quantity: product.quantity,
            })),
            payer: {
                name: req.user.name,
            },
            back_urls: {
                success: "https://joyful-otter-8b3cb4.netlify.app/",
                failure: "",
                pending: "",
            },
            auto_return: "approved",
            binary_mode: true,
        };

        mercadopago.preferences
            .create(preference)
            .then((response) => {
                // Envía el correo electrónico con los detalles de la compra
                transporter.sendMail(message, (error, info) => {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log("Correo electrónico enviado: " + info.response);
                    }
                });
                res.status(200).json({ response });
            })
            .catch((error) => res.status(400).json({ error: error.message }));
    },
};


export default controller // exporta el controlador