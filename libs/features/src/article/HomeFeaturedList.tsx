import {
  ArticleLabel,
  Carousel,
  FlexAlignment,
  FlexView,
  Spacing,
  SkeletonFeaturedList,
  Typography,
} from '@rt-apps/ui-components';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useArticleListStore } from './articleListStore';

interface HomeFeaturedListProps {
  onFeaturedPress: (id: string) => void;
}

const styles = StyleSheet.create({
  gradient: {
    position: 'absolute',
    width: '100%',
    height: '60%',
    bottom: 0,
  },
  title: {
    position: 'absolute',
    padding: Spacing.SM,
    bottom: 0,
  },
});

export const HomeFeaturedList = ({ onFeaturedPress }: HomeFeaturedListProps) => {
  const articles = useArticleListStore((state) => state.articles);

  // todo: use locale from i18n
  const dateFormatter = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  if (!articles.length) {
    return <SkeletonFeaturedList height={260} />;
  }

  const featuredList = articles.slice(0, 3);

  const carouselImages = featuredList.map((article) => ({
    id: article.id,
    src: article.image.src,
    alt: article.image.alt,
    children: (
      <LinearGradient colors={['transparent', 'black']} style={styles.gradient}>
        <FlexView direction="col" align={[FlexAlignment.ALIGN_START]} gap={4} style={styles.title}>
          <FlexView align={[FlexAlignment.ALIGN_CENTER]} gap={8} padding={0}>
            {article.label && <ArticleLabel data={article.label} />}
            <Typography variant="caption" color="#fff">
              {dateFormatter.format(new Date(article.publish_date.date))}
            </Typography>
          </FlexView>
          <Typography color="#fff" variant="h3">
            {article.title}
          </Typography>
        </FlexView>
      </LinearGradient>
    ),
  }));

  return (
    <View style={{ marginBottom: 10 }}>
      <Carousel images={carouselImages} onPress={onFeaturedPress} />
    </View>
  );
};
