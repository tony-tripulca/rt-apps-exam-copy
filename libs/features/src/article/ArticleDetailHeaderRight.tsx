import { Icon } from '@ui-kitten/components';
import { Pressable, Share } from 'react-native';
import { useBookmarkStore } from '../bookmark/bookmarkStore';

interface ArticleDetailHeaderRightProps {
  articleId: string;
}

export const ArticleDetailHeaderRight = ({ articleId }: ArticleDetailHeaderRightProps) => {
  const isBookmarked = useBookmarkStore((state) => state.bookmarks.includes(articleId));
  const bookmark = useBookmarkStore((state) => state.bookmarkArticle);
  const unbookmark = useBookmarkStore((state) => state.unbookmarkArticle);

  const handleSharePress = () => {
    Share.share({
      message: articleId.toString(),
    });
  };

  const handleBookmarkPress = () => {
    if (isBookmarked) {
      unbookmark(articleId);
    } else {
      bookmark(articleId);
    }
  };

  return (
    <>
      <Pressable onPress={handleBookmarkPress}>
        <Icon
          name={isBookmarked ? 'bookmark' : 'bookmark-outline'}
          style={{ height: 30, width: 30 }}
          fill="white"
        />
      </Pressable>
      <Pressable onPress={handleSharePress}>
        <Icon name="share-outline" style={{ height: 30, width: 30, marginLeft: 10 }} fill="white" />
      </Pressable>
    </>
  );
};
