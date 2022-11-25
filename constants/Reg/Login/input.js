import { React, useState } from "react";
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Image,
  Text,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import { COLORS } from "../../themes";
import { images, icons } from "../..";

const Input = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(password);

  return (
    <View style={{ marginBottom: 20, width: 300 }}>
      <Text style={{ color: COLORS.white, fontWeight: "bold" }}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: error ? "red" : isFocused ? "green" : COLORS.lightGray,
          },
        ]}
      >
        <Image
          source={iconName}
          style={{
            width: 30,
            height: 30,
            marginRight: 10,
          }}
        />
        <TextInput
          // Hide password
          secureTextEntry={hidePassword}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          style={{ color: COLORS.black, flex: 1 }}
          {...props}
        />
        {/* Show password on press of eye icon */}
        {password && (
          <TouchableOpacity
            onPress={() => {
              console.log("Pressed");
              setHidePassword(!hidePassword);
            }}
          >
            <Image source={hidePassword ? icons.view : icons.hide} />
          </TouchableOpacity>
        )}
      </View>
      {/* Show error message */}
      {error && (
        <Text
          style={{
            color: "red",
            fontSize: 15,
            marginTop: 7,
            fontWeight: "bold",
            backgroundColor: "#FEFFB9",
            borderRadius: 1,
            padding: 5,
          }}
        >
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.darkgray,
  },
  inputContainer: {
    height: 55,
    width: "100%",
    backgroundColor: "#F2F2F2",
    //  backgroundColor: "rgb(212, 234, 251)"
    flexDirection: "row",
    paddingHorizontal: 15,
    borderWidth: 2,
    alignItems: "center",
    borderRadius: 5,
  },
});

export default Input;
