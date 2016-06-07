export class Angular2Day4ExercisePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-day4-exercise-app h1')).getText();
  }
}
