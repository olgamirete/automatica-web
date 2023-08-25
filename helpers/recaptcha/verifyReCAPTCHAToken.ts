const verifyReCAPTCHAToken = async (token: string): Promise<boolean> => {
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GOOGLE_API_RECAPTCHA_V2_SECRET_KEY}&response=${token}`;
    const response = await fetch(url, { method: "POST" });
    const data = await response.json();
    if (response.status === 200) {
        const { success, challenge_ts, hostname } = data;
        return success === true;
    } else {
        console.error(JSON.stringify(data));
    }
    return false;
};

export default verifyReCAPTCHAToken;
