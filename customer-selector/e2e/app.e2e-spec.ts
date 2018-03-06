import { CustomerSelectorPage } from './app.po';

describe('customer-selector App', () => {
  let page: CustomerSelectorPage;

  beforeEach(() => {
    page = new CustomerSelectorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
