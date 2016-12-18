import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {StoreModule} from '@ngrx/store';
import {tickerReducer} from './shared/ticker.reducer';
import {TickerApp} from "./ticker-app.component";
import {BrowserModule} from "@angular/platform-browser";
import {JsonpModule} from "@angular/http";
import {StocksService} from "./shared/stocks.service";


@NgModule({
	declarations: [TickerApp],
	providers: [StocksService],
	schemas: [CUSTOM_ELEMENTS_SCHEMA], // to allow the non existing components in the template
	imports: [BrowserModule, StoreModule.provideStore(tickerReducer), JsonpModule],
	bootstrap: [TickerApp]
})
export class AppModule {
}
