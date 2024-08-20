import { useTheme } from '@rt-apps/theming';
import React from 'react';
import { DimensionValue, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { FlexAlignment, FlexView, Spacing } from './Flexbox';
import { FontVariant, Typography } from './Typography';

interface TableHeaderProps {
  variant?: FontVariant;
  headers: {
    name: string | React.ReactNode;
    width?: DimensionValue;
    style?: StyleProp<ViewStyle>;
  }[];
}

export const TableHeader = ({ variant = 'th', headers }: TableHeaderProps) => {
  const { FONT_COLOR, TABLE_COLOR } = useTheme();
  const equalWidth = 100 / headers.length;

  const styles = StyleSheet.create({
    header: {
      backgroundColor: TABLE_COLOR.HEADER,
      borderColor: TABLE_COLOR.BORDER,
      borderBottomWidth: 1,
      borderTopWidth: 1,
    },
  });

  return (
    <FlexView width="100%" style={styles.header}>
      {headers.map((header, index) => (
        <FlexView key={index} width={header.width ?? `${equalWidth}%`} style={[header.style]}>
          {typeof header.name === 'string' ? (
            <Typography variant={variant} color={FONT_COLOR.SECONDARY}>
              {header.name}
            </Typography>
          ) : (
            header.name
          )}
        </FlexView>
      ))}
    </FlexView>
  );
};

interface TableRowProps {
  children: React.ReactNode;
  align?: FlexAlignment[];
  padding?: Spacing;
  isOddRow: boolean;
  style?: StyleProp<ViewStyle>;
}

export const TableRow: React.FC<TableRowProps> = ({
  children,
  align = [FlexAlignment.ALIGN_START],
  padding = 0,
  isOddRow,
  style,
}) => {
  const { TABLE_COLOR } = useTheme();

  return (
    <FlexView
      align={align}
      padding={padding}
      backgroundColor={isOddRow ? TABLE_COLOR.ODD_ROW : TABLE_COLOR.EVEN_ROW}
      style={style}
    >
      {children}
    </FlexView>
  );
};
