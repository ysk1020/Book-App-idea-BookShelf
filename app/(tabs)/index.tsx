import React from 'react';
import { Text, View } from 'react-native';

import '@/global.css';

const index = () => {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.titleContainer}>Home</Text>
    //   <Text style={styles.subtitleContainer}>Welcome to the Home Screen</Text>
    // </View>
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
    </View>
  )
}

export default index

// const styles =  StyleSheet.create({
//   container:{
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   titleContainer: {
//     color: 'white',
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   subtitleContainer: {
//     color: 'white',
//     fontSize: 18,
//     marginTop: 10,
//   },
// });