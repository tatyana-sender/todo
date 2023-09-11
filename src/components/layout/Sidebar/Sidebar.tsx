import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { FILTER_NAMES } from '@/constants/filters';
import Accordion from '@/components/core/Accordion';
import Projects from '@/components/layout/Projects';
import { SidebarWrapper } from '@/components/layout/Sidebar/Sidebar.styles';

const Sidebar:FC = () => {
  const { setFilter } = useActions();
  const { projects } = useTypedSelector(state => state.project);
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
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
                  <li key={idx}
                      onClick={() => { setFilter(child.name); toggleClass(); }}
                      className={isActive ? 'active': ''}
                  >{child.name}</li>
                ))
              ) : (
                item?.children.map((child, idx) => (
                  <NavLink to={`/projects/${child?.path}`}
                           className={({ isActive }) => isActive ? 'active' : ''}
                  >{child.name}</NavLink>
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
