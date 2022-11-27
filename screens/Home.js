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
  TouchableWithoutFeedback,
  Key,
  LogBox,
} from "react-native";

import Modal from "react-native-modal";
import db, { categoryData } from "../constants/db";
import { images, icons } from "../constants";
import { COLORS, SIZES, FONTS } from "../constants";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Home({ navigation, changedAnnons }) {
  // Ignores error, error is only a issue if using state persistence or deep link
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);
  //States of db data
  const [categories, setCategories] = useState(db.categoryData);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [annons, setAnnons] = useState(changedAnnons);

  //States of search inputfield
  const [text, onChangeText] = useState();
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState(annons);

  db.categoryData = categoryData;

  // Function for searching a annons
  function searchAnnons(text) {
    if (text) {
      let filterdAnnonsBySearch = annons.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      console.log("entered");
      console.log(filterdAnnonsBySearch);
      setFilteredDataSource(filterdAnnonsBySearch);
      setSearch(text);
    } else {
      // console.log("entered not");
      setFilteredDataSource(annons);
      setSearch(text);
    }
  }

  //Function to mark and select a category
  function onSelectCategory(category) {
    //filter Annonser
    let annonsList = changedAnnons.filter((a) =>
      a.categories.includes(category.key)
    );
    setFilteredDataSource(annonsList);

    setSelectedCategory(category);
    // console.log(annons);
  }
  // Get annons name for filtering
  function getAnonnsNameById(key) {
    let category = categoryData.filter((a) => a.key == key);

    if (category.length > 0) return category[0].name;

    return "";
  }
  // Structur of search bar
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
          onPress={() => {
            searchAnnons(text);
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
            ...FONTS.h4,
          }}
          onChangeText={onChangeText}
          value={text}
        ></TextInput>
      </View>
    );
  }

  // Main categories
  function renderMainCategories() {
    const renderItem = ({ item }) => {
      return (
        
          <TouchableOpacity
            style={{
              padding: SIZES.padding,
              paddingBottom: SIZES.padding * 2,
              backgroundColor: item.backgroundColor,
              borderWidth: selectedCategory?.key === item.key ? 2 : 0,
              borderRadius: SIZES.radius / 2,
              alignItems: "center",
              marginRight: SIZES.padding,
              justifyContent: "center",
              ...styles.shadow,
            }}
            onPress={() => onSelectCategory(item)}
          >
            {/* Container category image */}
            <View
              style={{
                width: wp(15),
                height: hp(10),
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
              {/* Category item image */}
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
          keyExtractor={(item) => `${item.key}`}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
        />
      </View>
    );
  }
  // Renders all annons available
  function renderAnnonsList() {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{
          marginLeft: SIZES.padding * 2,
          marginBottom: SIZES.padding * 2,
          width: wp(65),
          backgroundColor: "#FFFFEC",
          borderRadius: 10,
        }}
        onPress={() =>
          navigation.navigate("Annons", {
            item,
            location,
          })
        }
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
            resizeMode="contain"
            style={{
              borderTopLeftRadius: SIZES.radius,
              width: wp(65),
              height: hp(35),
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
              height: 120,
              width: 250,
              backgroundColor: COLORS.white,
              ...FONTS.h3,
            }}
          >
            <Text
              style={{
                ...FONTS.h3,
              }}
            >
              {item.foodName}
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
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item.categories.map((annonsId) => {
                return (
                  <View key={annonsId}>
                    <Text>{getAnonnsNameById(annonsId)}</Text>
                  </View>
                );
              })}
            </View>
            {/* Location */}
            <View
              style={{
                flexDirection: "row",
                paddingTop: SIZES.padding * 0.2,
              }}
            >
              <Image source={icons.location} />
              <Text>{item.location}</Text>
              <Text
                style={{
                  ...FONTS.h3,
                  color: COLORS.darkgray,
                }}
              >
                {" "}
                .{" "}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            padding: SIZES.padding * 2,
            textAlign: "center",
          }}
        >
          <Text style={{ ...(FONTS.h5 * 2) }}>Trött på det gamla vanliga?</Text>
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          {/* Renders all annons and updates when filterd by category */}
          <FlatList
            data={filteredDataSource}
            keyExtractor={(item) => `${item.key}`}
            renderItem={renderItem}
            contentContainerStyle={{
            paddingHorizontal: SIZES.padding * 2,
            }}
          />
        </View>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* Error vizual */}
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <View style={{ alignItems: "center" }}>{renderSearchBar()}</View>
            <View style={{ alignItems: "center", height: 200 }}>
              {renderMainCategories()}
            </View>
            <View style={{alignItems: 'center'}}>{renderAnnonsList()}</View>
          </ScrollView>
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
});
