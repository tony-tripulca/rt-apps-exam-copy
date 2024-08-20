import {
  AppColor,
  FontColor,
  FontSize,
  FontWeight,
  InputColor,
  Spacing,
  TabColor,
  TableColor,
  Theme,
} from './types';

export const BASE_SPACING: Spacing = {
  XXS: 2,
  XS: 4,
  SM: 8,
  MD: 16,
  LG: 24,
};

export const BASE_FONT_SIZE: FontSize = {
  XXL: 48,
  XL: 32,
  LG: 24,
  MD: 18,
  SM: 14,
  XS: 12,
  XXS: 10,
};

export const BASE_APP_COLOR: AppColor = {
  THEME: '#a5d4d4',
  THEME_DARK: '#248f88',
  BACKGROUND: '#02122a',
  BORDER: '#cdd1d7',
  OFF_WHITE: '#f7f7f8',
  WHITE: '#fff',
  BLACK: '#000',
  SKELETON_LIGHT: '#f2f2f2',
  SKELETON_DARK: '#e0e0e0',
  SKELETON_BACKGROUND_LIGHT: '#F0F0F0',
  SKELETON_BACKGROUND_DARK: '#808080',
  SKELETON_OVERLAY_LIGHT: '#D3D3D3',
  SKELETON_OVERLAY_DARK: '#A9A9A9',
};

export const BASE_FONT_WEIGHT: FontWeight = {
  LIGHT: '300',
  REGULAR: '400',
  SEMIBOLD: '600',
  BOLD: '700',
};

export const BASE_FONT_COLOR: FontColor = {
  PRIMARY: '#031735',
  SECONDARY: '#6c757d',
  TERTIARY: '#59667a',
  HIGHLIGHT: '#0e77c7',
  GREY: '#cdd1d7',
  // DEFAULTS
  WHITE: BASE_APP_COLOR.WHITE,
  BLACK: BASE_APP_COLOR.BLACK,
};

export const BASE_TABLE_COLOR: TableColor = {
  HEADER: '#ebecef',
  BORDER: '#cdd1d7',
  ODD_ROW: '#fafafa',
  EVEN_ROW: '#f0f0f0',
};

export const BASE_INPUT_COLOR: InputColor = {
  BACKGROUND: '#fff',
  BORDER: '#cdd1d7',
};

export const BASE_TAB_COLOR: TabColor = {
  ACTIVE: BASE_APP_COLOR.THEME,
  INACTIVE: BASE_APP_COLOR.WHITE,
  BACKGROUND: BASE_APP_COLOR.BACKGROUND,
};

export const BASE_THEME: Theme = {
  SPACING: BASE_SPACING,
  FONT_SIZE: BASE_FONT_SIZE,
  FONT_WEIGHT: BASE_FONT_WEIGHT,
  APP_COLOR: BASE_APP_COLOR,
  FONT_COLOR: BASE_FONT_COLOR,
  TABLE_COLOR: BASE_TABLE_COLOR,
  INPUT_COLOR: BASE_INPUT_COLOR,
  TAB_COLOR: BASE_TAB_COLOR,
};
