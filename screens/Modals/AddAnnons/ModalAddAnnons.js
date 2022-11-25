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

import { images, icons } from "../../../constants";
import { COLORS, SIZES, FONTS } from "../../../constants";

// Modal for showing confirmation message in addAnnons page
export default function modalAddAnnons({
  modalOpen,
  setModalOpen,
  navigation,
}) {
  return (
    <Modal isVisible={modalOpen}>
      <View style={styles.viewContainer}>
        <Text style={styles.modalText}>Tack för din annons!</Text>

        <TouchableOpacity
          style={[styles.buttons, styles.backgroundColorGreen]}
          onPress={() => {
            setModalOpen(false);
            navigation.navigate("Annonser");
          }}
        >
          <Text style={styles.showAnnonsButton}>Visa mina annonser</Text>
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
}

const styles = StyleSheet.create({
  viewContainer: {
    height: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    borderBottomWidth: 1,
    marginBottom: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  showAnnonsButton: {
    color: COLORS.white,
    fontWeight: "500",
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
