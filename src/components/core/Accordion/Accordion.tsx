import React, {FC, ReactNode} from 'react';
import { NavLink} from 'react-router-dom';
import { Box, List, ListTitle } from '@/components/core/Accordion/Accordion.styles';
import ChevronIcon from '@/components/icons/ChevronIcon';

interface AccordionProps {
  title: string | ReactNode,
  link?: string,
  children: string | JSX.Element | JSX.Element[]
};

const Accordion:FC<AccordionProps> = ({title, link, children}) => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <>
      <Box data-testid="accordion-header" onClick={() => setOpen(!isOpen)}>
        <ListTitle data-testid="accordion-title" className={`${isOpen ? "active" : ""}`}>
          {link ? (
            <NavLink to={link}
                     className={({ isActive }) => isActive ? 'active' : ''}
            >
              {title}
            </NavLink>
          ) : (
            <span>{title}</span>
          )}
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
