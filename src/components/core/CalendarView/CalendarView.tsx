import React, { FC, useState } from 'react';
import { momentLocalizer, Event } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { TaskProps } from '@/types/types';
import { StyledCalendar } from '@/components/core/CalendarView/CalendarView.styles';

interface CalendarViewProps {
  tasks: TaskProps[]
}

const CalendarView: FC<CalendarViewProps> = ({ tasks }) => {
  const localizer = momentLocalizer(moment);
  const tasksList = tasks.map((task: any) => {
    return ( {
      title: task.title,
      start: task.deadline,
      end: task.deadline,
    })
  })

  return (
    <StyledCalendar
      localizer={localizer}
      events={tasksList}
      defaultDate={new Date()}
      defaultView="month"
    />
  );
};

export default CalendarView;