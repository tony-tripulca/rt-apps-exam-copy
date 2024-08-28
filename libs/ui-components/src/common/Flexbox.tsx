import {
  View,
  ViewStyle,
  StyleProp,
  StyleSheet,
  DimensionValue,
  TouchableOpacity,
} from 'react-native';

export enum Spacing {
  XXS = 2,
  XS = 4,
  SM = 8,
  MD = 16,
  LG = 24,
}

export enum FlexAlignment {
  ALIGN_START = 'alignStart',
  ALIGN_CENTER = 'alignCenter',
  ALIGN_END = 'alignEnd',
  JUSTIFY_START = 'justifyStart',
  JUSTIFY_CENTER = 'justifyCenter',
  JUSTFIY_END = 'justifyEnd',
  SPACE_AROUND = 'spaceAround',
  SPACE_BETWEEN = 'spaceBetween',
}

export type FlexDirection = 'row' | 'col';

interface FlexViewProps {
  children?: React.ReactNode;
  direction?: FlexDirection;
  align?: FlexAlignment[];
  width?: DimensionValue;
  height?: DimensionValue;
  padding?: Spacing | 0;
  margin?: Spacing | 0;
  gap?: number;
  backgroundColor?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export const FlexView = ({
  children,
  direction = 'row',
  align,
  width,
  height,
  padding = Spacing.XXS,
  margin = Spacing.XXS,
  gap,
  backgroundColor,
  onPress,
  style,
}: FlexViewProps) => {
  const combinedStyle = [
    styles[direction],
    align?.map((a) => styles[a]),
    { width, height, padding, margin, gap, backgroundColor },
    style,
  ];

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} style={[{ position: 'relative' }, combinedStyle]}>
        {children}
      </TouchableOpacity>
    );
  } else {
    return <View style={combinedStyle}>{children}</View>;
  }
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  col: {
    flexDirection: 'column',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
});
