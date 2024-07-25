import React from 'react';
import { Image, StyleSheet } from 'react-native';
const Logo = () => (
  <Image
    source={require('@/assets/images/gguummyylogo.png')}
    style={styles.reactLogo}
    resizeMode="contain"
  />
);
const styles = StyleSheet.create({
  reactLogo: {
    width: 300,
    height: 100,
    marginTop: 100,
    marginBottom: 50,
  },
});
export default Logo;
