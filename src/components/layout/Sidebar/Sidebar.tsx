import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { FILTER_NAMES, FILTER_NOTIFICATIONS } from '@/constants/filters';
import { AppDispatch } from '@/store/index';
import { setFilter } from '@/store/reducers/filterReducer';
import Accordion from '@/components/core/Accordion';
import Projects from '@/components/layout/Projects';
import { SidebarWrapper } from '@/components/layout/Sidebar/Sidebar.styles';

const Sidebar:FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { projects } = useTypedSelector(state => state.project);
  const [activeItem, setActiveItem] = useState('All');

  const handleClick = (name: string) => {
    dispatch(setFilter(name));
    setActiveItem(name);
  };

  const items = [
    {
      title: 'Projects',
      path: '/projects',
      filter: false,
      children: projects.map(item => (
        {
          name: item.title,
          path: item.id
        }
      ))
    },
    {
      title: 'Tasks',
      path: '/',
      filter: true,
      children: FILTER_NAMES.map(item => (
        {
          name: item,
          path: ''
        }
      ))
    },
    {
      title: 'Notifications',
      path: '/notifications',
      filter: true,
      children: FILTER_NOTIFICATIONS.map(item => (
        {
          name: item,
          path: ''
        }
      ))
    }
  ];

  return (
    <SidebarWrapper>
      <div>
        {items?.map((item, index) => (
          <Accordion key={index} title={item.title} link={item.path}>
            {
              item.filter ? (
                item?.children.map((child, idx) => (
                  <li
                    key={idx}
                    onClick={() => handleClick(child.name)}
                    className={activeItem === child.name ? 'active': ''}
                  >
                    {child.name}
                  </li>
                ))
              ) : (
                item?.children.map((child, idx) => (
                  <NavLink
                    to={`/projects/${child?.path}`}
                    className={({ isActive }) => isActive ? 'active' : ''}
                    key={idx}
                  >
                    {child.name}
                  </NavLink>
                ))
              )
            }
          </Accordion>
        ))}
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;
