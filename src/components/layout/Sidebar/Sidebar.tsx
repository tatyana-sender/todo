import React, { FC } from 'react';
import { useActions } from '@/hooks/useActions';
import { FILTER_NAMES } from '@/constants/filters';
import PlusIcon from '@/components/icons/PlusIcon';
import Button from '@/components/core/Button';
import Accordion from '@/components/core/Accordion';
import AddTask from '@/components/core/AddTask';
import { SidebarWrapper, Box, Title } from '@/components/layout/Sidebar/Sidebar.styles';

interface SidebarProps {
  setFilter: (name: string) => void
}

const Sidebar:FC<SidebarProps> = ({setFilter}) => {
  const items = [
    {
      title: 'Projects',
      path: '/projects',
      children: [
        {
          name: 'All Projects'
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

  const {showModal} = useActions();
  const openModal = () => {
    const modalContent = <AddTask />
    showModal(modalContent);
  };

  return (
    <SidebarWrapper>
      <Box>
        <Title>Tasks</Title>
        <Button variant='circle' onClick={openModal}>
          <PlusIcon />
        </Button>
      </Box>
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
