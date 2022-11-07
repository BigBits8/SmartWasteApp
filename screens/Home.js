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
  Key
} from "react-native";
// import { FlatList } from "react-native-gesture-handler";
import Modal from "react-native-modal";
import mockData from "../constants/mock";
import db, {  categoryData } from "../constants/db";
import { images, icons } from "../constants";
import { COLORS, SIZES, FONTS } from "../constants";

export default function Home({ navigation, changedAnnons }) {
  //States for Mock data
  const [categories, setCategories] = useState(db.categoryData);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [annons, setAnnons] = useState(changedAnnons);

  //States for search inputfield
  const [text, onChangeText] = useState();
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState(annons);

  
  db.categoryData = categoryData;

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
      console.log("entered not");
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

  function getAnonnsNameById(key) {
    let category = categoryData.filter((a) => a.key == key);

    if (category.length > 0) return category[0].name;

    return "";
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
            borderWidth: selectedCategory?.key === item.key ? 2 : 0,
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
          keyExtractor={(item) => `${item.key}`}
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
              height: 120,
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
          {/* Categories */}
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
          }}
        >
          <Text style={{ ...(FONTS.h5 * 2) }}>Trött på det gamla vanliga?</Text>
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          <FlatList
            data={filteredDataSource}
            // numColumns={2}
            keyExtractor={(item) => `${item.key}`}
            renderItem={renderItem}
            contentContainerStyle={{
              paddingHorizontal: SIZES.padding * 2,
              // paddingBottom: 350,
            }}
          />
        </View>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      {renderSearchBar()}
      {renderMainCategories()}
      {renderAnnonsList()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
});
