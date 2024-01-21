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

export const calendarGet = async(filters : string[]) => {
    let eventList : Event[] = []
    try {
        if (filters) {
            for (let i = 0; i < filters.length; i++) {
                let arr = []
                const res = await fetch(`http://localhost:4040/api/db?filters=${filters[i]}`, {
                    method: 'GET'
                });
                const data = await res.json();
                arr = data.data;
                for (let j = 0; j < arr.length; j++) {
                    eventList.push(arr[j])
                }
            }
        }
    }
    catch (error) {
        console.error(error);
        return false;
    }
    return eventList;
}