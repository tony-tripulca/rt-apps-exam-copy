import { useTheme } from '@rt-apps/theming';
import { useWindowDimensions } from 'react-native';
import RenderHTML, { HTMLSource } from 'react-native-render-html';

interface ArticleRendererProps {
  htmlString: string;
  padding?: number;
}

export const ArticleRenderer = ({ htmlString, padding }: ArticleRendererProps) => {
  const { FONT_COLOR, FONT_SIZE } = useTheme();
  const { width } = useWindowDimensions();

  const contentWidth = padding ? width - padding : width;

  const parserSource: HTMLSource = {
    html: htmlString,
  };

  return (
    <RenderHTML
      source={parserSource}
      contentWidth={contentWidth}
      tagsStyles={{
        // TODO: replace with font theme
        p: { color: FONT_COLOR.PRIMARY, fontSize: FONT_SIZE.LG },
      }}
    />
  );
};
