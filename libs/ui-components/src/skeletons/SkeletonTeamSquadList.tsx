import { useTheme } from '@rt-apps/theming';
import { useSkeletonAnimation } from './useSkeletonAnimation';
import { FlexAlignment, FlexView, TableRow } from '../common';
import { Animated } from 'react-native';
import { times } from 'lodash';

export const SkeletonTeamSquadList = () => {
  return (
    <>
      {times(3, (i) => (
        <SkeletonTableRow key={i} index={i} />
      ))}
    </>
  );
};

const SkeletonTableRow = ({ index }: { index: number }) => {
  const { SPACING, APP_COLOR } = useTheme();

  const animatedValue = useSkeletonAnimation(600);

  const overlayColorInterpolation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [APP_COLOR.SKELETON_LIGHT, APP_COLOR.SKELETON_DARK],
  });

  return (
    <TableRow align={[FlexAlignment.ALIGN_CENTER]} isOddRow={index % 2 === 0}>
      <FlexView width="65%" height="100%" align={[FlexAlignment.ALIGN_CENTER]} gap={SPACING.XS}>
        <FlexView direction="col" align={[FlexAlignment.ALIGN_CENTER]} gap={SPACING.XS}>
          <Animated.View
            style={{
              backgroundColor: overlayColorInterpolation,
              width: 40,
              height: 12,
            }}
          />
          <Animated.View
            style={{
              backgroundColor: overlayColorInterpolation,
              width: 40,
              height: 12,
            }}
          />
        </FlexView>

        <FlexView align={[FlexAlignment.ALIGN_CENTER]} gap={SPACING.XS}>
          <Animated.View
            style={{
              backgroundColor: overlayColorInterpolation,
              width: 50,
              height: 50,
              borderRadius: 100,
            }}
          />
          <FlexView direction="col" align={[FlexAlignment.ALIGN_CENTER]} gap={SPACING.XS}>
            <Animated.View
              style={{
                backgroundColor: overlayColorInterpolation,
                width: 120,
                height: 12,
              }}
            />
            <Animated.View
              style={{
                backgroundColor: overlayColorInterpolation,
                width: 120,
                height: 12,
              }}
            />
          </FlexView>
        </FlexView>
      </FlexView>
      <FlexView width="35%" align={[FlexAlignment.ALIGN_CENTER, FlexAlignment.SPACE_BETWEEN]}>
        <FlexView align={[FlexAlignment.JUSTFIY_END]}>
          <Animated.View
            style={{
              backgroundColor: overlayColorInterpolation,
              width: 30,
              height: 20,
            }}
          />
        </FlexView>

        <FlexView align={[FlexAlignment.JUSTFIY_END]}>
          <Animated.View
            style={{
              backgroundColor: overlayColorInterpolation,
              width: 80,
              height: 30,
            }}
          />
        </FlexView>
      </FlexView>
    </TableRow>
  );
};
