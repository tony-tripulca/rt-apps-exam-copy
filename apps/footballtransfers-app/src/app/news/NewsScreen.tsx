import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeArticleList, HomeFeaturedList } from '@rt-apps/features';
import { Layout } from '@ui-kitten/components';
import { NewsStackParamList } from './News';

type NewsScreenProps = NativeStackScreenProps<NewsStackParamList>;

export const NewsScreen = ({ navigation }: NewsScreenProps) => {
  return (
    <Layout style={{ flex: 1 }}>
      <HomeFeaturedList
        onFeaturedPress={(articleId) => navigation.navigate('ArticleDetailScreen', { articleId })}
      />

      <HomeArticleList
        onArticlePress={(articleId) => {
          navigation.navigate('ArticleDetailScreen', { articleId });
        }}
      />
    </Layout>
  );
};
