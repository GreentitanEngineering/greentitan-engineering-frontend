import { sendEmail } from "@/lib/sendEmail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    if (!req.body) {
      return NextResponse.json(
        { error: "Request body is missing" },
        { status: 400 }
      );
    }
    const body = await req.json();

    const { type, fullName, phone, lineId, email, message } = body;

    const emailContent = `
      <h2>คุณได้รับข้อความจากผู้ใช้งานใหม่ รายละเอียดข้อมูลดังนี้:</h2>
      ${type ? `<p><strong>ประเภทลูกค้า:</strong> ${type}</p>` : ""}
      ${fullName ? `<p><strong>ชื่อลูกค้า:</strong> ${fullName}</p>` : ""}
      ${phone ? `<p><strong>เบอร์ติดต่อ:</strong> ${phone}</p>` : ""}
      ${lineId ? `<p><strong>LINE ID:</strong> ${lineId}</p>` : ""}
      ${email ? `<p><strong>อีเมลล์:</strong> ${email}</p>` : ""}
      ${message ? `<p><strong>ข้อความเพิ่มเติม:</strong> ${message}</p>` : ""}
      <br/>
      <h4>Please review and follow up as needed.</h4>      
      <h4>Best regards,</h4>
    `;

    await sendEmail({
      to: process.env["SMTP_EMAIL"] as string,
      name: fullName,
      subject:
        "คุณได้รับข้อความของลูกค้าใหม่จากเว็บไซต์ Green Titan Engineering",
      body: emailContent,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
