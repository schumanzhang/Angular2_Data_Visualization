import { RichListPage } from './app.po';

describe('rich-list App', () => {
  let page: RichListPage;

  beforeEach(() => {
    page = new RichListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
