import { createReducer, on } from '@ngrx/store';
import { incrementCounter, decrementCounter } from './counter.actions';

const initialState = 0;

export const counterReducer = createReducer(
  initialState,

  on(incrementCounter, (state, action) => state + 1),

  on(decrementCounter, (state, action) => state - 1),
);
