import { DateAgoPipe } from './date-ago.pipe';

describe('DateAgoPipe', () => {
  it('create an instance', () => {
    const pipe = new DateAgoPipe();
    expect(pipe).toBeTruthy();
  });
  it('shortening fullDateTime to timeAgo', () => {
    const pipe = new DateAgoPipe();
    const date = pipe.transform('2015-07-03T00:11:19.000Z');
    expect(date).toBe('5 years ago');
  });
});
