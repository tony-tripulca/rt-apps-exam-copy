import { useTheme } from '@rt-apps/theming';
import { useSkeletonAnimation } from './useSkeletonAnimation';
import { FlexAlignment, FlexView, TableRow } from '../common';
import { Animated } from 'react-native';
import { times } from 'lodash';

export const SkeletonTransferHistory = () => {
  const { SPACING, APP_COLOR } = useTheme();

  const animatedValue = useSkeletonAnimation(600);

  const overlayColorInterpolation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [APP_COLOR.SKELETON_LIGHT, APP_COLOR.SKELETON_DARK],
  });

  const SkeletonTableRow = ({ index }: { index: number }) => (
    <TableRow
      align={[FlexAlignment.ALIGN_CENTER, FlexAlignment.SPACE_BETWEEN]}
      isOddRow={index % 2 === 0}
      style={{ padding: SPACING.SM }}
    >
      <FlexView align={[FlexAlignment.ALIGN_CENTER]} gap={SPACING.SM}>
        <Animated.View
          style={{
            backgroundColor: overlayColorInterpolation,
            width: 40,
            height: 40,
            borderRadius: 100,
          }}
        />
        <FlexView direction="col" gap={SPACING.XS}>
          <Animated.View
            style={{
              backgroundColor: overlayColorInterpolation,
              width: 200,
              height: 12,
            }}
          />
          <Animated.View
            style={{
              backgroundColor: overlayColorInterpolation,
              width: 200,
              height: 20,
            }}
          />
        </FlexView>
      </FlexView>
      <Animated.View
        style={{
          backgroundColor: overlayColorInterpolation,
          width: 100,
          height: 28,
        }}
      />
    </TableRow>
  );

  return (
    <>
      {times(3, (i) => (
        <SkeletonTableRow key={i} index={i} />
      ))}
    </>
  );
};
