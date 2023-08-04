import React, {Dispatch, FC, SetStateAction, useMemo} from 'react';
import { Link } from 'react-router-dom';
import PlusIcon from "@/components/icons/PlusIcon";
import Button from '@/components/core/Button';
import Accordion from '@/components/core/Accordion';
import { SidebarWrapper, Box, Title } from '@/components/layout/Sidebar/Sidebar.styles';

interface SidebarProps {
  filters: string[],
  setFilter: (name: string) => void,
  setModal: Dispatch<SetStateAction<{isOpen:boolean, isEdit: boolean}>>
};

const Sidebar:FC<SidebarProps> = ({filters, setFilter, setModal}) => {
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
      children: filters.map(item => (
        {name: item}
      ))
    }
  ];

  return (
    <SidebarWrapper>
      <Box>
        <Title>Tasks</Title>
        <Button variant='circle' onClick={() => setModal({isOpen: true, isEdit: false})}>
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
