import React from 'react';
import { View, Image, Animated, StyleSheet } from 'react-native';

const EyePart = ({ source }) => (
  <Animated.View style={styles.image} resizeMode="contain">
    <Image source={source} />
  </Animated.View>
);

const eyesOpenA = require('/Users/Darshin/Documents/CODING/Grace-Hopper-Program/SENIOR PHASE/Stackathon/Hydro-Bud/assets/images/Grow_13A.png');
const eyesClosed = require('/Users/Darshin/Documents/CODING/Grace-Hopper-Program/SENIOR PHASE/Stackathon/Hydro-Bud/assets/images/Grow_13B.png');
const eyesOpenB = require('/Users/Darshin/Documents/CODING/Grace-Hopper-Program/SENIOR PHASE/Stackathon/Hydro-Bud/assets/images/Grow_13C.png');

export default function Eyes({ eyes = 'open' }) {
  return (
    <View style={styles.imageContainer}>
      {/* <EyePart source={eyes === 'open' ? eyesOpenA : eyesClosed} /> */}

      <EyePart
        source={
          eyes === 'open'
            ? eyesOpenA
            : eyes === 'closed'
            ? eyesClosed
            : eyes === 'openB'
            ? eyesOpenB
            : null
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
  },
  image: {
    marginBottom: 2500,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ scale: 0.15 }],
  },
});
