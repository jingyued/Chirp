import { TruncateAvatarPipe } from './truncate-avatar.pipe';

describe('TruncateAvatarPipe', () => {
  it('create an instance', () => {
    const pipe = new TruncateAvatarPipe();
    expect(pipe).toBeTruthy();
  });
});
