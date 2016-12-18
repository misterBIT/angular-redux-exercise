import {NgModule} from "@angular/core";
import {StoreModule} from '@ngrx/store';
import {tickerReducer} from './shared/ticker.reducer';
import {TickerApp} from "./ticker-app.component";
import {BrowserModule} from "@angular/platform-browser";
import {JsonpModule} from "@angular/http";
import {StocksService} from "./shared/stocks.service";
import {SearchComponent} from "./search/search.component";
import {WatchedCounterComponent} from "./watched-counter/watched-counter.component";
import {WatchedComponent} from "./watched/watched.component";
import {StockItemComponent} from "./stock-item/stock-item.component";
import {StockItemRenderComponent} from "./stock-item/stock-item-render.component";
import {FormsModule} from "@angular/forms";
import {SearchResultsComponent} from "./search/search-results.component";


@NgModule({
  declarations: [TickerApp, SearchResultsComponent, SearchComponent, WatchedComponent, WatchedCounterComponent, StockItemComponent, StockItemRenderComponent],
  providers: [StocksService],
  imports: [BrowserModule, StoreModule.provideStore(tickerReducer), JsonpModule, FormsModule],
  bootstrap: [TickerApp]
})
export class AppModule {
}
