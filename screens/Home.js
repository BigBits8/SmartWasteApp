import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Home() {
  return (
    <View>
      <Text>This is my Home page!</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 50,
    fontWeight: "bold",
  },
});
