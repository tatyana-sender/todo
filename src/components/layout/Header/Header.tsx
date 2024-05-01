import React, { FC, useEffect, useState } from 'react';
import BellIcon from '@/components/icons/BellIcon';
import CalendarIcon from '@/components/icons/CalendarIcon';
import { BoxRight, CalendarBox, NotificationBox } from '@/components/layout/Header/Header.styles';

const Header:FC = () => {
  const [currentDay, setCurrentDay] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      };
      const formattedDate = currentDate.toLocaleDateString('de', options);
      setCurrentDay(formattedDate);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <BoxRight>
      <NotificationBox>
        <BellIcon />
      </NotificationBox>
      <CalendarBox>
        <CalendarIcon />
        {currentDay}
      </CalendarBox>
    </BoxRight>
  );
};

export default Header;
