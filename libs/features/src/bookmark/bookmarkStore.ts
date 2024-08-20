import { create } from 'zustand';
import * as storage from './bookmarkStorage';

type BookmarkState = {
  bookmarks: string[];
};

type BookmarkAction = {
  hydrateBookmarks: () => Promise<void>;
  bookmarkArticle: (id: string) => Promise<void>;
  unbookmarkArticle: (id: string) => Promise<void>;
};

export const useBookmarkStore = create<BookmarkState & BookmarkAction>()((set) => ({
  bookmarks: [],
  hydrateBookmarks: async () => {
    const result = await storage.getBookmarksStorage();

    if (!result?.bookmarkedArticles) return;

    set({ bookmarks: result.bookmarkedArticles });
  },
  bookmarkArticle: async (id) => {
    const result = await storage.bookmarkArticle(id);

    if (!result?.bookmarkedArticles) return;

    set({ bookmarks: result.bookmarkedArticles });
  },
  unbookmarkArticle: async (id) => {
    const result = await storage.unbookmarkArticle(id);

    if (!result?.bookmarkedArticles) return;

    set({ bookmarks: result.bookmarkedArticles });
  },
}));
