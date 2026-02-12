import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleContainer}>Home</Text>
      <Text style={styles.subtitleContainer}>Welcome to the Home Screen</Text>
    </View>
  )
}

export default index

const styles =  StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitleContainer: {
    color: 'white',
    fontSize: 18,
    marginTop: 10,
  },
});