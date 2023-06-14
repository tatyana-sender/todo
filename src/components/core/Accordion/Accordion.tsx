import React, { FC, useState} from 'react';
import {Box, List, ListTitle} from '@/components/core/Accordion/Accordion.styles';
import ChevronIcon from '@/components/icons/ChevronIcon';

interface AccordionProps {
  title: string,
  children: string | JSX.Element | JSX.Element[]
};

const Accordion:FC<AccordionProps> = ({title, children}) => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <>
      <Box onClick={() => setOpen(!isOpen)}>
        <ListTitle className={`${isOpen ? "active" : ""}`}>
          {title}
        </ListTitle>
        <ChevronIcon color={isOpen ? 'white' : 'rgba(255,255,255,0.5)'} />
      </Box>
      <List className={`${isOpen ? "active" : ""}`}>
        {children}
      </List>
    </>
  );
};

export default Accordion;
