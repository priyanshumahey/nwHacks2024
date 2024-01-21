'use client'
import CalendarComponent from './calendar';
import {LeftMenu} from './LeftMenu';
import { NextPage } from "next";
import { PageLayout } from "../../components/page-layout";
import styles from './styles.module.css';
import Typography from '@mui/material/Typography';
import React, {useState} from 'react';

export default function CalendarPage() {

  const [filters, setFilters] = useState([]);
  return (
    <PageLayout>
      <div className={styles.main_div}>
        <div className={styles.calendarPageLayout}>
        <LeftMenu func={setFilters}/>
        <div className={styles.calendar}>
          <CalendarComponent filters={filters}/>
        </div>
        </div>
      </div>
    </PageLayout>
  )
}