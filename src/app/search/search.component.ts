import {Component, OnDestroy, AfterViewInit, ViewChild} from '@angular/core';
import {StocksService} from "../shared/stocks.service";
import {Store} from "@ngrx/store";
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {ADD_TO_WATCH} from "../shared/ticker.actions";
import {LookupItem} from "../watched/lookup-item.model";
import {FormControl} from "@angular/forms";
import 'rxjs/add/observable/of';
@Component({
  selector: 'search-component',
  templateUrl: './search.component.html',
})
export class SearchComponent implements AfterViewInit {
  results$: Observable<LookupItem>;
  @ViewChild('searchInput')
  private input: FormControl;

  constructor(private stocksService: StocksService, private store: Store<any>) {

  }

  ngAfterViewInit() {
    this.results$ = this.input.valueChanges
      .filter(v => v.length > 2)
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap((v) => this.stocksService.lookup(v));
  }

  addToWatch(item) {
    this.store.dispatch({type: ADD_TO_WATCH, payload: item});
  }
}
