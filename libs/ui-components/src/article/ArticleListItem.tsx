import { IArticleListItem } from '@rt-apps/data';
import { Pressable } from 'react-native';
import { ArticleLabel } from './ArticleLabel';
import { FlexAlignment, FlexView, ImagePreview, Typography } from '../common';
import { useTheme } from '@rt-apps/theming';

interface ArticleListItemProps {
  article: IArticleListItem;
  onPress: () => void;
}

export const ArticleListItem = ({ article, onPress }: ArticleListItemProps) => {
  const { SPACING } = useTheme();

  // todo: use locale from i18n
  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(article.publish_date.date));

  return (
    <Pressable onPress={() => onPress()}>
      <FlexView padding={SPACING.XS} gap={8}>
        <ImagePreview uri={article.image.src} height={75} width={75} />
        <FlexView width="70%" direction="col" align={[FlexAlignment.ALIGN_START]} gap={4}>
          <FlexView align={[FlexAlignment.ALIGN_CENTER]} gap={8} padding={0}>
            {article.label ? <ArticleLabel data={article.label} /> : null}
            <Typography variant="caption">{formattedDate}</Typography>
          </FlexView>
          <Typography variant="body2">{article.title}</Typography>
        </FlexView>
      </FlexView>
    </Pressable>
  );
};
