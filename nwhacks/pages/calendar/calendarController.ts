import {Event} from '../../types/Event'

export const calendarAdd = async(event : Event) => {
    try {
        const res = await fetch('http://localhost:4040/api/db', {
            method: 'POST',
            body: JSON.stringify(event),
            headers: {
                'content-type': 'application/json'
            }
        })
        console.log(res);
    }   
    catch (error) {
        console.error(error);
        return false;
    }
    return true;
}

export const calendarGet = async() => {
    let eventList : Event[] = []
    try {
        const res = await fetch('http://localhost:4040/api/db', {
            method: 'GET'
        });
        const data = await res.json();
        eventList = data.data;
    }
    catch (error) {
        console.error(error);
        return false;
    }
    return eventList;
}