import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@/store/index';
import App from '../App';

describe('Task Component', () => {
  it('adding task', async () => {
    const { getByText, getByTestId, getByPlaceholderText, getAllByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const openModalButton = getByTestId('add-task');
    fireEvent.click(openModalButton);
    const titleInput = getByPlaceholderText('Title');
    const addButton = getByText('Add');
    fireEvent.change(titleInput, { target: { value: 'Create Task Test' } });
    fireEvent.click(addButton);

    await waitFor(() => {
      const newTask = getAllByText('Create Task Test')[0];
      expect(newTask).toBeInTheDocument();
    });
  });

  it('editing task', async () => {

    const { queryAllByText, queryAllByPlaceholderText, queryAllByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    await waitFor(() => {
      const newTask = queryAllByText('Create Task Test')[0];
      expect(newTask).toBeInTheDocument();
      const actions = queryAllByTestId('task-actions')[0];
      fireEvent.click(actions);
      const btnEdit = queryAllByTestId('task-edit')[0];
      expect(btnEdit).toBeInTheDocument();
      fireEvent.click(btnEdit);
      const inputEdit = queryAllByPlaceholderText('Title')[0];
      expect(inputEdit).toBeInTheDocument();
      fireEvent.change(inputEdit, { target: { value: 'Edited Task Test' } });
      const editButton = queryAllByText('Edit')[0];
      expect(editButton).toBeInTheDocument();
      fireEvent.click(editButton);
    });

    await waitFor(() => {
      const editedTask = queryAllByText('Edited Task Test')[0];
      expect(editedTask).toBeInTheDocument();
    })
  });

  it('deleting task', async () => {

    const { getAllByText, getAllByTestId, getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    await waitFor(() => {
      const newTask = getAllByText('Edited Task Test')[0];
      expect(newTask).toBeInTheDocument();
      const actions = getAllByTestId('task-actions')[0];
      fireEvent.click(actions);
      const btnDelete = getByTestId('task-delete');
      expect(btnDelete).toBeInTheDocument();
      fireEvent.click(btnDelete);
      expect(newTask).not.toBeInTheDocument();
    });
  });
});
