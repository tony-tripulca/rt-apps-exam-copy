import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

export const useSkeletonAnimation = (duration: number) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const animationRef = useRef<Animated.CompositeAnimation | null>(null);

  useEffect(() => {
    animationRef.current = Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration,
          useNativeDriver: false,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration,
          useNativeDriver: false,
        }),
      ])
    );
    animationRef.current.start();

    return () => {
      if (animationRef.current) {
        animationRef.current.stop();
      }
    };
  }, [duration]);

  return animatedValue;
};
