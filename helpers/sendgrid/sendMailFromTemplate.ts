import MailAccount from "@/types/MailAccount";
import { NextResponse } from "next/server";

const sendMailFromTemplate = async (
    from: MailAccount,
    to: MailAccount[],
    sendgrid_template_id: string,
    template_data: Record<string, string>,
    reply_to?: MailAccount,
    bcc?: MailAccount[]
): Promise<NextResponse> => {
    const url = "https://api.sendgrid.com/v3/mail/send";

    let personalization: Record<string, any> = {
        to,
        dynamic_template_data: template_data,
    };
    if (bcc) personalization = { ...personalization, bcc };

    let reqBody: Record<string, any> = {
        personalizations: [personalization],
        from,
        template_id: sendgrid_template_id,
    };
    if (reply_to) reqBody = { ...reqBody, reply_to };
    const response = await fetch(url, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
    });
    if (response.status === 202) {
        return NextResponse.json({ msg: "Email sent" }, { status: 200 });
    } else {
        return NextResponse.json(await response.json(), {
            status: response.status,
        });
    }
};

export default sendMailFromTemplate;
