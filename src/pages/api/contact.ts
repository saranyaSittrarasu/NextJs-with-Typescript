import type { NextApiRequest, NextApiResponse } from 'next';
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

type Data = {
    message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method === 'POST') {
        const { name, email, message, mobile} = req.body;

        const msg = {
            to: 'saranya.sittra@gmail.com', 
            from: 'saranya.karthik@outlook.com', 
            subject: 'Contact Form Submission',
            text: `Name: ${name}\nEmail: ${email}\nMobile Number: ${mobile}\n\nMessage:\n${message}`,
        };

        try {
            await sendgrid.send(msg);
            res.status(200).json({ message: 'Mail sent successfully!' });
        } catch (error:any) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: `Error sending message: ${error.message}` });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
