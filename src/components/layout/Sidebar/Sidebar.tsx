import React, { FC } from 'react';
import { useActions } from '@/hooks/useActions';
import { FILTER_NAMES } from '@/constants/filters';
import Accordion from '@/components/core/Accordion';
import { SidebarWrapper } from '@/components/layout/Sidebar/Sidebar.styles';

const Sidebar:FC = () => {
  const items = [
    {
      title: 'Projects',
      path: '/projects',
      children: [
        {
          name: 'All ProjectPage'
        },
        {
          name: 'Satellite'
        },
        {
          name: 'CPS'
        },
        {
          name: 'To Do'
        }
      ]
    },
    {
      title: 'Tasks',
      path: '/',
      children: FILTER_NAMES.map(item => (
        {name: item}
      ))
    }
  ];

  const { setFilter } = useActions();

  return (
    <SidebarWrapper>
      <div>
        {items?.map((item, index) => (
          <Accordion key={index} title={item.title} link={item.path}>
            {item?.children.map((child, idx) => (
              <li key={idx} onClick={() => setFilter(child.name)}>{child.name}</li>
            ))}
          </Accordion>
        ))}
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;
