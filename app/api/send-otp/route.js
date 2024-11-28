import { NextResponse } from 'next/server';
import { Twilio } from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const serviceSid = process.env.TWILIO_VERIFY_SERVICE_SID;

const client = new Twilio(accountSid, authToken);

export async function POST(req) {
    try {
        const { OTPPhoneNumber } = await req.json();
        if (!OTPPhoneNumber) {
            return NextResponse.json({ error: 'Phone number is required' }, { status: 400 });
        }

        const verification = await client.verify
            .services(serviceSid)
            .verifications.create({
                to: OTPPhoneNumber,
                channel: 'sms',
            });

        return NextResponse.json({ status: verification.status });
    } catch (error) {
        console.error('Error in /api/send-otp:', error.message);  // Log the detailed error for debugging
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}