import {
  ArticleLabel,
  ArticleRenderer,
  FlexAlignment,
  FlexView,
  ImagePreview,
  Typography,
} from '@rt-apps/ui-components';
import { useEffect } from 'react';
import { ActivityIndicator, DimensionValue, ScrollView } from 'react-native';
import { useArticleDetailStore } from './articleDetailStore';
import { useTheme } from '@rt-apps/theming';

interface ArticleDetailProps {
  articleId: string;
}

export const ArticleDetail = ({ articleId }: ArticleDetailProps) => {
  const { APP_COLOR, FONT_COLOR, SPACING } = useTheme();

  const article = useArticleDetailStore((state) => state.article);
  const clear = useArticleDetailStore((state) => state.clear);
  const fetchArticle = useArticleDetailStore((state) => state.fetchById);

  useEffect(() => {
    fetchArticle(articleId);

    return () => {
      clear();
    };
  }, [articleId, clear, fetchArticle]);

  if (!article) {
    return (
      <FlexView height="100%" align={[FlexAlignment.JUSTIFY_CENTER]}>
        <ActivityIndicator />
      </FlexView>
    );
  }

  const date = new Date(article.publish_date.date).toLocaleString();

  /**
   * The dimensions of the image preview are hardcoded for now,
   * the image dimensions on the response are too big.
   */
  const articleImagePreviewDimensions: { height: DimensionValue; width: DimensionValue } = {
    height: 250, // article.image.height,
    width: '100%', // article.image.width,
  };

  const authorImagePreviewDimensions = {
    height: article.author.image.height / 2,
    width: article.author.image.width / 2,
  };

  return (
    <ScrollView>
      <FlexView direction="col" width="100%" padding={SPACING.MD}>
        {article.label ? <ArticleLabel data={article.label} /> : null}

        <FlexView direction="col" gap={SPACING.SM}>
          <Typography variant="h1">{article.title}</Typography>
          <FlexView align={[FlexAlignment.ALIGN_CENTER]} gap={SPACING.SM}>
            <ImagePreview
              uri={article.author.image.src}
              alt={article.author.image.alt}
              height={authorImagePreviewDimensions.height}
              width={authorImagePreviewDimensions.width}
              rounded
            />
            <FlexView direction="col" gap={SPACING.XS}>
              <Typography color={FONT_COLOR.HIGHLIGHT}>{article.author.name}</Typography>
              <Typography variant="caption">{date}</Typography>
            </FlexView>
          </FlexView>
        </FlexView>
      </FlexView>

      <ImagePreview
        uri={article.image.src}
        alt="Article image"
        width={articleImagePreviewDimensions.width}
        height={articleImagePreviewDimensions.height}
      />

      <FlexView padding={SPACING.SM} backgroundColor={APP_COLOR.OFF_WHITE}>
        <Typography variant="caption">
          {article.image.caption} {article.image.copyright}
        </Typography>
      </FlexView>

      <FlexView direction="col" padding={SPACING.MD}>
        <ArticleRenderer htmlString={article.content} />
      </FlexView>
    </ScrollView>
  );
};
