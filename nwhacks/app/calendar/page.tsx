'use client'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import React, {useState} from 'react'
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
import {calendarAdd} from './calendarController';

export default function CalendarPage() {

  //modal popup and events
    const [modal, setModal] = useState(false);
    const [events, setEvents] = useState([{title: 'nice event', description: '', location: 'Vancouver', start: new Date(), end: new Date(), creatorId: 1, inviteList: 0}]);
    const [popupOpen, setPopupOpen] = useState(false);

    //form fields
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [inviteList, setInviteList] = useState<number>(0);

    const addEvent = () => {
        console.log('hello');
        if (typeof(endDate) != null && typeof(startDate) != null) {
          setEvents([...events, {title: title, description: description, location: location, start: startDate, end: endDate, creatorId: 0, inviteList: inviteList}])
          calendarAdd({id: (new Date().getTime()), title: title, description: description, location: location,
            startTime: startDate.toString(), endTime: endDate.toString(), creatorId: 0, inviteList: inviteList});
        }
        else {
          console.log('please specify date');
        }
    }

    const openModal = () => {
      setPopupOpen(true);
  };

  const closeModal = () => {
      setPopupOpen(false);
  };

    //styles for modal
    const style = { background: 'rgba(142 79 79 1)' };

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
                          value={inviteList}
                          onChange={(e: any) => {
                          return setInviteList(e.target.value);
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