import { createReducer, on } from '@ngrx/store';
import * as errorActions from '../actions/errorLogs.action';

export const dataFeatureKey = 'data';

export interface State {
  data: any[];
  error: any;
}

export const initialState: State = {
  data: [],
  error: null,
};

export const errorReducer = createReducer(
  initialState,
  on(errorActions.loadErrorSuccess, (state, { data }) => ({
    ...state,
    data,
    error: null,
  })),
  on(errorActions.loadErrorFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
