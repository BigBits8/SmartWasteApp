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
import Button from "../constants/ProfilePage/button";
import { icons, images, COLORS, FONTS, SIZES } from "../constants";

export default function Profile({ navigation }) {
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    getUserDetails();
  }, []);
  // Get user and set user details to state
  const getUserDetails = async () => {
    const userData = await AsyncStorage.getItem("user");
    if (userData) {
      setUserDetails(JSON.parse(userData));
    }
  };
  // Sign out user
  const logout = () => {
    AsyncStorage.setItem(
      "user",
      JSON.stringify({ ...userDetails, loggedIn: false })
    );
    // console.log(userDetails)
    navigation.navigate("Login");
  };

  return (
    <ScrollView>
      {/* Main Container */}
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Container image and background */}
        <View
          style={{
            height: 300,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 100,
            backgroundColor: "hsl(118, 47%, 47%)",
          }}
        >
          <View
            style={{
              height: 200,
              width: 200,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Profile image */}
            <Image
              source={images.profilePic}
              resizeMode="contain"
              style={{
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
          {/* User name */}
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {userDetails?.fullname}
          </Text>
          {/* User email */}
          <Text
            style={{
              fontSize: 20,
              
            }}
          >
            {userDetails?.email}
          </Text>
        </View>
        <View
          style={{
            width: "80%",
            
          }}
        >
          {/* Buttons */}
          <Button title="Redigera profil" icon={icons.arrow}/>
          <Button title="Mina annonser" />
          <Button title="Inställningar" />
          <Button title="Logout" onPress={logout} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
  },

});
