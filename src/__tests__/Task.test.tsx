import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
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
  it('deleting task', async () => {

    const { getByText, getByTestId, getByPlaceholderText, getAllByText, findByText, findAllByText, getAllByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    fireEvent.click(getByTestId('add-task'));
    const titleInput = getByPlaceholderText('Title');
    fireEvent.change(titleInput, { target: { value: 'Delete Task Test' } });
    const addButton = getByText('Add');
    fireEvent.click(addButton);

    await waitFor(() => {
      const newTask = getAllByText('Delete Task Test')[0];
      expect(newTask).toBeInTheDocument();
      const actions = screen.getAllByTestId('task-actions')[0];
      fireEvent.click(actions);
      const btnDelete = screen.getByTestId('task-delete');
      expect(btnDelete).toBeInTheDocument();
      fireEvent.click(btnDelete);
      expect(newTask).not.toBeInTheDocument();
    });
  });

  it('editing task', async () => {

    const { getByText, queryAllByText, getByPlaceholderText, getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    fireEvent.click(getByTestId('add-task'));
    const titleInput = getByPlaceholderText('Title');
    fireEvent.change(titleInput, { target: { value: 'New Task Test' } });
    const addButton = getByText('Add');
    fireEvent.click(addButton);

    await waitFor(() => {

      const newTask = screen.queryAllByText('New Task Test')[0];
      expect(newTask).toBeInTheDocument();
      const actions = screen.queryAllByTestId('task-actions')[0];
      fireEvent.click(actions);
      const btnEdit = screen.queryAllByTestId('task-edit')[0];
      expect(btnEdit).toBeInTheDocument();
      fireEvent.click(btnEdit);
      const inputEdit = screen.queryAllByPlaceholderText('Title')[0];
      expect(inputEdit).toBeInTheDocument();
      fireEvent.change(inputEdit, { target: { value: 'Edited Task Test' } });
      const editButton = queryAllByText('Edit')[0];
      expect(editButton).toBeInTheDocument();
      fireEvent.click(editButton);
      //const editedTask = queryAllByText('Edited Task Test')[0];
    });
  });
});
