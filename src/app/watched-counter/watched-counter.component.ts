import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from "rxjs/Observable";
import {CHANGE_INTERVAL} from "../shared/ticker.actions";
import {TickerState} from "../shared/ticker.reducer";
@Component({
  moduleId: module.id,
  selector: 'my-watched-counter',
  template: `<div *ngIf="watchNumber$|async">
<h4>Currently watching {{watchNumber$|async}} stocks</h4>
<label>Update every <input type="number" [value]="interval$|async" (keyup)="updateInterval($event.currentTarget.value)"/> seconds</label>
</div>`
})
export class WatchedCounterComponent {
  interval$:Observable<number>;
  watchNumber$:Observable<number>;

  constructor(private store:Store<TickerState>) {
    this.interval$ = this.store.select(tickerState=>tickerState.interval);
    this.watchNumber$ = this.store.select(tickerState=>tickerState.watchList)
      .map(list=>list.length);
  }

  updateInterval(newValue) {
    this.store.dispatch({type: CHANGE_INTERVAL, payload: newValue});

  }

}
