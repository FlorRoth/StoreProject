import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';


export const Spinner = () => (
  <View style={styles.spinner}>
    <ActivityIndicator size="large" color="black" />
  </View>
);

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


