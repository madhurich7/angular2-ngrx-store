import { Angular2ObsEggPage } from './app.po';

describe('angular2-obs-egg App', function() {
  let page: Angular2ObsEggPage;

  beforeEach(() => {
    page = new Angular2ObsEggPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
