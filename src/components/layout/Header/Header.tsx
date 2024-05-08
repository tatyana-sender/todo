import React, { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';
import BellIcon from '@/components/icons/BellIcon';
import BellIconFill from '@/components/icons/BellIconFill';
import CalendarIcon from '@/components/icons/CalendarIcon';
import Button from '@/components/core/Button';
import Popover from '@/components/core/Popover';
import { BoxRight, CalendarBox, NotificationBox } from '@/components/layout/Header/Header.styles';

const Header:FC = () => {
  const { notifications } = useTypedSelector(state => state.notificationWS);
  const { connectWebSocket } = useActions();
  const [currentDay, setCurrentDay] = useState<string>('');
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  useEffect(() => {
    connectWebSocket();
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
        <Button variant="text" onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
          {notifications?.length > 0 ? (
            <BellIconFill />
          ) : (
            <BellIcon />
          )}
        </Button>
        {isPopoverOpen &&
        <Popover>
          <div>
            {notifications.slice(-1)[0]}
          </div>
          <NavLink to={`/notifications`}>
            View all
          </NavLink>
        </Popover>
        }
      </NotificationBox>
      <CalendarBox>
        <CalendarIcon />
        {currentDay}
      </CalendarBox>
    </BoxRight>
  );
};

export default Header;
