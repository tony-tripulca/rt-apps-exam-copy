import { TextStyle } from 'react-native';

export interface Spacing {
  XXS: number;
  XS: number;
  SM: number;
  MD: number;
  LG: number;
}

export interface FontSize {
  XXL: number;
  XL: number;
  LG: number;
  MD: number;
  SM: number;
  XS: number;
  XXS: number;
}

export interface AppColor {
  THEME: string;
  THEME_DARK: string;
  BACKGROUND: string;
  BORDER: string;
  OFF_WHITE: string;
  WHITE: string;
  BLACK: string;
  SKELETON_LIGHT: string;
  SKELETON_DARK: string;
  SKELETON_BACKGROUND_LIGHT: string;
  SKELETON_BACKGROUND_DARK: string;
  SKELETON_OVERLAY_LIGHT: string;
  SKELETON_OVERLAY_DARK: string;
}

export interface FontWeight {
  LIGHT: TextStyle['fontWeight'];
  REGULAR: TextStyle['fontWeight'];
  SEMIBOLD: TextStyle['fontWeight'];
  BOLD: TextStyle['fontWeight'];
}

export interface FontColor {
  PRIMARY: string;
  SECONDARY: string;
  TERTIARY: string;
  HIGHLIGHT: string;
  GREY: string;
  WHITE: string;
  BLACK: string;
}

export interface TableColor {
  HEADER: string;
  BORDER: string;
  ODD_ROW: string;
  EVEN_ROW: string;
}

export interface InputColor {
  BACKGROUND: string;
  BORDER: string;
}

export interface TabColor {
  ACTIVE: string;
  INACTIVE: string;
  BACKGROUND: string;
}

export interface Theme {
  SPACING: Spacing;
  FONT_SIZE: FontSize;
  FONT_WEIGHT: FontWeight;
  APP_COLOR: AppColor;
  FONT_COLOR: FontColor;
  TABLE_COLOR: TableColor;
  INPUT_COLOR: InputColor;
  TAB_COLOR: TabColor;
}
