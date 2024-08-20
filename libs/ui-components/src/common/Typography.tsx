import { FontWeight, useTheme } from '@rt-apps/theming';
import React from 'react';
import { DimensionValue, Dimensions, StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

export type FontVariant = 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'caption' | 'th' | 'tag';

const MOBILE_SCREEN_WIDTH = 320;
const screenWidth = Dimensions.get('window').width;

interface TypographyProps {
  variant?: FontVariant;
  children: React.ReactNode;
  color?: string;
  weight?: keyof FontWeight;
  width?: DimensionValue;
  align?: 'left' | 'center' | 'right';
  style?: StyleProp<TextStyle>;
}

export const Typography = ({
  variant = 'body1',
  children,
  color,
  weight,
  width,
  align,
  style,
}: TypographyProps) => {
  const { FONT_SIZE, FONT_COLOR, FONT_WEIGHT } = useTheme();

  const styles = StyleSheet.create({
    h1: {
      fontSize: FONT_SIZE.XL,
      color: FONT_COLOR.PRIMARY,
      fontWeight: FONT_WEIGHT.BOLD,
    },
    h2: {
      fontSize: FONT_SIZE.LG,
      color: FONT_COLOR.PRIMARY,
      fontWeight: FONT_WEIGHT.BOLD,
    },
    h3: {
      fontSize: FONT_SIZE.MD,
      color: FONT_COLOR.PRIMARY,
      fontWeight: FONT_WEIGHT.BOLD,
    },
    body1: {
      fontSize: screenWidth > MOBILE_SCREEN_WIDTH ? FONT_SIZE.SM : FONT_SIZE.XS,
      color: FONT_COLOR.PRIMARY,
      fontWeight: FONT_WEIGHT.REGULAR,
    },
    body2: {
      fontSize: screenWidth > MOBILE_SCREEN_WIDTH ? FONT_SIZE.SM : FONT_SIZE.XS,
      color: FONT_COLOR.PRIMARY,
      fontWeight: FONT_WEIGHT.BOLD,
    },
    caption: {
      fontSize: screenWidth > MOBILE_SCREEN_WIDTH ? FONT_SIZE.XS : FONT_SIZE.XXS,
      color: FONT_COLOR.SECONDARY,
      fontWeight: FONT_WEIGHT.LIGHT,
    },
    th: {
      fontSize: screenWidth > MOBILE_SCREEN_WIDTH ? FONT_SIZE.XS : FONT_SIZE.XXS,
      color: FONT_COLOR.TERTIARY,
      fontWeight: FONT_WEIGHT.BOLD,
    },
    tag: {
      fontSize: FONT_SIZE.XXS,
      color: FONT_COLOR.PRIMARY,
      fontWeight: FONT_WEIGHT.BOLD,
      textTransform: 'uppercase',
      letterSpacing: 1,
    },
  });

  const colorValue = color ? { color } : {};
  const weightValue = weight ? { fontWeight: FONT_WEIGHT[weight] } : {};
  const widthValue = width ? { width } : {};
  const alignValue = align ? { textAlign: align } : {};

  const textStyle = [styles[variant], colorValue, weightValue, widthValue, alignValue, style];

  return <Text style={textStyle}>{children}</Text>;
};
