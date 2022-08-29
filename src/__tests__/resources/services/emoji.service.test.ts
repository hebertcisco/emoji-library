import { EmojiService } from '../../../index';

import type { EmojiService as EmojiServiceType } from '../../../index';

describe('EmojiService', () => {
    let emojiService: EmojiServiceType;
    let emoji_id: string;
    let emoji_title: string;

    beforeEach(() => {
        emojiService = new EmojiService();
        emoji_id = '5ff7f6536ea31b02c0a37893';
        emoji_title = 'Grimacing';
    });
    describe('getEmojiList', () => {
        it('should have at least one emoji', () => {
            expect(emojiService.getEmojiList().length).toBeGreaterThan(0);
        }),
            it('should have at least one emoji with a title', () => {
                expect(emojiService.getEmojiList().find((e) => e.title)).toBeDefined();
            });
        it('should have at least one emoji with a symbol', () => {
            expect(emojiService.getEmojiList().find((e) => e.symbol)).toBeDefined();
        });
        it('should have at least one emoji with a keywords', () => {
            expect(emojiService.getEmojiList().find((e) => e.keywords)).toBeDefined();
        });
        it('should have at least one emoji with a _id', () => {
            expect(emojiService.getEmojiList().find((e) => e._id)).toBeDefined();
        });
    });
    describe('getEmojiById', () => {
        it('should have at least one emoji', () => {
            expect(emojiService.getEmojiById(emoji_id).length).toBeGreaterThan(0);
        });
        it('should have at least one emoji with a title', () => {
            expect(emojiService.getEmojiById(emoji_id).find((e) => e.title)).toBeDefined();
        });
        it('should have at least one emoji with a symbol', () => {
            expect(emojiService.getEmojiById(emoji_id).find((e) => e.symbol)).toBeDefined();
        });
        it('should have at least one emoji with a keywords', () => {
            expect(emojiService.getEmojiById(emoji_id).find((e) => e.keywords)).toBeDefined();
        });
        it('should have at least one emoji with a _id', () => {
            expect(emojiService.getEmojiById(emoji_id).find((e) => e._id)).toBeDefined();
        });
    });
    describe('getEmojiByTitle', () => {
        it('should have at least one emoji', () => {
            expect(emojiService.getEmojiByTitle(emoji_title).length).toBeGreaterThan(0);
        });
        it('should have at least one emoji with a title', () => {
            expect(emojiService.getEmojiByTitle(emoji_title).find((e) => e.title)).toBeDefined();
        });
        it('should have at least one emoji with a symbol', () => {
            expect(emojiService.getEmojiByTitle(emoji_title).find((e) => e.symbol)).toBeDefined();
        });
        it('should have at least one emoji with a keywords', () => {
            expect(emojiService.getEmojiByTitle(emoji_title).find((e) => e.keywords)).toBeDefined();
        });
        it('should have at least one emoji with a _id', () => {
            expect(emojiService.getEmojiByTitle(emoji_title).find((e) => e._id)).toBeDefined();
        });
    });
    describe('getEmojiListByKeyword', () => {
        it('should have at least one emoji', () => {
            expect(emojiService.getEmojiListByKeyword(emoji_title).length).toBeGreaterThan(0);
        });
        it('should have at least one emoji with a title', () => {
            expect(emojiService.getEmojiListByKeyword(emoji_title).find((e) => e.title)).toBeDefined();
        });
        it('should have at least one emoji with a symbol', () => {
            expect(emojiService.getEmojiListByKeyword(emoji_title).find((e) => e.symbol)).toBeDefined();
        });
        it('should have at least one emoji with a keywords', () => {
            expect(emojiService.getEmojiListByKeyword(emoji_title).find((e) => e.keywords)).toBeDefined();
        });
        it('should have at least one emoji with a _id', () => {
            expect(emojiService.getEmojiListByKeyword(emoji_title).find((e) => e._id)).toBeDefined();
        });
    });
});