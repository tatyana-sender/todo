import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import Main from '@/components/layout/Main';

const mockStore = configureStore([]);

describe('Main  component',  () => {
  const store = mockStore( {
    task: {
      tasks: [
        { id: '1', title: 'Test', description: 'text', status: 'To do', createDate: '05.08.2023', deadline: new Date() },
        { id: '2', title: 'Test 2', description: 'text 2', status: 'In Progress', createDate: '05.08.2023', deadline: new Date() },
      ],
    },
    currentFilter: {
      currentFilter: 'All'
    }
  });

  it('renders tasks correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Main />
      </Provider>
    );

    expect(getByText(/Board View/i)).toBeInTheDocument();
    expect(getByText(/Sort/i)).toBeInTheDocument();
    fireEvent.click(getByText(/Sort/i));
    expect(getByText(/Title up/i)).toBeInTheDocument();
    expect(getByText('To do (1)')).toBeInTheDocument();
    expect(getByText('text')).toBeInTheDocument();
    expect(getByText('In Progress (1)')).toBeInTheDocument();
    expect(getByText(/Test 2/i)).toBeInTheDocument();
  });
});
