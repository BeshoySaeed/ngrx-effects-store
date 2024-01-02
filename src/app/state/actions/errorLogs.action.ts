import { Action, createAction, props } from '@ngrx/store';

export const loadErrors = createAction('[errors] load errors');

export const loadErrorSuccess = createAction(
  '[errors] load errors success',
  props<{ data: any }>()
);
export const loadErrorFailure = createAction(
  '[errors] load errors failure',
  props<{ error: any }>()
);
