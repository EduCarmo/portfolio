// import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    try {
        const data = await resend.emails.send({
            from: 'Eduardo <eduardocarmo72@gmail.com>',
            to: ['eduardocarmo72@gmail.com'],
            subject: 'Hello world',
            react: 
            <>
                <p>Email Body</p>
            </>
        });

        return NextResponse.json(data);;
    } catch (error) {
        return NextResponse.json({ error })
    }

}
