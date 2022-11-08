import { ReactComponentElement, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  SafeAreaView,
  ScrollView,
  FlatList
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
          height: 300,
          width: '100%',
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <View
          style={{
            height: 320,
            width: 320,
            alignItems: "center",
            justifyContent: "center",
            
          }}
        >
          <Image
            source={annons?.photo}
            resizeMode="contain"
            style={{
              borderRadius: 10,
              width: "100%",
              height: "100%",
            }}
          />
        </View>
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
        {/* Email button */}
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
            Mejla
          </Text>
        </TouchableOpacity>
        {/* Phone number */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
            width: 350,
            height: 40,
            backgroundColor: "white",
            borderWidth: 2,
            borderRadius: 10,
          }}
        >
          <Image
            style={{
              width: 25,
              height: 25,
              marginLeft: -30,
            }}
            source={icons.phone}
          />
          <Text
            style={{
              color: "black",
              fontWeight: "500",
              paddingLeft: SIZES.padding,
            }}
          >
            Visa telefonnummer
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  function annonsSeller() {
    return (
      <View
        style={{
          paddingLeft: SIZES.padding * 2,
          marginTop: 30,
        }}
      >
        <View
          style={{
            marginBottom: 10,
          }}
        >
          <Text>Säljs av</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Image
            source={annons?.courier.profilePicture}
            style={{
              width: 60,
              height: 80,
              borderRadius: 80 / 2,
            }}
          />
          <View
            style={{
              paddingLeft: SIZES.padding,
            }}
          >
            <Text>{annons?.courier.name}</Text>
            <Text style={{ color: "hsl(199, 100%, 50%)" }}>
              6 aktiva annonser
            </Text>
            <Text style={{ color: COLORS.darkgray }}>Veriferad med BankId</Text>
          </View>
        </View>
      </View>
    );
  }

  function renderAnnonsIngredients(){
    // IF USING ARRAYS -
    //  const ingredientsList = annons?.ingredients.map((item) =>{
    //   return(
    //     <View><Text>{item}</Text></View>
    //   )
    //  })
    //  const allerList = annons?.aller.map((item) =>{
    //   return(
    //     <Text
    //     style={{
    //       color: COLORS.darkgray,
    //     }}
    //     >{` ${item} -`}</Text>
    //   )
    //  })

      return (
        <View
          style={{
            paddingLeft: SIZES.padding * 2,
            marginTop: 30,
          }}
        >
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginBottom: 20,
            }}
          />
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                fontWeight: "500",
              }}
            >
              Allergener:
            </Text>
            <Text>{annons?.aller}</Text>
          </View>
          <Text
            style={{
              color: COLORS.darkgray,
            }}
          >
            Kan innehålla spår av allergener
          </Text>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginTop: 20,
              marginBottom: 20,
            }}
          />
          <View
            style={{
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                fontSize: SIZES.h4,
                fontWeight: "500",
              }}
            >
              Ingredienser
            </Text>
            <Text
              style={{
                color: COLORS.darkgray,
              }}
            >
              För 2 portioner
            </Text>
          </View>

          <View>
            <Text>{annons?.ingredients}</Text>
          </View>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginTop: 20,
              marginBottom: 20,
            }}
          />
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                fontWeight: "500",
              }}
            >
              Extra info:{" "}
            </Text>
            <Text
              style={{
                color: COLORS.darkgray,
              }}
            >
              {annons?.info}
            </Text>
          </View>
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
      <ScrollView>
        {renderAnnonsImage()}
        {renderAnnonsDetails()}
        {messageButton()}
        {annonsSeller()}
        {renderAnnonsIngredients()}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: COLORS.lightGray2,
  },

});
