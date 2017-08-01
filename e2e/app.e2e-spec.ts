import { CassachatPage } from './app.po';

describe('cassachat App', () => {
  let page: CassachatPage;

  beforeEach(() => {
    page = new CassachatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
