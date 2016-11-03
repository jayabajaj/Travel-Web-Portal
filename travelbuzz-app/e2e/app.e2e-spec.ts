import { TravelBuzzAppPage } from './app.po';

describe('travel-buzz-app App', function() {
  let page: TravelBuzzAppPage;

  beforeEach(() => {
    page = new TravelBuzzAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
