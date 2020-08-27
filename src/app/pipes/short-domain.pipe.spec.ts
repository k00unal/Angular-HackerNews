import { ShortDomainPipe } from './short-domain.pipe';

describe('ShortDomainPipe', () => {
  it('create an instance', () => {
    const pipe = new ShortDomainPipe();
    expect(pipe).toBeTruthy();
  });
  it('shortening url to domain', () => {
    const pipe = new ShortDomainPipe();
    const url = pipe.transform('https://www.google.com/1234');
    expect(url).toBe('google.com');
  });
});
