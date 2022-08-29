import { emoji_list } from '../../infra/data';
import type { EmojiListType } from '../../shared/types';

export class EmojiService {
  public getEmojiList(): EmojiListType {
    return emoji_list;
  }
  public getEmojiById(_id: string): EmojiListType | [] {
    const result = emoji_list.filter((item) => item._id.includes(_id)).map((item) => item);
    return result.length > 0 ? result : [];
  }
  public getEmojiByTitle(title: string): EmojiListType | [] {
    const result = emoji_list.filter((item) => item.title.includes(title)).map((item) => item);
    return result.length > 0 ? result : [];
  }
  public getEmojiListByKeyword(keyword: string): EmojiListType | [] {
    const result = emoji_list
      .filter((item) => item.keywords.includes(String(keyword).toLowerCase()))
      .map((item) => item);
    return result.length > 0 ? result : [];
  }
}
export default new EmojiService();
