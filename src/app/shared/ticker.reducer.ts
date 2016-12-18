import {Action} from '@ngrx/store';

const initialState = {};
export function tickerReducer<T>(state: T = initialState, action: Action): T => {
	switch (action.type) {
		default:
			return state;
	}
};
