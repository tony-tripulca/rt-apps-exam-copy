import { DimensionValue, Image, ImageStyle, StyleSheet } from 'react-native';

interface ImagePreviewProps {
  width?: DimensionValue;
  height?: DimensionValue;
  uri: string;
  alt?: string;
  rounded?: boolean;
  style?: ImageStyle;
}

export const ImagePreview = ({
  width = 24,
  height = 24,
  uri,
  alt,
  rounded = false,
  style,
}: ImagePreviewProps) => {
  const roundedValue = rounded ? { borderRadius: 9999 } : {};

  const combinedStyle = [styles.image, roundedValue, { width, height }, style];

  return <Image source={{ uri }} alt={alt} style={combinedStyle} />;
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
  },
});
