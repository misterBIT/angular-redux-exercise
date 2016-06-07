import {ActionReducer, Action} from '@ngrx/store';

const initialState = {};
export const tickerReducer:ActionReducer<any> = (state:any = initialState, action:Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
