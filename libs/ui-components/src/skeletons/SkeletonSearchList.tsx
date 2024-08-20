import { useTheme } from '@rt-apps/theming';
import { useSkeletonAnimation } from './useSkeletonAnimation';
import { FlexAlignment, FlexView } from '../common';
import { Animated } from 'react-native';
import { times } from 'lodash';

export const SkeletonSearchList = () => {
  return (
    <>
      {times(3, (i) => (
        <SkeletonSearchListItem key={i} />
      ))}
    </>
  );
};

const SkeletonSearchListItem = () => {
  const { APP_COLOR, SPACING } = useTheme();
  const animatedValue = useSkeletonAnimation(600);

  const backgroundColorInterpolation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [APP_COLOR.SKELETON_DARK, APP_COLOR.SKELETON_LIGHT],
  });

  return (
    <FlexView
      width="100%"
      align={[FlexAlignment.ALIGN_CENTER]}
      padding={SPACING.XS}
      gap={8}
      style={{ borderBottomWidth: 1, borderColor: APP_COLOR.BORDER }}
    >
      <Animated.View
        style={{
          backgroundColor: backgroundColorInterpolation,
          paddingVertical: 20,
          borderRadius: 100,
          width: 60,
          height: 60,
        }}
      />
      <FlexView width="50%" direction="col" align={[FlexAlignment.ALIGN_START]} gap={4}>
        <Animated.View
          style={{ backgroundColor: backgroundColorInterpolation, width: '100%', height: 20 }}
        />
        <Animated.View
          style={{ backgroundColor: backgroundColorInterpolation, width: '100%', height: 20 }}
        />
      </FlexView>
      <Animated.View
        style={{
          backgroundColor: backgroundColorInterpolation,
          width: '30%',
          height: 36,
        }}
      />
    </FlexView>
  );
};
