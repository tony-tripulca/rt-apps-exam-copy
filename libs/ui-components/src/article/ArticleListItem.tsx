import { IArticleListItem } from '@rt-apps/data';
import { Pressable, StyleSheet } from 'react-native';
import { ArticleLabel } from './ArticleLabel';
import { FlexAlignment, FlexView, ImagePreview, Typography } from '../common';
import { useTheme } from '@rt-apps/theming';

interface ArticleListItemProps {
  article: IArticleListItem;
  onPress: () => void;
}

export const ArticleListItem = ({ article, onPress }: ArticleListItemProps) => {
  const { SPACING } = useTheme();

  const styles = StyleSheet.create({
    list: {
      marginTop: 4,
      marginBottom: 4,
      backgroundColor: 'rgba(0,0,0,0.05)',
      borderRadius: 8,
    },
    listImage: {
      borderTopLeftRadius: 8,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 8,
    },
  });

  // todo: use locale from i18n
  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(article.publish_date.date));

  return (
    <Pressable onPress={() => onPress()}>
      <FlexView margin={SPACING.LG} padding={0} gap={8} style={styles.list}>
        <ImagePreview uri={article.image.src} height={100} width={100} style={styles.listImage} />
        <FlexView width="70%" direction="col" align={[FlexAlignment.ALIGN_START]} gap={4}>
          <FlexView align={[FlexAlignment.ALIGN_CENTER]} gap={8} padding={0}>
            {article.label ? <ArticleLabel data={article.label} /> : null}
            <Typography variant="caption">{formattedDate}</Typography>
          </FlexView>
          <Typography variant="body2" width="90%">
            {article.title}
          </Typography>
        </FlexView>
      </FlexView>
    </Pressable>
  );
};
