import { ReportappPage } from './app.po';

describe('reportapp App', () => {
  let page: ReportappPage;

  beforeEach(() => {
    page = new ReportappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
