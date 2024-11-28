import { NextResponse } from 'next/server';
import { Twilio } from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const serviceSid = process.env.TWILIO_VERIFY_SERVICE_SID;

const client = new Twilio(accountSid, authToken);

export async function POST(req) {
    try {
        const { OTPPhoneNumber, OTPCode } = await req.json();

        if (!OTPCode) {
            return NextResponse.json({ error: 'OTP Code is required' }, { status: 400 });
        }

        const verificationCheck = await client.verify
            .services(serviceSid)
            .verificationChecks.create({
                to: OTPPhoneNumber,
                code: OTPCode,
            });

        return NextResponse.json({ status: verificationCheck.status });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}