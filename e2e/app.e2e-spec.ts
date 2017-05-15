import { CardGamePage } from './app.po';

describe('card-game App', () => {
  let page: CardGamePage;

  beforeEach(() => {
    page = new CardGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
