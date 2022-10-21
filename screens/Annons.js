import { ReactComponentElement, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  SafeAreaView,
} from "react-native";
import { icons, images, COLORS, FONTS, SIZES } from "../constants";

export default function Annons({ navigation, route }) {
  const [annons, setAnnons] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    let { item, location } = route.params;
    setAnnons(item);
    setLocation(location);
  });

  function renderAnnonsImage() {
    return (
      <View
        style={{
          height: "40%",
          alignItems: "center",
        }}
      >
        <Image
          source={annons?.photo}
          resizeMode="cover"
          style={{
            borderRadius: 10,
            position: "relative",
            height: "100%",
            width: "90%",
          }}
        />
      </View>
    );
  }

  function renderAnnonsDetails() {
    return (
      <View
        style={{
          paddingLeft: SIZES.padding * 2,
        }}
      >
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            height: 40,
          }}
        >
          <Image
            style={{
              marginTop: 2,
              width: 15,
              height: 15,
            }}
            source={icons.location}
          />
          <Text
            style={{
              marginLeft: 10,
              color: COLORS.darkgray,
            }}
          >
            {annons?.location}
          </Text>
        </View>

        <Text
          style={{
            paddingBottom: 8,
            fontSize: SIZES.h2,
          }}
        >
          {annons?.name}
        </Text>
        <Text
          style={{
            paddingBottom: 5,
            color: COLORS.darkgray,
          }}
        >
          {annons?.description}
        </Text>
        <Text
          style={{
            fontSize: SIZES.h2,
          }}
        >
          {annons?.price}Kr
        </Text>
      </View>
    );
  }

  function messageButton() {
    return (
      <View
        style={{
          marginTop: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: 350,
            height: 40,
            backgroundColor: "hsl(118, 47%, 47%)",
            borderRadius: 10,
          }}
        >
          <Image
            style={{
              width: 25,
              height: 25,
              marginLeft: -30,
            }}
            source={icons.email}
          />
          <Text
            style={{
              color: "white",
              fontWeight: "500",
              paddingLeft: SIZES.padding,
            }}
          >
            Skicka meddelande
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Go back arrow */}
      <View
        style={{
          paddingTop: SIZES.padding * 6,
          paddingLeft: SIZES.padding * 2,
          paddingBottom: SIZES.padding * 2,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={icons.arrow} resizeMode="contain" />
        </TouchableOpacity>
      </View>
      {renderAnnonsImage()}
      {renderAnnonsDetails()}
      {messageButton()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
  },
});
