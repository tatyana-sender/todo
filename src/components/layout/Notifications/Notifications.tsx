import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { deleteNotification, editNotification } from '@/store/actions/notificationActions';
import { NotificationProps } from '@/types/types';
import DeleteIcon from '@/components/icons/DeleteIcon';
import Header from '@/components/layout/Header';
import Button from '@/components/core/Button';
import {
  ColumnWrapper,
  DeleteButton,
  MainWrapper,
  Notification,
  Title
} from '@/components/layout/Notifications/Notifications.styles';


interface NotificationsProps {
  notifications: Array<NotificationProps>,
  currentFilter: string,
}

const Notifications: FC<NotificationsProps> = ({ notifications, currentFilter }) => {
  const dispatch = useDispatch();

  const changeNotificationStatus = (id: string) => {
    dispatch(editNotification({
      id: id,
      status: 'read'
    }))
  }

  return (
    <MainWrapper>
      <Header />
      <Title>Notifications</Title>
      <ColumnWrapper>
        {notifications
          .filter((item: NotificationProps) => {
            if (currentFilter !== 'All') {
              return item.status === currentFilter.toLowerCase()
            } else {
              return item
            }
          })
          .map((notification) => {
            return (
              <Notification key={notification.id}>
                <div>{notification.message}</div>
                <DeleteButton onClick={()=>dispatch(deleteNotification(notification.id))}>
                  <DeleteIcon />
                </DeleteButton>
                {notification.status === 'new' &&
                  <Button
                    variant="contained"
                    onClick={()=>changeNotificationStatus(notification.id)}
                  >
                    Mark as read
                  </Button>
                }
              </Notification>
            )
          })
        }
      </ColumnWrapper>
    </MainWrapper>
  );
};

export default Notifications;
