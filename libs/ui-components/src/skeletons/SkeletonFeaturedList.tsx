import { useTheme } from '@rt-apps/theming';
import { Animated, DimensionValue } from 'react-native';
import { FlexView } from '../common';
import { useSkeletonAnimation } from './useSkeletonAnimation';

export const SkeletonFeaturedList = ({ height }: { height?: DimensionValue }) => {
  const { APP_COLOR } = useTheme();
  const animatedValue = useSkeletonAnimation(600);

  const backgroundColorInterpolation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [APP_COLOR.SKELETON_LIGHT, APP_COLOR.SKELETON_DARK],
  });

  const overlayColorInterpolation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [APP_COLOR.SKELETON_OVERLAY_LIGHT, APP_COLOR.SKELETON_OVERLAY_DARK],
  });

  return (
    <FlexView height={height} padding={0}>
      <FlexView
        direction="col"
        gap={4}
        style={{
          position: 'absolute',
          width: 80,
          height: 68,
          top: 0,
          right: 0,
          padding: 8,
          zIndex: 1,
        }}
      >
        <Animated.View
          style={{
            backgroundColor: overlayColorInterpolation,
            width: '100%',
            height: 24,
          }}
        />
      </FlexView>
      <FlexView
        direction="col"
        gap={4}
        style={{
          position: 'absolute',
          width: '100%',
          height: 68,
          bottom: 0,
          padding: 8,
          zIndex: 1,
        }}
      >
        <Animated.View
          style={{
            backgroundColor: overlayColorInterpolation,
            width: '100%',
            height: 24,
          }}
        />
        <Animated.View
          style={{
            backgroundColor: overlayColorInterpolation,
            width: '100%',
            height: 24,
          }}
        />
      </FlexView>
      <Animated.View
        style={{ backgroundColor: backgroundColorInterpolation, width: '100%', height }}
      />
    </FlexView>
  );
};
