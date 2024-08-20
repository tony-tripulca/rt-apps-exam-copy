import { PropsWithChildren, useRef, useState } from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { ImagePreview } from './ImagePreview';
import { useTheme } from '@rt-apps/theming';
import { Left, Right } from './Arrow';

interface CarouselImage extends PropsWithChildren {
  id: string;
  src: string;
  alt?: string;
}

interface CarouselProps {
  images: CarouselImage[];
  height?: number;
  onPress?: (id: string) => void;
}

export const Carousel = ({ images, height = 260, onPress }: CarouselProps) => {
  const { SPACING, APP_COLOR } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<ScrollView>(null);
  const windowWidth = Dimensions.get('window').width;

  const styles = StyleSheet.create({
    pagination: {
      flexDirection: 'row',
      position: 'absolute',
      alignSelf: 'center',
      top: 10,
      right: 10,
    },
    gradient: {
      position: 'absolute',
      width: '100%',
      height: '60%',
      bottom: 0,
    },
    dot: {
      height: 10,
      width: 10,
      borderRadius: 5,
      margin: SPACING.XS,
      borderWidth: 1,
      borderColor: APP_COLOR.BORDER,
      backgroundColor: APP_COLOR.THEME,
    },
    activeDot: {
      backgroundColor: APP_COLOR.THEME_DARK,
    },
    hit: {
      position: 'absolute',
      height: '100%',
      width: '10%',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
    },
    prev: {
      left: 0,
      top: 0,
    },
    next: {
      right: 0,
      top: 0,
    },
  });

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const activeIndex = Math.round(scrollPosition / windowWidth);
    setActiveIndex(activeIndex);
  };

  const scrollLeft = () => {
    if (activeIndex > 0) {
      scrollRef.current?.scrollTo({
        x: windowWidth * (activeIndex - 1),
        animated: true,
      });
    }
  };

  const scrollRight = () => {
    if (activeIndex < images.length - 1) {
      scrollRef.current?.scrollTo({
        x: windowWidth * (activeIndex + 1),
        animated: true,
      });
    }
  };

  return (
    <View>
      <TouchableOpacity style={[styles.hit, styles.prev]} onPress={scrollLeft}>
        <Left />
      </TouchableOpacity>

      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {images.map((item) => (
          <Pressable
            key={item.id}
            onPress={() => onPress?.(item.id)}
            style={{ width: windowWidth }}
          >
            <ImagePreview uri={item.src} style={{ width: windowWidth, height }} />

            {item.children}
          </Pressable>
        ))}
      </ScrollView>

      <View style={styles.pagination}>
        {images.map((item, index) => (
          <View key={item.id} style={[styles.dot, activeIndex === index && styles.activeDot]} />
        ))}
      </View>

      <TouchableOpacity style={[styles.hit, styles.next]} onPress={scrollRight}>
        <Right />
      </TouchableOpacity>
    </View>
  );
};

export default Carousel;
