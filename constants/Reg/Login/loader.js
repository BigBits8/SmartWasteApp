import React from "react";
import {
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
  ActivityIndicator,
} from "react-native";
import { COLORS } from "../../themes";

const Loader = ({ visible }) => {
  // Get dimensions of user screen
  const { height, width } = useWindowDimensions();
  return (
    visible && (
      <View style={[styles.container, { height, width }]}>
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={COLORS.primary} />
          <Text style={{ marginLeft: 13, fontSize: 16 }}>Loading...</Text>
        </View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    borderWidth: 1,
    alignItems: "center",
  },
  loader: {
    height: 70,
    width: 200,
    backgroundColor: COLORS.white,
    marginHorizontal: 50,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});

export default Loader;
