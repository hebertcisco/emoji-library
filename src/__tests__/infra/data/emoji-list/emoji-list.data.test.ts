import {
  emoji_list,
  emoji_list_empty,
  emoji_list_error,
} from '../../../../infra/data/emoji-list/mock/emoji-list.data.mock';

describe('emoji_list', () => {
  it('should return a list of emoji', () => {
    expect(emoji_list).toHaveLength(1);
  });
  it('should return an empty list', () => {
    expect(emoji_list_empty).toHaveLength(0);
  });
  it('should return an error', () => {
    expect(emoji_list_error).toBeInstanceOf(Error);
  });
});
