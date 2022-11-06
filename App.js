import {React, useState} from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Home, Profile, Annons, NewAnnons, ModalScreen } from "./screens/Index";

import { COLORS, icons, images } from "./constants";
import Tabs from './navigation/tabs';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



export default function App() {


const [annons, setAnnons] = useState([
  {
    id: 1,
    name: "Lökburgare",
    portion: "4",
    photo: images.burger,
    categories: [1],
    price: "166",
    location: "Västerhaninge",
    description: "Med färsk potatis och vit karl-johan sås",
    courier: {
      profilePicture: images.profilePic,
      name: "John",
    },
    info: "Information om maten",
    ingredients: ["Tomat", "Lök", "Ost", "Högrevsfärs", "Sallad", "Potatis"],
    aller: ["Gluten", "Soja", "Sesam", "Jordnötter", "Nötter"],
  },
  {
    id: 2,
    name: "Fisksoppa",
    portion: "4",
    photo: images.fishsoup,
    categories: [4],
    price: "166",
    description: "",
    location: "Västerhaninge",
    description: "Med färsk potatis och vit karl-johan sås",
    courier: {
      profilePicture: images.profilePic,
      name: "John",
    },
    info: "Information om maten",
    ingredients: ["Morötter", "Lök", "Torsk", "Potatis"],
    aller: ["Gluten", "Soja", "Sesam", "Jordnötter", "Nötter"],
  },
  {
    id: 3,
    name: "Laxstroganoff",
    portion: "3",
    photo: images.laxstroganoff,
    price: "43",
    categories: [4],
    description: "",
    location: "Västerhaninge",
    description: "Med färsk potatis och vit karl-johan sås",
    courier: {
      profilePicture: images.profilePic,
      name: "John",
    },
    info: "Information om maten",
    ingredients: ["Tomat", "Lök", "Ost", "Högrevsfärs", "Sallad", "Potatis"],
    aller: ["Gluten", "Soja", "Sesam", "Jordnötter", "Nötter"],
  },

  {
    id: 4,
    name: "Tacopaj",
    portion: "2",
    photo: images.tacopaj,
    categories: [5],
    price: "151",
    location: "Västerhaninge",
    description: "Med färsk potatis och vit karl-johan sås",
    courier: {
      profilePicture: images.profilePic,
      name: "John",
    },
    info: "Information om maten",
    ingredients: ["Tomat", "Lök", "Ost", "Högrevsfärs", "Sallad", "Potatis"],
    aller: ["Gluten", "Soja", "Sesam", "Jordnötter", "Nötter"],
  },
  {
    id: 5,
    name: "Veg lasagne",
    portion: "5",
    photo: images.veglasagne,
    categories: [3],
    price: "151",
    location: "Västerhaninge",
    description: "Med färsk potatis och vit karl-johan sås",
    courier: {
      profilePicture: images.profilePic,
      name: "John",
    },
    info: "Information om maten",
    ingredients: ["Tomat", "Lök", "Ost", "Högrevsfärs", "Sallad", "Potatis"],
    aller: ["Gluten", "Soja", "Sesam", "Jordnötter", "Nötter"],
  },
]);


const [modalOpen, setModelOpen] = useState(true)
const addAnnons = (annons) => {
  annons.id = Math.random();
  setAnnons((currentAnnons) => {
    return [annons, ...currentAnnons];
  });
};

function MyNonTabStack() {
  //    const dispatch = useDispatch();
  //    const auth = useSelector((state) => state.auth);

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        children={(props) => <Home changedAnnons={annons} />}
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
          component={MyNonTabStack}
          options={{
            headerShown: false,
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
          }}
        />
        <Tab.Screen
          name="Ny annons"
          children={() => (
            <ModalScreen addAnnons={addAnnons} modalForceOpen={modalOpen} />
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
