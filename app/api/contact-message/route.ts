import sendMailFromTemplate from "@/helpers/sendgrid/sendMailFromTemplate";
import MailAccount from "@/types/MailAccount";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const data = await req.formData();

    const name = data.get("name")?.toString();
    const email = data.get("email")?.toString();
    const company = data.get("company")?.toString();
    const message = data.get("message")?.toString();
    const date = new Date().toISOString();

    if (email) {
        const me: MailAccount = {
            email: "federico@automatica.com.ar",
            name: "Federico Giancarelli",
        };
        const customer: MailAccount = { email, name: name ?? "" };

        let template_data: Record<string, string> = { email, date };
        if (name) template_data = { ...template_data, name };
        if (company) template_data = { ...template_data, company };
        if (message) template_data = { ...template_data, message };
        if (date) template_data = { ...template_data, date };

        const template_id = process.env.SENDGRID_TEMPLATE_ID as string;
        return sendMailFromTemplate(
            me,
            [customer],
            template_id,
            template_data,
            undefined,
            [me]
        );
    } else {
        return NextResponse.json(
            { msg: "Email address is missing" },
            { status: 400 }
        );
    }
}
