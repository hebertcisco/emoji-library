import { emoji_list } from '../index';
import type { EmojiListType } from '../index';

describe('emoji', () => {
  let emojis: EmojiListType;

  beforeEach(() => {
    emojis = emoji_list;
  });
  describe('emoji_list', () => {
    it('should have at least one emoji', () => {
      expect(emojis.length).toBeGreaterThan(0);
    });
    it('should have at least one emoji with a title', () => {
      expect(emojis.find((e) => e.title)).toBeDefined();
    });
    it('should have at least one emoji with a symbol', () => {
      expect(emojis.find((e) => e.symbol)).toBeDefined();
    });
    it('should have at least one emoji with a keywords', () => {
      expect(emojis.find((e) => e.keywords)).toBeDefined();
    });
  });
});
