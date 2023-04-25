import { SanitizeHtmlPipePipe } from './sanitize-html.pipe';

describe('SanitizeHtmlPipePipe', () => {
  it('create an instance', () => {
    const pipe = new SanitizeHtmlPipe();
    expect(pipe).toBeTruthy();
  });
});
