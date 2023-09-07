import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@/store/index';
import App from '../App';
import Task from '@/components/core/Task';

const task = {
  title: 'Test Delete',
  status: 'To do',
  id: 'id-1',
  description: 'req.body.description',
  createDate: '25.06.2023',
  deadline: new Date()
}

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
    fireEvent.change(titleInput, { target: { value: 'Solve problem' } });
    fireEvent.click(addButton);
    const newTask = await waitFor(() => getAllByText('Solve problem')[0]);
    expect(newTask).toBeInTheDocument();
  });
  it('deleting task', async () => {

    const { getByText, queryByText } = render(
      <Provider store={store}>
        <Task task={task} />
      </Provider>
    );

    expect(getByText('Test Delete')).toBeInTheDocument();;

    fireEvent.click(screen.getByTestId('task-actions'));
    await fireEvent.click(screen.getByTestId('task-delete'));
  });

  it('editing task', async () => {

    const { getByText, getAllByText, getByPlaceholderText, getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    fireEvent.click(getByTestId('add-task'));
    const titleInput = getByPlaceholderText('Title');
    const addButton = getByText('Add');
    fireEvent.change(titleInput, { target: { value: 'Test Create' } });
    fireEvent.click(addButton);

    const newTask = await waitFor(() => getAllByText('Test Create')[0]);
    expect(newTask).toBeInTheDocument();
    const taskActions = screen.queryAllByTestId('task-actions')[0];
    expect(taskActions).toBeInTheDocument();
    fireEvent.click(taskActions);
    expect(screen.getByTestId('task-edit')).toBeInTheDocument();
    await fireEvent.click(screen.getByTestId('task-edit'));
    const input = await waitFor(() => screen.queryByPlaceholderText('Test Create'));
    //expect(input).toBeInTheDocument();
  });
});
