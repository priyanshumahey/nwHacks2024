'use client'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import React, {useState, useMemo, useEffect} from 'react'
import Popup from 'reactjs-popup';
import 'bulma/css/bulma.min.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import styles from './styles.module.css';
import Button from '@mui/material/Button';
import {calendarAdd, calendarGet} from './calendarController';

export default function CalendarComponent(props: any) {

    const filters : string[] = props.filters;
    console.log(filters);
  //modal popup and events
    const [modal, setModal] = useState(false);
    const [events, setEvents] = useState<{title: string, description: string | null, location: string| null, start: Date, end: Date, creatorId: number | null, type: string | null}[]>([]);
    const [popupOpen, setPopupOpen] = useState(false);

    //form fields
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [type, setType] = useState<string>('');

    const getEvent = async (filters : string[]) => {
      try {
        setEvents([]); // Reset events array
        let results = await calendarGet(filters);
    
        if (results) {
          let updatedEvents = [];
    
          for (let i = 0; i < results.length; i++) {
            if (results[i].startTime != null && results[i].endTime != null) {
              let formattedStartDate = new Date(Date.parse(results[i].startTime || '0'));
              let formattedEndDate = new Date(Date.parse(results[i].endTime || '0'));
    
              updatedEvents.push({
                title: results[i].title || '',
                description: results[i].description,
                location: results[i].location,
                start: formattedStartDate,
                end: formattedEndDate,
                creatorId: results[i].creatorId,
                type: results[i].type
              });
            }
          }
    
          setEvents(updatedEvents); // Set events after the loop
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    const addEvent = async() => {
        if (endDate != null && startDate != null) {
          try {
            await calendarAdd({id: (new Date().getTime()), title: title, description: description, location: location,
              startTime: startDate.toString(), endTime: endDate.toString(), creatorId: 0, type: type});
            getEvent(filters);
            closeModal();
          }
          catch (error) {
            alert(error);
          }
        }
        else {
          alert('please specify date');
        }
    }

    const openModal = () => {
      setPopupOpen(true);
  };

  const closeModal = () => {
      setPopupOpen(false);
  };

  //code for loading events
  useEffect(() => {
    getEvent(filters);
  }, [filters]);

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
            right: 'dayGridMonth,timeGridWeek',
          }}
          footerToolbar={{
            center: 'addEvent',
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
                    openModal();
                }
              }
          }}
          initialView='dayGridMonth'
          nowIndicator={true}
          editable={true}
          selectable={true}
          selectMirror={true}
          events={events}
          dateClick={openModal}
        />
           <Popup
                open={popupOpen}
                onClose={closeModal}
                modal
                nested
            >
                <div className={styles.popup}>
                  <div className={styles.title}>
                    <Typography variant='h4'>Add new event</Typography>
                    </div>
                    <br></br>
                      <Box component='form' noValidate autoComplete='off'>
                        <div className={styles.formfield}>
                        <TextField
                          color="success"
                          label='title'
                          value={title}
                          onChange={(e: any) => {
                          return setTitle(e.target.value);
                          }}
                        />
                        </div>
                        <div className={styles.formfield}>
                        <TextField
                        className={styles.formfield}
                          color="success"
                          label='description'
                          value={description}
                          onChange={(e: any) => {
                          return setDescription(e.target.value);
                          }}
                        />
                        </div>
                        <div className={styles.formfield}>
                        <TextField
                        className={styles.formfield}
                          color="success"
                          label='location'
                          value={location}
                          onChange={(e: any) => {
                          return setLocation(e.target.value);
                          }}
                        />
                        </div>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <div className={styles.formfield}>
                        <DateTimePicker className={styles.formfield} label='start time' onChange={(date) => setStartDate(date)} value={startDate} />
                        </div>
                        <div className={styles.formfield}>
                        <DateTimePicker className={styles.formfield} label='end time' onChange={(date) => setEndDate(date)} value={endDate} />
                        </div>
                      </LocalizationProvider>
                      <div className={styles.formfield}>
                      <TextField
                      className={styles.formfield}
                          color="success"
                          label='invite list'
                          value={type}
                          onChange={(e: any) => {
                          return setType(e.target.value);
                          }}
                        />
                      </div>
                      <div className={styles.button}>
                        <Button onClick={() => {addEvent()}} variant="contained">Submit</Button>
                      </div>
                    </Box>
                </div>
            </Popup>;
      </div>
  )
}