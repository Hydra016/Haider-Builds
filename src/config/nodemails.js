import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'haidermansoor24@gmail.com',
        pass: 'wecozyflzzkbvcih'
    }
})

export const mailOptions = {
    from: 'haidermansoor24@gmail.com',
    to: 'haidermansoor24@gmail.com'
}