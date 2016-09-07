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

@Component({
  selector   : 'search-component',
  templateUrl: 'search.component.html',
})
export class SearchComponent implements AfterViewInit {
  results$:Observable<LookupItem>;
  private inputObservable:Observable<Event>;
  @ViewChild('searchInput')
  private input;

  constructor(private stocksService:StocksService, private store:Store<any>) {

  }

  ngAfterViewInit() {
    // there are many other ways to get input observable - create a subject and next to it on keyup event,
    // instantiate a Control use ngControl directive and use the valueChanges Observable, etc.
    this.inputObservable = Observable.fromEvent(this.input.nativeElement, 'keyup'); //
    this.results$ = this.inputObservable
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap((v) => this.stocksService.lookup(v.target['value']));
  }

  addToWatch(item) {
    this.store.dispatch({type: ADD_TO_WATCH, payload: item});
  }
}