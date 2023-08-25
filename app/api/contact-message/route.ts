import verifyReCAPTCHAToken from "@/helpers/recaptcha/verifyReCAPTCHAToken";
import sendMailFromTemplate from "@/helpers/sendgrid/sendMailFromTemplate";
import MailAccount from "@/types/MailAccount";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const data = await req.formData();

    const captcha = data.get("g-recaptcha-response")?.toString();
    if (captcha) {
        try {
            const valid = await verifyReCAPTCHAToken(captcha);
            if (valid === true) {
                const name = data.get("name")?.toString();
                const email = data.get("email")?.toString();
                const company = data.get("company")?.toString();
                const message = data.get("message")?.toString();
                const date = new Date().toISOString();

                if (email) {
                    const me_email = process.env.ME_EMAIL;
                    const me_name = process.env.ME_NAME;
                    if (me_email && me_name) {
                        const me: MailAccount = {
                            email: me_email,
                            name: me_name,
                        };
                        const customer: MailAccount = {
                            email,
                            name: name ?? "",
                        };
                        let template_data: Record<string, string> = {
                            email,
                            date,
                        };
                        if (name) template_data = { ...template_data, name };
                        if (company)
                            template_data = { ...template_data, company };
                        if (message)
                            template_data = { ...template_data, message };
                        if (date) template_data = { ...template_data, date };
                        const template_id = process.env
                            .SENDGRID_TEMPLATE_ID as string;
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
                            {
                                msg: "Could not send email due to an internal error. Please try again later.",
                            },
                            { status: 500 }
                        );
                    }
                } else {
                    return NextResponse.json(
                        { msg: "Email address is missing." },
                        { status: 400 }
                    );
                }
            } else {
                return NextResponse.json(
                    { msg: "Invalid captcha" },
                    { status: 400 }
                );
            }
        } catch (e) {
            console.error(e);
            return NextResponse.json(
                {
                    msg: "Could not complete your request. Please try again later.",
                },
                { status: 510 }
            );
        }
    } else {
        return NextResponse.json(
            { msg: "Please complete the captcha." },
            { status: 400 }
        );
    }
}
