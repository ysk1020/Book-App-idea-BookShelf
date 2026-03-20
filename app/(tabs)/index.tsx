import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleContainer}>Home</Text>
      <Text style={styles.subtitleContainer}>Welcome to the Home Screen</Text>
      <Link href="/library">Go back to Library</Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    color: "purple",
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitleContainer: {
    color: "blue",
    fontSize: 18,
    marginTop: 10,
  },
});
