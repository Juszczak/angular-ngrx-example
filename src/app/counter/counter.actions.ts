import { createAction } from '@ngrx/store';

export const incrementCounter = createAction('counter/increment');

export const decrementCounter = createAction('counter/decrement');
