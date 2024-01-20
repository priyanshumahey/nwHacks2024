import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
    message: string
}
 
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === '') {
        
    }
    else if (req.method === 'POST') {
        res.status(200).json({ message: 'Hello from Next.js!' })
    } else {
        res.status(200).json({ message: 'Bye from Next.js!' })
    }
}