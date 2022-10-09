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
