import { useTheme } from '@rt-apps/theming';
import { useSkeletonAnimation } from './useSkeletonAnimation';
import { FlexAlignment, FlexView } from '../common';
import { Animated } from 'react-native';
import { times } from 'lodash';

export const SkeletonArticleList = () => {
  return (
    <>
      {times(3, (i) => (
        <SkeletonArticleListItem key={i} />
      ))}
    </>
  );
};

export const SkeletonArticleListItem = () => {
  const { APP_COLOR, SPACING } = useTheme();
  const animatedValue = useSkeletonAnimation(600);

  const backgroundColorInterpolation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [APP_COLOR.SKELETON_DARK, APP_COLOR.SKELETON_LIGHT],
  });

  return (
    <FlexView padding={SPACING.XS} gap={8}>
      <Animated.View
        style={{
          backgroundColor: backgroundColorInterpolation,
          paddingVertical: 20,
          width: 75,
          height: 75,
        }}
      />
      <FlexView width="70%" direction="col" align={[FlexAlignment.ALIGN_START]} gap={4}>
        <Animated.View
          style={{ backgroundColor: backgroundColorInterpolation, width: '40%', height: 20 }}
        />
        <Animated.View
          style={{ backgroundColor: backgroundColorInterpolation, width: '100%', height: 46 }}
        />
      </FlexView>
    </FlexView>
  );
};
