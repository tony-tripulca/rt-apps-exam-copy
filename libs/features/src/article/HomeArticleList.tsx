import { ArticleList, SkeletonArticleList } from '@rt-apps/ui-components';
import { useCallback, useEffect } from 'react';
import { RefreshControl } from 'react-native';
import { useArticleListStore } from './articleListStore';

interface HomeArticleListProps {
  onArticlePress: (id: string) => void;
}

export const HomeArticleList = ({ onArticlePress }: HomeArticleListProps) => {
  const articles = useArticleListStore((state) => state.articles);
  const clearList = useArticleListStore((state) => state.clear);
  const fetch = useArticleListStore((state) => state.fetchList);
  const currentPage = useArticleListStore((state) => state.page);
  const totalPages = useArticleListStore((state) => state.pages);

  const refreshing = useArticleListStore((state) => state.refreshing);

  useEffect(() => {
    clearList();
    fetch({ page: 1 });
  }, [clearList, fetch]);

  const onRefresh = useCallback(() => {
    fetch({ page: 1, isRefresh: true });
  }, []);

  const onEndReached = () => {
    if (currentPage === totalPages) return;
    fetch({ page: currentPage + 1 });
  };

  // will always be an empty array initially,
  // but will always have data when fetch is completed.
  if (articles.length === 0) {
    return <SkeletonArticleList />;
  }

  return (
    <ArticleList
      articles={articles.slice(3)}
      onArticlePress={onArticlePress}
      onEndReached={onEndReached}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    />
  );
};
