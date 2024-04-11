import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const Spinner = () => {
  
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#000000" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', 
  },
});

export default Spinner;