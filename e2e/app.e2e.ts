import { Angular2Day4ExercisePage } from './app.po';

describe('angular2-day4-exercise App', function() {
  let page: Angular2Day4ExercisePage;

  beforeEach(() => {
    page = new Angular2Day4ExercisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-day4-exercise works!');
  });
});
