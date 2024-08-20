import { useTheme } from '@rt-apps/theming';
import React from 'react';
import { ActivityIndicator, StyleSheet, TextInput, TextInputProps } from 'react-native';
import { FlexAlignment, FlexView } from './Flexbox';

interface InputProps extends TextInputProps {
  inputChanged: (text: string) => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  loading?: boolean;
}

export const Input = (props: InputProps) => {
  const { INPUT_COLOR, SPACING } = useTheme();

  const styles = StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: INPUT_COLOR.BORDER,
      borderRadius: 8,
      height: 40,
      padding: SPACING.SM,
    },
    text: {
      flex: 1,
      padding: SPACING.XXS,
      height: '100%',
    },
  });

  return (
    <FlexView align={[FlexAlignment.ALIGN_CENTER]} style={styles.container} gap={8}>
      {props.startIcon}
      <TextInput
        style={styles.text}
        placeholder={props.placeholder}
        onChangeText={(text) => props.inputChanged(text)}
      />

      {props.loading ? <ActivityIndicator /> : props.endIcon}
    </FlexView>
  );
};

export default Input;
