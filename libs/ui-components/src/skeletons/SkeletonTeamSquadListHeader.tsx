import { useTheme } from '@rt-apps/theming';
import { useSkeletonAnimation } from './useSkeletonAnimation';
import { FlexView, TableHeader } from '../common';
import { Animated } from 'react-native';

export const SkeletonTeamSquadListHeader = () => {
  const { APP_COLOR } = useTheme();
  const animatedValue = useSkeletonAnimation(600);

  const overlayColorInterpolation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [APP_COLOR.SKELETON_LIGHT, APP_COLOR.SKELETON_DARK],
  });

  return (
    <TableHeader
      headers={[
        {
          name: (
            <FlexView>
              <Animated.View
                style={{
                  backgroundColor: overlayColorInterpolation,
                  width: 100,
                  height: 20,
                }}
              />
            </FlexView>
          ),
        },
      ]}
    />
  );
};
