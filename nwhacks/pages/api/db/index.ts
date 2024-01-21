import type { NextApiRequest, NextApiResponse } from 'next'
import {db} from '../../../lib/db/index'
import {event} from '../../../lib/db/schema'
import {Event} from '../../../types/Event'
type ResponseData = {
    message: string
}
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        //get all events
        try {
            const results: Event[] = await db.select({
                id: event.id,
                title: event.title,
                description: event.description,
                location: event.location,
                startTime: event.startTime,
                endTime: event.endTime,
                creatorId: event.creatorId,
                inviteList: event.inviteList
            }).from(event)
            return results;
        }
        catch (error) {
            console.error(error);
            res.status(500).json({message: 'Unable to fetch data'})
        }
    }
    else if (req.method === 'POST') {
        //create one event
        const id: number = 304234;
        const title: string = 'bruh';
        const description: string = '';
        const location: string = 'Vancouver';
        const startTime: string = '2024-01-20 00:00:00';
        const endTime: string = '2024-01-20 12:00:00';
        const creatorId: number = 1;
        const inviteList: number = 2;
        
        try {
            await db.insert(event).values({
            id: id,
            title: title,
            description: description,
            location: location,
            startTime: startTime,
            endTime: endTime,
            creatorId: creatorId,
            inviteList: inviteList
        });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({message: 'Error inserting into database!'});
        }
        res.status(200).json({ message: `Successfully inserted into database values id: ${id}
                                        title: ${title} description: ${description} location: ${location},
                                        startTime: ${startTime} endTime: ${endTime} creatorId: ${creatorId},
                                        inviteList: ${inviteList}` });
    } else {
        res.status(400).json({ message: 'Not found!' });
    }
}