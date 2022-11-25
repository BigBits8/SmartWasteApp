import react from "react";

import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { COLORS } from "../../themes";

// Button for Registrarion page and input page
const Button = ({ title, onPress = () => {}, icon }) => {
  return (
    <TouchableOpacity style={styles.buttons} onPress={onPress}>
      <Text style={{ color: "#808080", fontWeight: "bold", fontSize: 18 }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {},

  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 40,
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 40,
  },
});
export default Button;
