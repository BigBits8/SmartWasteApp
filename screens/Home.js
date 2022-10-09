import {React, useState} from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  FlatList, 
  StyleSheet, 
  Text, 
  View,
  TextInput, 
  Image 
} 
from "react-native";
// import { FlatList } from "react-native-gesture-handler";
import mockData from "../constants/mock";
import {images, icons, } from "../constants"
import {COLORS, SIZES, FONTS} from '../constants'
export default function Home() {

   const initialCurrentLocation = {
     streetName: "Kuching",
     gps: {
       latitude: 1.5496614931250685,
       longitude: 110.36381866919922,
     },
   };

 const categoryData = [
   {
     id: 1,
     name: "Rice",
     icon: icons.rice_bowl,
   },
   {
     id: 2,
     name: "Noodles",
     icon: icons.noodle,
   },
   {
     id: 3,
     name: "Hot Dogs",
     icon: icons.hotdog,
   },
   {
     id: 4,
     name: "Salads",
     icon: icons.salad,
   },
   
 ];


 const annonsData = [
   {
     id: 1,
     name: "Lökburgare",
     portion: "4",
     photo: images.burger_restaurant_1,
     price: '16',
     location: {
       latitude: 1.5347282806345879,
       longitude: 110.35632207358996,
     },
     courier: {
       avatar: images.avatar_1,
       name: "Amy",
     }
    
   },
   {
     id: 2,
     name: "Fisksoppa",
     portion: "4",
     photo: images.burger_restaurant_1,
     price: '166',
     location: {
       latitude: 1.5347282806345879,
       longitude: 110.35632207358996,
     },
     courier: {
       avatar: images.avatar_1,
       name: "Amy",
     }
    
   },
   {
     id: 3,
     name: "Laxstroganoff",
     portion: "4",
     photo: images.burger_restaurant_1,
     price: '43',
     location: {
       latitude: 1.5347282806345879,
       longitude: 110.35632207358996,
     },
     courier: {
       avatar: images.avatar_1,
       name: "Amy",
     }
    
   },
   {
     id: 4,
     name: "Tacopaj",
     portion: "2",
     photo: images.burger_restaurant_1,
     price: '151',
     location: {
       latitude: 1.5347282806345879,
       longitude: 110.35632207358996,
     },
     courier: {
       avatar: images.avatar_1,
       name: "Amy",
     }
    
   },
   
 ];

 const [categories, setCategories] = React.useState(categoryData);
 const [selectedCategory, setSelectedCategory] = React.useState(null);
 const [annons, setAnnons] = React.useState(restaurantData);
 const [currentLocation, setCurrentLocation] = React.useState(
   initialCurrentLocation
 );

const [text, onChangeText] = useState("Sök...");
  function renderSearchBar(){
    
    return (
      <View
        style={{
          flexDirection: "row",
          height: 40,
          backgroundColor: "#F0ECEC",
          borderRadius: 20,
          marginRight: 20,
          marginLeft: 20,
          marginTop: 50,
        }}
      >
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: 20,
            justifyContent: "center",
          }}
        >
          <Image
            source={icons.search}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
            }}
          />
        </TouchableOpacity>
        <TextInput
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 30,
            ...FONTS.h4
          }}
          onChangeText={onChangeText}
          value={text}
        ></TextInput>
      </View>
    );
  }

  return (

      <SafeAreaView>
        {renderSearchBar()}
      </SafeAreaView>
   
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
