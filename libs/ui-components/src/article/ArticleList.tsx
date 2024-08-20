import { IArticleListItem } from '@rt-apps/data';
import { ActivityIndicator, FlatList, RefreshControlProps } from 'react-native';
import { ArticleListItem } from './ArticleListItem';

interface ArticleListProps {
  articles: IArticleListItem[];
  onArticlePress: (id: string) => void;
  onEndReached: () => void;
  refreshControl?: React.ReactElement<RefreshControlProps>;
  showListFooter?: boolean;
}

// the entire component will be rerendered since the articles prop will change
// this might have an impact on performance, when there is more data this should be profiled.
export const ArticleList = ({
  articles,
  onArticlePress,
  onEndReached,
  refreshControl,
  showListFooter = true,
}: ArticleListProps) => {
  return (
    <FlatList
      data={articles}
      keyExtractor={(item, i) => item.id}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      ListFooterComponent={() => showListFooter && <ActivityIndicator />}
      ListFooterComponentStyle={showListFooter && { padding: 20 }}
      refreshControl={refreshControl}
      renderItem={({ item }) => (
        <ArticleListItem article={item} onPress={() => onArticlePress(item.id)} />
      )}
    />
  );
};
