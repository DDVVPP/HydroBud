import React from 'react';
import { View, Image, Animated, StyleSheet } from 'react-native';

const EyePart = ({ source }) => (
  <Animated.View style={styles.image} resizeMode="contain">
    <Image source={source} />
  </Animated.View>
);

const eyesOpen = require('/Users/Darshin/Documents/CODING/Grace-Hopper-Program/SENIOR PHASE/Stackathon/Hydro-Bud/assets/images/Grow_6A.png');
const eyesClosed = require('/Users/Darshin/Documents/CODING/Grace-Hopper-Program/SENIOR PHASE/Stackathon/Hydro-Bud/assets/images/Grow_6B.png');

export default function Eyes({ eyes = 'open' }) {
  return (
    <View style={styles.imageContainer}>
      <EyePart source={eyes === 'open' ? eyesOpen : eyesClosed} />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
  },
  image: {
    // width: 500,
    marginBottom: 2500,
    // marginRight: 50,
    alignItems: 'center',
    justifyContent: 'center',
    // marginLeft: 80,
    transform: [{ scale: 0.15 }],
  },
});
