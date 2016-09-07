import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {TickerState} from "../shared/ticker.reducer";
import {Store} from '@ngrx/store';
@Component({
	selector: 'my-watched-component',
	templateUrl: 'watched.component.html',
})
export class WatchedComponent implements OnInit {
	watchList$: Observable<any[]>;
	hasData$: Observable<boolean>;
	interval$: Observable<number>;

	constructor(private store: Store<TickerState>) {
		this.watchList$ = store.select((state)=> {
			return state.watchList;
		});
		this.hasData$ = this.watchList$.map(list=>list.length > 0);
		this.interval$ = this.store.select(tickerState=>tickerState.interval);

	}

	ngOnInit() {
	}

}
