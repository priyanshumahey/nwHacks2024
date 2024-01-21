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
            res.status(200).json({data: results})
        }
        catch (error) {
            console.error(error);
            res.status(500).json({message: 'Unable to fetch data'})
        }
    }
    else if (req.method === 'POST') {
        //create one event
        const eventDetails = req.body;
        console.log(event);
        
        try {
            if (eventDetails.id != null) {
                await db.insert(event).values({
                    id: eventDetails.id,
                    title: eventDetails.title,
                    description: eventDetails.description,
                    location: eventDetails.location,
                    startTime: eventDetails.startTime,
                    endTime: eventDetails.endTime,
                    creatorId: eventDetails.creatorId,
                    inviteList: eventDetails.inviteList
                });
            }
            else {
                throw Error('Event ID cannot be null!');
            }
        }
        catch (error) {
            console.error(error);
            res.status(500).json({message: 'Error inserting into database!'});
        }
        res.status(200).json({ message: `Successfully inserted into database values id: ${event.id}
                                        title: ${event.title} description: ${event.description} location: ${event.location},
                                        startTime: ${event.startTime} endTime: ${event.endTime} creatorId: ${event.creatorId},
                                        inviteList: ${event.inviteList}` });
    } else {
        res.status(400).json({ message: 'Not found!' });
    }
}