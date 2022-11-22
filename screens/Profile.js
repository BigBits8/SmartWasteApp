import { React, useState, useEffect } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  SafeAreaView,
  ScrollView,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Button from "../constants/RegistrationPage/button";
import { icons, images, COLORS, FONTS, SIZES } from "../constants";

export default function Profile({ navigation }) {
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    const userData = await AsyncStorage.getItem("user");
    if (userData) {
      setUserDetails(JSON.parse(userData));
    }
  };

  const logout = () => {
    AsyncStorage.setItem(
      "user",
      JSON.stringify({ ...userDetails, loggedIn: false })
    );
    console.log(userDetails)
    navigation.navigate("Login");
  };

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          height: 350,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 100,
          backgroundColor: "hsl(118, 47%, 47%)",
        }}
      >
        <View
          style={{
            height: 210,
            width: 210,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={images.profilePic}
            resizeMode="contain"
            style={{
              marginTop: 10,
              borderRadius: 110,
              width: "100%",
              height: "100%",
            }}
          />
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: 100,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {userDetails?.fullname}
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {userDetails?.email}
        </Text>
      </View>
      <View
        style={{
          width: "80%",
          borderWidth: 1,
        }}
      >
        <Button backgroundColors={"rgb(2, 50, 178)"} />
        <Button />
        <Button />
        <Button title="Logout" onPress={logout} />
      </View>
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
