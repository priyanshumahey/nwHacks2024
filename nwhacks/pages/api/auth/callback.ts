import { NextApiRequest, NextApiResponse } from 'next';
import { handleCallback } from "@auth0/nextjs-auth0";

export default async function callback(req: NextApiRequest, res: NextApiResponse) {
    try {
        await handleCallback(req, res, { redirectTo: '/' });
    } catch (error: any) {
        console.error(error);
        res.status(error.status || 400).end(error.message);
    }
}