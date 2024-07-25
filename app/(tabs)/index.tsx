import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Linking } from 'react-native';
import * as Font from 'expo-font';
import Logo from '@/components/Logo';
import GradientButton from '@/components/GradientButton';
import Terms from "@/components/Terms";
import { ThemedView } from '@/components/ThemedView';

const HomeScreen = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [buttonPressed, setButtonPressed] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Quicksand-Bold': require('@/assets/fonts/Quicksand-Bold.ttf'),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  useEffect(() => {
    let timer;
    if (buttonPressed) {
      timer = setTimeout(() => {
        setButtonPressed(false);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [buttonPressed]);

  if (!fontsLoaded) {
    return null; // Or a loading spinner
  }

  const handleStart = () => {
    console.log("Getting Started button pressed");
    setButtonPressed(true);
    // Navigate to the next screen or perform any other action
  };

  const openLink = (url: string) => {
    Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
  };

  return (
    <ThemedView style={styles.container}>
      <Logo />
      <View style={styles.buttonAndTermsWrapper}>
        <GradientButton onPress={handleStart} buttonPressed={buttonPressed} />
        <Terms openLink={openLink} />
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  buttonAndTermsWrapper: {
    alignItems: 'center',
  },
});

export default HomeScreen;
