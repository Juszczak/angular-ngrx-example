import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../app.state';

/* export const selectCounter = (state: AppState) => state.counter; */

export const selectCounter = createFeatureSelector('counter');
