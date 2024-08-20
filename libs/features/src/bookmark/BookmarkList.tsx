import { ArticleList, SkeletonArticleList } from '@rt-apps/ui-components';
import { Text } from '@ui-kitten/components';
import { useEffect } from 'react';
import { useArticleListStore } from '../article';
import { useBookmarkStore } from './bookmarkStore';

interface BookmarkListProps {
  onArticlePress: (id: string) => void;
}

export const BookmarkList = ({ onArticlePress }: BookmarkListProps) => {
  const bookmarks = useBookmarkStore((state) => state.bookmarks);

  const fetch = useArticleListStore((state) => state.fetchList);
  const clearList = useArticleListStore((state) => state.clear);
  const articles = useArticleListStore((state) => state.articles);
  const currentPage = useArticleListStore((state) => state.page);
  const totalPages = useArticleListStore((state) => state.pages);

  const loading = useArticleListStore((state) => state.refreshing);

  useEffect(() => {
    clearList();
    fetch({
      ids: bookmarks,
      page: 1,
      isRefresh: true, // initial load is a refresh. used to show loading state
    });
  }, [bookmarks, clearList, fetch]);

  const onEndReached = () => {
    if (currentPage === totalPages) return;
    fetch({ ids: bookmarks, page: currentPage + 1 });
  };

  // empty bookmarks array is a valid state
  // using refreshing state to track initial load, since no pull to refresh is implemented
  if (loading) {
    return <SkeletonArticleList />;
  }

  if (bookmarks.length === 0) {
    return <Text>No bookmarks</Text>;
  }

  return (
    <ArticleList
      articles={articles}
      onArticlePress={onArticlePress}
      onEndReached={onEndReached}
      showListFooter={currentPage !== totalPages}
    />
  );
};
