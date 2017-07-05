import { Assignment1.4Page } from './app.po';

describe('assignment1.4 App', () => {
  let page: Assignment1.4Page;

  beforeEach(() => {
    page = new Assignment1.4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
