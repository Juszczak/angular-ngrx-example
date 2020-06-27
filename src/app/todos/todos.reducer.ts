import { createReducer, on } from '@ngrx/store';
import { TodosState } from './todos.state';
import { addTodo, updateTodo, updateSearchQuery } from './todos.actions';

const initialState: TodosState = {
  list: [],
  searchQuery: '',
};

export const todosReducer = createReducer(
  initialState,

  on(addTodo, (state, action) => ({
    ...state,
    list: [...state.list, action.todo],
  })),

  on(updateTodo, (state, action) => {
    const index = state.list.findIndex((todo) => todo.id === action.id);
    const newTodo = { ...state.list[index], done: action.done };
    const newList = [...state.list];
    newList[index] = newTodo;

    return { ...state, list: newList };
  }),

  on(updateSearchQuery, (state, { searchQuery }) => ({ ...state, searchQuery })),
);
