import React, {Dispatch, FC, SetStateAction} from 'react';
import PlusIcon from "@/components/icons/PlusIcon";
import Button from '@/components/core/Button';
import Accordion from '@/components/core/Accordion';
import { SidebarWrapper, Box, Title } from '@/components/layout/Sidebar/Sidebar.styles';

interface SidebarProps {
  filters: string[],
  setFilter: (name: string) => void,
  setIsOpen: Dispatch<SetStateAction<boolean>>
};

const Sidebar:FC<SidebarProps> = ({filters, setFilter, setIsOpen}) => {
  const items = [
    // {
    //   title: 'Projects',
    //   children: [
    //     {
    //       name: 'All Projects'
    //     },
    //     {
    //       name: 'Satellite'
    //     },
    //     {
    //       name: 'CPS'
    //     },
    //     {
    //       name: 'To Do'
    //     }
    //   ]
    // },
    {
      title: 'Tasks',
      children: filters.map(item => (
        {name: item}
      ))
    }
  ];

  return (
    <SidebarWrapper>
      <Box>
        <Title>Tasks</Title>
        <Button variant='circle' onClick={() => setIsOpen(true)}>
          <PlusIcon />
        </Button>
      </Box>
      <div>
        {items?.map((item, index) => (
          <Accordion key={index} title={item.title}>
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
