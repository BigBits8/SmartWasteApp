import react from "react";

import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";
import { COLORS } from "../themes";
import { icons } from "../index";
const Button = ({ title, onPress = () => {}, icon }) => {
  return (
    <TouchableOpacity style={styles.buttons} onPress={onPress}>
      <View
        style={{
          width: "80%",
          alignItems: "center",
        }}
      >
        <View>
          <Text style={{ color: "black", fontSize: 18 }}>{title}</Text>
        </View>
      </View>
      <View
        style={{
          alignItems: "flex-end",
        }}
      >
        <Image source={icons.next} />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {},

  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 40,
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 40,
  },
});
export default Button;
