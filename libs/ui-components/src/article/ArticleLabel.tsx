import { IArticleLabel } from '@rt-apps/data';
import { FlexAlignment, FlexView, Typography } from '../common';
import { View } from 'react-native';

interface ArticleLabelProps {
  data: IArticleLabel;
}

export const ArticleLabel = ({
  data: { title, background_color, font_color },
}: ArticleLabelProps) => {
  return (
    <FlexView align={[FlexAlignment.ALIGN_CENTER]}>
      <FlexView
        backgroundColor={background_color}
        style={{
          paddingVertical: 4,
          paddingHorizontal: 8,
        }}
      >
        <Typography variant="tag" color={font_color}>
          {title}
        </Typography>
      </FlexView>
      <Arrowhead color={background_color} />
    </FlexView>
  );
};

const Arrowhead = ({ color }: { color: string }) => (
  <View
    style={{
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderTopWidth: 10,
      borderRightWidth: 0,
      borderBottomWidth: 10,
      borderLeftWidth: 10,
      borderTopColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: 'transparent',
      borderLeftColor: color,
    }}
  />
);
