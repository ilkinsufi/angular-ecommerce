import { createReducer } from '@ngrx/store';
import { customerState } from './Customer.State';

const _CustomerReducer = createReducer(customerState);

export function CustomerReducer(state: any, action: any) {
  return _CustomerReducer(state, action);
}
