import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT), // Generalmente 465 (SSL) o 587 (TLS)
  secure: true, // Pon 'true' si usas puerto 465, 'false' si usas 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendEmailNotification(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const mailOptions = {
    from: `"Web Yo Conta Tec" <${process.env.SMTP_USER}>`,
    to: process.env.EMAIL_TO, 
    subject: `Nuevo Lead: ${data.subject}`,
    html: `
      <h2>Nuevo mensaje de contacto</h2>
      <p><strong>Nombre:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Asunto:</strong> ${data.subject}</p>
      <p><strong>Mensaje:</strong></p>
      <blockquote style="background: #f9f9f9; padding: 10px; border-left: 5px solid #2563EB;">
        ${data.message}
      </blockquote>
    `,
  };

  await transporter.sendMail(mailOptions);
}