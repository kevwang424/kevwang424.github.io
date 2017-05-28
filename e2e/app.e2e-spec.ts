import { Angular2HomepagePage } from './app.po';

describe('angular2-homepage App', function() {
  let page: Angular2HomepagePage;

  beforeEach(() => {
    page = new Angular2HomepagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
