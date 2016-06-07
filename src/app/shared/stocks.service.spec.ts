import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { StocksService } from './stocks.service';

describe('Stocks Service', () => {
  beforeEachProviders(() => [StocksService]);

  it('should ...',
      inject([StocksService], (service: StocksService) => {
    expect(service).toBeTruthy();
  }));
});
