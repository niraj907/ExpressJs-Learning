import nodemailer from 'nodemailer';

export const sendMail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();
    
    // connect  with the smtp server
    let transporter = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for other ports
        auth: {
            user: 'edward45@ethereal.email',
            pass: 'Zs6txbgxpFvSp17BG8'
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    


    let info = await transporter.sendMail({
        from: '"Niraj Chaudhary 👻" <niraj90@gmail.com>', // sender address
        to: "np03cs4a220219@heraldcollege.edu.np", // list of receivers
        subject: "Hello  ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    })
    console.log("Message sent: %s", info.messageId);
    res.json(info);
  };


  