import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BookmarkList } from '@rt-apps/features';
import { Layout } from '@ui-kitten/components';
import { BookmarksStackParamList } from './Bookmarks';

type BookmarksScreenProps = NativeStackScreenProps<BookmarksStackParamList>;

export const BookmarksScreen = ({ navigation }: BookmarksScreenProps) => {
  return (
    <Layout style={{ flex: 1 }}>
      <BookmarkList
        onArticlePress={(articleId) => {
          navigation.navigate('ArticleDetailScreen', { articleId });
        }}
      />
    </Layout>
  );
};
