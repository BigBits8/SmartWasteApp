import { React, useState } from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
// import { FlatList } from "react-native-gesture-handler";
import mockData from "../constants/mock";
import { images, icons } from "../constants";
import { COLORS, SIZES, FONTS } from "../constants";
export default function Home() {

  //Mock data 
  const categoryData = [
    {
      id: 1,
      name: "Kyckling",
      icon: icons.chicken,
      backgroundColor: "#A6D7FD",
    },
    {
      id: 2,
      name: "Vegetarisk",
      icon: icons.veg,
      backgroundColor: "#6CFD76",
    },
    {
      id: 3,
      name: "Fisk/Skaldjur",
      icon: icons.fish,
      backgroundColor: "#FFF294",
    },
    {
      id: 4,
      name: "Under 5 min",
      icon: icons.time,
      backgroundColor: "#FF99CC",
    },
  ];

  const annonsData = [
    {
      id: 1,
      name: "Lökburgare",
      portion: "4",
      photo: images.burger,
      categories: [1],
      price: "16",
      location: "Västerhaninge 7 km",
      // latitude: 1.5347282806345879,
      // longitude: 110.35632207358996,

      courier: {
        avatar: images.burger,
        name: "Amy",
      },
    },
    {
      id: 2,
      name: "Fisksoppa",
      portion: "4",
      photo: images.fishsoup,
      categories: [3],
      price: "166",
      location: "Västerhaninge 7 km",

      courier: {
        avatar: images.fishsoup,
        name: "Amy",
      },
    },
    {
      id: 3,
      name: "Laxstroganoff",
      portion: "3",
      photo: images.laxstroganoff,
      price: "43",
      categories: [3],
      location: "Västerhaninge 7 km",

      courier: {
        avatar: images.fishsoup,
        name: "Amy",
      },
    },
   
    {
      id: 4,
      name: "Tacopaj",
      portion: "2",
      photo: images.tacopaj,
      categories: [4],
      price: "151",
      location: "Västerhaninge 7 km",
      courier: {
        avatar: images.fishsoup,
        name: "Amy",
      },
    },
    {
      id: 5,
      name: "Tacopaj",
      portion: "2",
      photo: images.tacopaj,
      categories: [4],
      price: "151",
      location: "Västerhaninge 7 km",
      courier: {
        avatar: images.fishsoup,
        name: "Amy",
      },
    },
  ];
  //States for Mock data
  const [categories, setCategories] = useState(categoryData);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [annons, setAnnons] = useState(annonsData);
  //State for search inputfield
  const [text, onChangeText] = useState("Sök...");

  //Function to mark selected category
  function onSelectCategory(category) {
    //filter Annonser
    let annonsList = annonsData.filter((a) =>
      a.categories.includes(category.id)
    );

    setAnnons(annonsList);

    setSelectedCategory(category);
  }

  function renderSearchBar() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 40,
          backgroundColor: "#F0ECEC",
          borderRadius: 20,
          marginRight: 20,
          marginLeft: 20,
          marginTop: 70,
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
        {/* Header for categorys */}
        <TextInput
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 30,
            ...FONTS.h4,
          }}
          onChangeText={onChangeText}
          value={text}
        ></TextInput>
      </View>
    );
  }

  function renderMainCategories() {
    const renderItem = ({ item }) => {
      return (
        
          <TouchableOpacity
            style={{
              padding: SIZES.padding,
              paddingBottom: SIZES.padding * 2,
              backgroundColor: item.backgroundColor,
              borderWidth: selectedCategory?.id === item.id ? 2 : 0,
              borderRadius: SIZES.radius / 2,
              alignItems: "center",
              marginRight: SIZES.padding,
              justifyContent: "center",
              ...styles.shadow,
            }}
            onPress={() => onSelectCategory(item)}
          >
            <View
              style={{
                width: 75,
                height: 75,
                borderRadius: 45,
                alignItems: "center",
                justifyContent: "center",
                // backgroundColor: COLORS.white
              }}
            >
              <Text
                style={{
                  marginBottom: SIZES.padding,
                }}
              >
                {item.name}
              </Text>
              <Image
                source={item.icon}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </View>
          </TouchableOpacity>
        
      );
    };
    return (
      <View style={{ padding: SIZES.padding * 2 }}>
        <Text style={{ ...FONTS.h5 }}>Vad är du sugen på?</Text>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
        />
      </View>
    );
  }
  function renderAnnonsList() {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{
          marginLeft: SIZES.padding * 2,
          marginBottom: SIZES.padding * 2,
        }}
        // onPress -> navigate to Annons screen
      >
        {/* Container annons image */}
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={item.photo}
            resizeMode="cover"
            style={{
              width: "70%",
              height: 200,
              borderTopLeftRadius: SIZES.radius,
            }}
          />
        </View>
        {/* Container annons info */}
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              paddingLeft: SIZES.padding,
              paddingTop: SIZES.padding,
              height: 100,
              width: SIZES.width * 0.6,
              backgroundColor: COLORS.white,
              ...FONTS.h3,
            }}
          >
            <Text
              style={{
                ...FONTS.h3,
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                color: COLORS.darkgray,
              }}
            >
              {item.portion} Portioner
            </Text>
            <Text>{item.price} Kr</Text>
            <View
              style={{
                borderBottomColor: "#B9B9B9",
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />
            {/* Location */}
            <View
              style={{
                flexDirection: "row",
                paddingTop: SIZES.padding * 0.2,
              }}
            >
              <Image source={icons.location} />
              <Text>
                {item.location}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
    return (
      <View>
        {console.log(annonsData)}
        <View
          style={{
            padding: SIZES.padding * 2,
          }}
        >
          <Text style={{ ...(FONTS.h5 * 2) }}>Trött på det gamla vanliga?</Text>
        </View>
        <FlatList
          data={annonsData}
          // numColumns={2}

          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          showsVerticalScrollIndicator
          contentContainerStyle={{
            paddingHorizontal: SIZES.padding * 2,
            paddingBottom: 30,
          }}
        />
      </View>
    );
  }
  return (
    <SafeAreaView style={{flex:1}}>
      {renderSearchBar()}
      {renderMainCategories()}
      {renderAnnonsList()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 50,
    fontWeight: "bold",
  },
});
