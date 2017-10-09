import { StateManageExamplePage } from './app.po';

describe('state-manage-example App', () => {
  let page: StateManageExamplePage;

  beforeEach(() => {
    page = new StateManageExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
