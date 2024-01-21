import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from "@auth0/nextjs-auth0";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession(req, res)
    const userId = session?.user?.id

    if (!userId) {
        return res.status(401).json({ error: 'Unauthorized' })
    }

    res.status(200).json({ userId })
}
