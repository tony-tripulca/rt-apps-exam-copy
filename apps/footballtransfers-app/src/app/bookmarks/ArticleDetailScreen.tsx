import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Layout } from '@ui-kitten/components';

import { ArticleDetail } from '@rt-apps/features';
import { BookmarksStackParamList } from './Bookmarks';

type ArticleDetailScreenProps = NativeStackScreenProps<
  BookmarksStackParamList,
  'ArticleDetailScreen'
>;

export const ArticleDetailScreen = ({ route }: ArticleDetailScreenProps) => {
  return (
    <Layout style={{ flex: 1 }}>
      <ArticleDetail articleId={route.params.articleId} />
    </Layout>
  );
};
