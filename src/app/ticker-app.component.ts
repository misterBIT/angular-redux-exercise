import {Component} from '@angular/core';
import {StocksService} from "./shared/stocks.service";
import {SearchComponent} from "./search/search.component";
import {WatchedComponent} from "./watched/watched.component";
import {WatchedCounterComponent} from "./watched-counter/watched-counter.component";

@Component({
  moduleId  : module.id,
  selector  : 'ticker-app',
  directives: [SearchComponent,WatchedComponent,WatchedCounterComponent],
  providers : [StocksService],
  template  : `<div class="container">
    <div class="jumbotron"> <h1>TickerApp</h1></div>
    <search-component></search-component>
    <my-watched-component></my-watched-component>
    <my-watched-counter></my-watched-counter>
</div>`
})
export class TickerApp {
  constructor() {
  }
}
