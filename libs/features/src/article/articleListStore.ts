import { IArticleListItem, fetchArticles } from '@rt-apps/data';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type ArticleListState = {
  articles: IArticleListItem[];
  page: number;
  pages: number;
  refreshing: boolean;
};

type ArticleListAction = {
  fetchList: (params: { page: number; ids?: string[]; isRefresh?: boolean }) => Promise<void>;
  clear: () => void;
};

const initialState: ArticleListState = {
  articles: [],
  page: 0,
  pages: 0,
  refreshing: false,
};

export const useArticleListStore = create<ArticleListState & ArticleListAction>()(
  immer((set, get) => ({
    ...initialState,
    fetchList: async ({ page, ids, isRefresh }) => {
      if (isRefresh) {
        set((state) => {
          state.refreshing = true;
        });
      }

      const data = await fetchArticles({ page, ids }); // todo: add ids param (for bookmarks)

      set((state) => {
        state.articles = isRefresh
          ? data.articles.items
          : [...state.articles, ...data.articles.items];

        state.page = data.page;
        state.pages = data.articles.pages;
        state.refreshing = false;
      });
    },
    clear: () => set(initialState),
  }))
);
