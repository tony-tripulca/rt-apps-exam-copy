import React from 'react';
import { ImageBackground } from 'react-native';
import { FlexView } from './Flexbox';

interface BackgroundImageProps {
  children?: React.ReactNode;
  uri: string;
}

export const BackgroundImage = ({ children, uri }: BackgroundImageProps) => {
  return (
    <FlexView padding={0}>
      <ImageBackground source={{ uri }} resizeMode="cover" style={{ flex: 1 }}>
        {children}
      </ImageBackground>
    </FlexView>
  );
};
