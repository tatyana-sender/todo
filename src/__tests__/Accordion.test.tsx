import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Accordion from '@/components/core/Accordion';

describe('Accordion appearance', () => {
  it('should contains header and body', () => {
    render(<Accordion title='Tasks' children='To do' />);
    const heading = screen.getByText(/Tasks/i);
    const body = screen.getByText(/To do/i);
    const accHeader = screen.getByTestId("accordion-header");
    const accTitle = screen.getByTestId("accordion-title");
    expect(heading).toBeInTheDocument();
    expect(body).toBeInTheDocument();
    fireEvent.click(accHeader);
    expect(accTitle).toHaveClass('active');
  });
});
