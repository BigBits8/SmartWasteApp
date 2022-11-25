import { React, useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";

import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import {
  Home,
  Profile,
  Annons,
  AddAnnons,
  Login,
  Register,
} from "./screens/Index";

import { Loader } from "./constants/RegistrationPage/loader";
import { COLORS, icons, images } from "./constants";
import { user } from "./constants/icons";
import Tabs from "./navigation/tabs";

import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App({ navigation, route }) {
  // Run authUser on render
  useEffect(() => {
    setTimeout(authUser, 2000);
  }, []);

  // State of database of all annonser
  const [annons, setAnnons] = useState([
    {
      foodName: "Lökburgare",
      key: 1,
      portion: "4",
      photo: images.burger,
      categories: [1],
      price: "166",
      location: "Västerhaninge",
      description: "Med färsk potatis och vit karl-johan sås",
      courier: {
        profilePicture: images.profilePic,
        name: "John",
        phone: "073 55 47 220",
        email: "momust187@gmail.com",
      },
      info: "Information om maten",
      ingredients: "Tomat, Lök, Ost, Högrevsfärs, Sallad, Potatis",
      aller: "Gluten, Soja, Sesam, Jordnötter, Nötter",
    },
    {
      key: 2,
      foodName: "Fisksoppa",
      portion: "4",
      photo: images.fishsoup,
      categories: [4],
      price: "166",
      location: "Västerhaninge",
      description: "Med färsk potatis och vit karl-johan sås",
      courier: {
        profilePicture: images.profilePic,
        name: "John",
        phone: "073 55 47 220",
        email: "momust187@gmail.com",
      },
      info: "Information om maten",
      ingredients: "Morötter, Lök, Torsk, Potatis",
      aller: "Gluten, Soja, Sesam, Jordnötter, Nötter",
    },
    {
      key: 3,
      foodName: "Laxstroganoff",
      portion: "3",
      photo: images.laxstroganoff,
      price: "43",
      categories: [4],
      location: "Västerhaninge",
      description: "Med färsk potatis och vit karl-johan sås",
      courier: {
        profilePicture: images.profilePic,
        name: "John",
        phone: "073 55 47 220",
        email: "momust187@gmail.com",
      },
      info: "Information om maten",
      ingredients: "Tomat, Lök, Ost, Högrevsfärs, Sallad, Potatis",
      aller: "Gluten, Soja, Sesam, Jordnötter, Nötter",
    },

    {
      key: 4,
      foodName: "Tacopaj",
      portion: "2",
      photo: images.tacopaj,
      categories: [5],
      price: "151",
      location: "Västerhaninge",
      description: "Med färsk potatis och vit karl-johan sås",
      courier: {
        profilePicture: images.profilePic,
        name: "John",
        phone: "073 55 47 220",
        email: "momust187@gmail.com",
      },
      info: "Information om maten",
      ingredients: "Tomat, Lök, Ost, Högrevsfärs, Sallad, Potatis",
      aller: "Gluten, Soja, Sesam, Jordnötter, Nötter",
    },
    {
      key: 5,
      foodName: "Veg lasagne",
      portion: "5",
      photo: images.veglasagne,
      categories: [3],
      price: "151",
      location: "Västerhaninge",
      description: "Med färsk potatis och vit karl-johan sås",
      courier: {
        profilePicture: images.profilePic,
        name: "John",
        phone: "073 55 47 220",
        email: "momust187@gmail.com",
      },
      info: "Information om maten",
      ingredients: "Tomat, Lök, Ost, Högrevsfärs, Sallad, Potatis",
      aller: "Gluten Soja, Sesam, Jordnötter, Nötter",
    },
  ]);

  const [modalOpen, setModelOpen] = useState(true);
  const [initialRouteName, setInitialRouteName] = useState("");
  // const [hideTab, setHideTab] = useState(true)

  // Check if user prop 'loggedIn' is true, if so, stay logged in after reload - Currently not working!!
  const authUser = async () => {
    try {
      let userData = await AsyncStorage.getItem("user");
      if (userData) {
        console.log(`userdata:${userData}`);
        userData = JSON.parse(userData);

        if (userData?.loggedIn) {
          setInitialRouteName("Home");
          console.log(`initialRouteName: ${initialRouteName}`);
          console.log("entered");
        } else {
          setInitialRouteName("Login");
        }
      } else {
        setInitialRouteName("Register");
      }
    } catch (error) {
      setInitialRouteName("Register");
    }
  };

  // Send annons info when adding new annons, updating state of annons, with a random key.
  const sendAnnonsForm = (annons) => {
    annons.key = Math.random();
    setAnnons((currentAnnons) => {
      return [annons, ...currentAnnons];
    });
  };
  console.log(annons);

  // Stacks without tabs
  function MyNonTabStack() {
    return (
      <Stack.Navigator initialRouteName={"Login"}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          children={(props) => (
            <Home navigation={props.navigation} changedAnnons={annons} />
          )}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Annons"
          component={Annons}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Annonser"
          children={MyNonTabStack}
          // Hide bottom tab menu from pages with given route name
          options={({ route }) => ({
            tabBarStyle: ((route) => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? "";
              console.log(`routName:${routeName}`);
              if (
                routeName === "Register" ||
                routeName == "Login" ||
                routeName == ""
              ) {
                console.log(route);
                return { display: "none" };
              }
              return;
            })(route),
            tabBarIcon: ({ focused }) => (
              <Image
                source={icons.search}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? COLORS.primary : COLORS.secondary,
                }}
              />
            ),
            headerShown: false,
          })}
        />
        <Tab.Screen
          name="Ny annons"
          children={(props) => (
            <AddAnnons
              sendAnnonsForm={sendAnnonsForm}
              navigation={props.navigation}
            />
          )}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={icons.add}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? COLORS.primary : COLORS.secondary,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Min profil"
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={icons.user}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? COLORS.primary : COLORS.secondary,
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
