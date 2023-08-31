import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent, waitFor, getByTestId, getByPlaceholderText } from '@testing-library/react';
import { store } from '@/store/index';
import App from '../App';


describe('Modal Tests', () => {
  it('displays modal when button is clicked',  async () => {

    const { getByPlaceholderText, getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const openModalButton = getByTestId('add-task');
    fireEvent.click(openModalButton);
    const modalContent = await waitFor(() => getByPlaceholderText('Title'));
    expect(modalContent).toBeInTheDocument();
  });

  it('hides modal when close button is clicked', async () => {
    const { queryByPlaceholderText, getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const openModalButton = getByTestId('add-task');
    fireEvent.click(openModalButton);

    const closeButton = getByTestId('close-modal');
    fireEvent.click(closeButton);

    const modalContent = await waitFor(() => queryByPlaceholderText('Title'));
    expect(modalContent).not.toBeInTheDocument();
  });
});
