'use client'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import React, {useState} from 'react'

export default function CalendarPage() {

    const [events, setEvents] = useState([{title: 'nice event', start: new Date(), resourceId: 'a'}])
    const addEvent = (event : {title: string, start: Date, resourceId: string}) => {
        setEvents([...events, event])
    }
  return (
      <div className='calendar-container'>
        <FullCalendar
          plugins={[
            dayGridPlugin,
            interactionPlugin,
            timeGridPlugin
          ]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridDay,timeGridWeek',
          }}
          footerToolbar={{
            left: 'custom1,custom2',
            center: 'addEvent',
            right: 'custom1,custom2'
          }}
          customButtons={{
            custom1: { 
                text: 'custom 1',
                click: () => {
                  alert('clicked custom button 1!');
                }
              },
              custom2: {
                text: 'custom 2',
                click: () => {
                  alert('clicked custom button 2!');
                }
              },
              addEvent: {
                text: 'add event',
                click: () => {
                    let dateStr = prompt('Enter a date in YYYY-MM-DD format');
                    let date = new Date(dateStr + 'T00:00:00'); // will be in local time

                if (!isNaN(date.valueOf())) { // valid?
                    addEvent({title: 'some random event', start: date, resourceId: 'a'})
                    alert('Great. Now, update your database...');
                } else {
                    alert('Invalid date.');
                }
                }
              }
          }}
          initialView='dayGridMonth'
          nowIndicator={true}
          editable={true}
          selectable={true}
          selectMirror={true}
          resources={[
            { id: 'a', title: 'Auditorium A' },
            { id: 'b', title: 'Auditorium B', eventColor: 'green' },
            { id: 'c', title: 'Auditorium C', eventColor: 'orange' },
          ]}
          events={events}
        />
      </div>
  )
}