import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ArticleDetail } from '@rt-apps/features';
import { Layout } from '@ui-kitten/components';
import { SearchStackParamList } from './Search';

type ArticleDetailScreenProps = NativeStackScreenProps<SearchStackParamList, 'ArticleDetailScreen'>;

export const ArticleDetailScreen = ({ route }: ArticleDetailScreenProps) => {
  return (
    <Layout style={{ flex: 1 }}>
      <ArticleDetail articleId={route.params.articleId} />
    </Layout>
  );
};
