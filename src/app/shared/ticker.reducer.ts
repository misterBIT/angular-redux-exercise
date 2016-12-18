import {ActionReducer, Action} from '@ngrx/store';
import {ADD_TO_WATCH, REMOVE_FROM_WATCH, CHANGE_INTERVAL} from "./ticker.actions";
export class TickerState {
  watchList: any[] = [];
  interval: number = 30000;
}
export const initialState = new TickerState();

export function tickerReducer(state: TickerState = initialState, action: Action): TickerState {
  switch (action.type) {
    case ADD_TO_WATCH:
      state.watchList = [...state.watchList, action.payload];
      break;
    case REMOVE_FROM_WATCH:
      let itemIndex = state.watchList.indexOf(action.payload);
      state.watchList = [...state.watchList.slice(0, itemIndex), ...state.watchList.slice(itemIndex + 1)];
      break;
    case CHANGE_INTERVAL:
      state.interval = action.payload;
  }
  return state;
}
