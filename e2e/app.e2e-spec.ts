import { SibinProfilePage } from './app.po';

describe('sibin-profile App', () => {
  let page: SibinProfilePage;

  beforeEach(() => {
    page = new SibinProfilePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
