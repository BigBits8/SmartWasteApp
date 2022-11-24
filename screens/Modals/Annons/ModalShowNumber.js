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

export default function modalShowNumber({
  modalOpen,
  setModalOpen,
  navigation,
  annons
}) {
  // const [modalSwitch, setmodalSwitch] = useState(modalOpen);
  return (
    <Modal
      style={styles.modal}
      isVisible={modalOpen}
      onRequestClose={() => {
        setModalOpen(false);
      }}
      onBackdropPress={() => setModalOpen(false)}
    >
      <View style={styles.viewContainer}>
        <Text style={styles.modalText}>{annons?.courier.name}</Text>
        <Text style={styles.modalNumber}>{annons?.courier.phone}</Text>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Image source={icons.phone} style={styles.image} />
          <Text style={styles.imageText}>Ring</Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    width: "100%",
    margin: 0,
  },
  viewContainer: {
    height: "20%",
    marginTop: "auto",
    backgroundColor: "white",
    paddingLeft: 10,
  },
  showAnnonsButton: {
    color: COLORS.white,
    fontWeight: "500",
  },

  modalText: {
    color: "black",
    marginBottom: 10,
    fontSize: 30,
    fontWeight: "500",
  },
  modalNumber: {
    color: COLORS.darkgray,
    fontSize: 20,
    marginBottom: 20,
  },
  backgroundColorGreen: {
    backgroundColor: "#2492FF",
  },
  image: {
    width: 30,
    height: 30,
  },
  imageText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "400",
  },
});
