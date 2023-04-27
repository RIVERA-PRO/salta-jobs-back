import nodemailer from "nodemailer";

const controller = {
  consulta: async (req, res, next) => {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const message = {
      from: `"${req.body.name}" <${req.body.email}>`,
      replyTo: `"${req.body.name}" <${req.body.email}>`,
      to: process.env.SMTP_USER,
      subject: "User query",
      html: `<p style="font-size: 20px;"><br>Queries <strong>Odyssey!!</strong><br>
                <strong>Name:</strong> ${req.body.name}<br>
                <strong>Questions:</strong> ${req.body.question}<br>
              <p style="color: grey;">-------------------------<br>
              Kind regards,<br>
              Odyssey's team<br>
              <br>
              Thanks for using our app! If you have any questions or suggestions, please do not hesitate to  contact us.<br>
              <br>
              Odyssey Project</p>`,
    };
    try {
         await transporter.sendMail(message, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log(
            "Correo de consulta enviado: " + info.response
          );
        }
      });

      return res.status(200).json({
        success: true,
        message: "Consulta enviada correctamente",
        data: req.body,
      });
    } catch (error) {
      next(error);
    }
  },
};
export default controller;
