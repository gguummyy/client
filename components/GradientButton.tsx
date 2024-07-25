import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface GradientButtonProps {
  onPress: () => void;
  buttonPressed: boolean;
}

const GradientButton: React.FC<GradientButtonProps> = ({ onPress, buttonPressed }) => (
  <LinearGradient
    colors={['#FFA6A6', '#FFA41C', '#FDFFAF', '#9FFFB4', '#AEB9FC', '#60D9FF', '#EC74FF']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.gradientBorder}
  >
    <TouchableOpacity 
      onPress={onPress}
      style={[styles.buttonContainer, { marginBottom: buttonPressed ? 0 : 5 }]}
      activeOpacity={0.7}
    >
      <Text style={styles.buttonText}>Continue</Text>
    </TouchableOpacity>
  </LinearGradient>
);

const styles = StyleSheet.create({
  gradientBorder: {
    borderRadius: 9,
    padding: 3,
    borderColor: 'transparent',
    borderWidth: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    borderRadius: 5,
    backgroundColor: '#FFF',
    width: 260,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  buttonText: {
    color: '#696969',
    fontFamily: 'Quicksand-Bold',
    fontSize: 18,
    textAlign: 'center',
    letterSpacing: 3.5,
  },
});

export default GradientButton;
