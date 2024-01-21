'use client'
import CalendarComponent from './calendar';
import {LeftMenu} from './LeftMenu';
import { NextPage } from "next";
import { PageLayout } from "../../components/page-layout";
import styles from './styles.module.css';
import Typography from '@mui/material/Typography';

export default function CalendarPage() {

  return (
    <PageLayout>
      <div className={styles.main_div}>
        <Typography variant="h1" color="red">Calendar</Typography>
        <div className={styles.calendarPageLayout}>
        <LeftMenu />
        <div className={styles.calendar}>
          <CalendarComponent/>
        </div>
        </div>
      </div>
    </PageLayout>
  )
}