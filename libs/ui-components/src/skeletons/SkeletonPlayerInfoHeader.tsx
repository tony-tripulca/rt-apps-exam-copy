import { useTheme } from '@rt-apps/theming';
import { Animated, DimensionValue } from 'react-native';
import { useSkeletonAnimation } from './useSkeletonAnimation';
import { FlexAlignment, FlexView } from '../common';

export const SkeletonPlayerInfoHeader = ({ height }: { height: DimensionValue }) => {
  const { APP_COLOR, SPACING } = useTheme();
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
    <FlexView direction="col" align={[FlexAlignment.ALIGN_CENTER]} height={height} padding={0}>
      <FlexView
        direction="col"
        align={[FlexAlignment.ALIGN_CENTER]}
        padding={SPACING.MD}
        height={height}
        width={300}
      >
        <FlexView align={[FlexAlignment.ALIGN_CENTER]} gap={SPACING.XS}>
          <Animated.View
            style={{
              backgroundColor: overlayColorInterpolation,
              borderRadius: 100,
              width: 50,
              height: 50,
            }}
          />
          <Animated.View
            style={{
              backgroundColor: overlayColorInterpolation,
              width: '80%',
              height: 32,
            }}
          />
        </FlexView>
        <Animated.View
          style={{
            backgroundColor: overlayColorInterpolation,
            width: '70%',
            height: 20,
            marginTop: SPACING.XS,
          }}
        />
        <Animated.View
          style={{
            backgroundColor: overlayColorInterpolation,
            width: '40%',
            height: 40,
            marginTop: SPACING.XS,
          }}
        />
      </FlexView>
      <Animated.View
        style={{
          position: 'absolute',
          backgroundColor: backgroundColorInterpolation,
          width: '100%',
          height,
          zIndex: -1,
        }}
      />
    </FlexView>
  );
};
