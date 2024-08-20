import { useTheme } from '@rt-apps/theming';
import { useSkeletonAnimation } from './useSkeletonAnimation';
import { Animated, StyleProp, ViewStyle } from 'react-native';
import { FlexAlignment, FlexView } from '../common';

export const SkeletonPlayerProfile = () => {
  const { SPACING, APP_COLOR } = useTheme();

  const animatedValue = useSkeletonAnimation(600);

  const overlayColorInterpolation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [APP_COLOR.SKELETON_LIGHT, APP_COLOR.SKELETON_DARK],
  });

  const SkeletonLabel = () => (
    <Animated.View
      style={{
        backgroundColor: overlayColorInterpolation,
        width: '60%',
        height: 20,
      }}
    />
  );

  return (
    <FlexView direction="col">
      <FlexView
        direction="col"
        gap={SPACING.SM}
        padding={SPACING.SM}
        backgroundColor={APP_COLOR.OFF_WHITE}
      >
        <FlexView align={[FlexAlignment.SPACE_AROUND, FlexAlignment.ALIGN_START]}>
          <Label label={<SkeletonLabel />} style={{ width: '50%' }}>
            <Animated.View
              style={{
                backgroundColor: overlayColorInterpolation,
                width: '100%',
                height: 20,
              }}
            />
          </Label>
          <Label label={<SkeletonLabel />} style={{ width: '50%' }}>
            <Animated.View
              style={{
                backgroundColor: overlayColorInterpolation,
                width: '100%',
                height: 20,
              }}
            />
          </Label>
        </FlexView>

        <FlexView align={[FlexAlignment.SPACE_BETWEEN, FlexAlignment.JUSTIFY_START]}>
          <Label label={<SkeletonLabel />} style={{ width: '50%' }}>
            <Animated.View
              style={{
                backgroundColor: overlayColorInterpolation,
                width: '100%',
                height: 20,
              }}
            />
          </Label>
          <Label label={<SkeletonLabel />} style={{ width: '50%' }}>
            <Animated.View
              style={{
                backgroundColor: overlayColorInterpolation,
                width: '100%',
                height: 20,
              }}
            />
          </Label>
        </FlexView>

        <FlexView align={[FlexAlignment.SPACE_BETWEEN, FlexAlignment.JUSTIFY_START]}>
          <Label label={<SkeletonLabel />} style={{ width: '50%' }}>
            <Animated.View
              style={{
                backgroundColor: overlayColorInterpolation,
                width: '100%',
                height: 20,
              }}
            />
          </Label>
          <Label label={<SkeletonLabel />} style={{ width: '50%' }}>
            <Animated.View
              style={{
                backgroundColor: overlayColorInterpolation,
                width: '100%',
                height: 20,
              }}
            />
          </Label>
        </FlexView>

        <FlexView align={[FlexAlignment.SPACE_BETWEEN, FlexAlignment.JUSTIFY_START]}>
          <Label label={<SkeletonLabel />} style={{ width: '50%' }}>
            <Animated.View
              style={{
                backgroundColor: overlayColorInterpolation,
                width: '100%',
                height: 20,
              }}
            />
          </Label>
          <Label label={<SkeletonLabel />} style={{ width: '50%' }}>
            <Animated.View
              style={{
                backgroundColor: overlayColorInterpolation,
                width: '100%',
                height: 20,
              }}
            />
          </Label>
        </FlexView>
      </FlexView>
    </FlexView>
  );
};

const Label = ({
  label,
  children,
  style,
}: {
  label: React.ReactNode;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) => {
  const { SPACING } = useTheme();

  return (
    <FlexView direction="col" gap={SPACING.XS} style={style}>
      {label}

      {children}
    </FlexView>
  );
};
