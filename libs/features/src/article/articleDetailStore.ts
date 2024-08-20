import { IArticle, fetchArticleById } from '@rt-apps/data';
import { create } from 'zustand';

type ArticleDetailState = {
  article: IArticle | null;
};

type ArticleDetailAction = {
  fetchById: (id: string) => Promise<void>;
  clear: () => void;
};

export const useArticleDetailStore = create<ArticleDetailState & ArticleDetailAction>()((set) => ({
  article: null,
  fetchById: async (id) => {
    const article = await fetchArticleById(id);

    set({ article });
  },
  clear: () => {
    set({ article: null });
  },
}));
