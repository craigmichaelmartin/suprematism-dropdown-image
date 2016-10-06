import { SuprematismDropdownImagePage } from './app.po';

describe('suprematism-dropdown-image App', function() {
  let page: SuprematismDropdownImagePage;

  beforeEach(() => {
    page = new SuprematismDropdownImagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
