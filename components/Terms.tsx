import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface TermsProps {
  openLink: (url: string) => void;
}

const Terms: React.FC<TermsProps> = ({ openLink }) => (
  <View style={styles.termsWrapper}>
    <Text style={styles.termsText}>By continuing, you agree to </Text>
    <TouchableOpacity onPress={() => openLink('https://www.gguummyy.com/privacy-policy')}>
      <Text style={styles.linkText}>gguummyy’s privacy policy</Text>
    </TouchableOpacity>
    <Text style={styles.termsText}> and </Text>
    <TouchableOpacity onPress={() => openLink('https://www.gguummyy.com/eula')}>
      <Text style={styles.linkText}>EULA agreement</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  termsWrapper: {
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  termsText: {
    color: '#9E9E9E',
    fontFamily: 'Quicksand-Bold',
    fontSize: 12,
    textAlign: 'center',
  },
  linkText: {
    color: '#1E90FF',
    fontFamily: 'Quicksand-Bold',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default Terms;
