import { AudigoPage } from './app.po';

describe('audigo App', () => {
  let page: AudigoPage;

  beforeEach(() => {
    page = new AudigoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
