import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { fireEvent, render, screen } from '@testing-library/react';
//import { nanoid } from 'nanoid';
import { rootReducer } from '@/store/reducers';
import AddTask from '@/components/core/AddTask';

describe('Add task Component', () => {
  it('should contains the button', () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));

    const { getByPlaceholderText, getByTestId } = render(
      <Provider store={store}>
        <AddTask />
      </Provider>
    );
//
//     //const input = getByPlaceholderText('Add a new todo');
//     //fireEvent.change(input, { target: { value: 'New todo item' } });
//
//     // const addButton = getByTestId('add-button');
//     // fireEvent.click(addButton);
//     //
//     // const state = store.getState();
//     // expect(state.todos).toHaveLength(1);
//     // expect(state.todos[0].text).toBe('New todo item');
  });
});

