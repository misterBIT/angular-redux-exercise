import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {JSONP_PROVIDERS} from '@angular/http';
import {TickerApp, environment} from './app';
import {provideStore} from '@ngrx/store';
import {tickerReducer, initialState} from './app/shared/ticker.reducer';

if (environment.production) {
  enableProdMode();
}

bootstrap(TickerApp, [
  provideStore(tickerReducer),
  ...JSONP_PROVIDERS]);

