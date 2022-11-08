import { React, useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
} from "react-native";

import Modal from "react-native-modal";

import { images, icons } from "../constants";
import { COLORS, SIZES, FONTS } from "../constants";

export default function renderModal({modalOpen, setModelOpen, navigation}) {
  return (
    <Modal isVisible={modalOpen}>
      <View
        style={{
          height: "80%",
          backgroundColor: "white",
          borderRadius: 10,
          borderBottomWidth: 1,
          marginBottom: 80,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.modalText}>Tack för din annons!</Text>
        <TouchableOpacity
          style={[styles.buttons, styles.backgroundColorGreen]}
          onPress={() => {
            setModelOpen(false);
            navigation.navigate("Annonser");
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              fontWeight: "500",
            }}
          >
            Visa mina annonser
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttons, styles.borderWidth]}
          onPress={() => {
            setModelOpen(false);
          }}
        >
          <Text>Skapa en ny annons</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};


const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
  },
  textInput: {
    justifyContent: "flex-start",
    marginBottom: 20,
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 40,

    borderRadius: 5,
    marginBottom: 40,
  },
  modalText: {
    borderBottomWidth: 2,
    color: "black",
    marginBottom: 100,
    fontSize: 30,
    fontWeight: "500",
  },
  backgroundColorGreen: {
    backgroundColor: "#2492FF",
  },
  borderWidth: {
    borderWidth: 2,
  },
});