import { Tmp3Page } from './app.po';

describe('tmp3 App', function() {
  let page: Tmp3Page;

  beforeEach(() => {
    page = new Tmp3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
