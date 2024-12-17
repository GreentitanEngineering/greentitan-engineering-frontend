import * as nm from "nodemailer";

export async function sendEmail({
  to,
  name,
  subject,
  body,
}: {
  to: string;
  name: string;
  subject: string;
  body: string;
}) {
  const { SMTP_PASSWORD, SMTP_EMAIL } = process.env;

  const transport = nm.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    const result = await transport.verify();
  } catch (error: any) {
    console.log(error.message);
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: body,
    });
  } catch (error: any) {
    console.log(error.message);
  }
}
