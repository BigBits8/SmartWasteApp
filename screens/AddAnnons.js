import { React, useState } from "react";
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Image,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import { Formik } from "formik";
// import DropDownPicker from "react-native-dropdown-picker";

import { COLORS } from "../constants";
import { images, icons } from "../constants";
import db, { annonsData, categoryData } from "../constants/db";
import ModalAddAnnons from "./Modals/AddAnnons/ModalAddAnnons";

export default function AddAnnons({ navigation, sendAnnonsForm }) {
  const [modalOpen, setModalOpen] = useState(false);
  // const [selectedValue, setSelectedValue] = useState("java");
  // const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(null);
  // const [items, setItems] = useState([
  //   { label: "Kött", value: 1 },
  //   { label: "Fisk", value: 4 },
  // ]);

  return (
    <View>
      {/* Modal */}

      <SafeAreaView style={styles.container}>
        <ModalAddAnnons
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          navigation={navigation}
        />
        <ScrollView>
          <View style={styles.container}>
            <Formik
              initialValues={{
                key: null,
                foodName: "",
                portion: "",
                categories: [6],
                price: "",
                photo: images.fishsoup,
                location: "",
                description: "",
                courier: {
                  profilePicture: images.profilePic,
                  name: "John",
                  phone: '',
                },
                info: "",
                ingredients: [],
                aller: [],
              }}
              onSubmit={(values, actions) => {
                actions.resetForm();
                sendAnnonsForm(values);
                console.log(values);
                setModalOpen(true);
              }}
            >
              {(props) => (
                <View>
                  <Text>Maträtt</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={props.handleChange("foodName")}
                    value={props.values.name}
                  />
                  <Text>Beskrivning</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={props.handleChange("description")}
                    value={props.values.description}
                  />
                  <Text>Ingredientser</Text>
                  <TextInput
                    style={[
                      styles.textInput,
                      {
                        textAlignVertical: "top",

                        height: 100,
                      },
                    ]}
                    onChangeText={props.handleChange("ingredients")}
                    multiline={true}
                    numberOfLines={20}
                    value={props.values.ingredients}
                  />
                  <Text>Antal portioner</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={props.handleChange("portion")}
                    value={props.values.portion}
                  />
                  <Text>Allergener</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={props.handleChange("aller")}
                    value={props.values.aller}
                  />
                  {/* <Text>Kategorier</Text>
            
                    // FOR USER TO INPUT CATEGORY - ERROR
                  <TextInput
                    style={styles.textInput}
                    onChangeText={props.handleChange("categories")}
                    value={props.values.categories}
                  /> */}
                  {/* <DropDownPicker
                    listMode="SCROLLVIEW"
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    onChangeText={props.handleChange("categories")}
                  /> */}
                  <Text>Extra info</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={props.handleChange("info")}
                    value={props.values.info}
                  />
                  <Text>Pris</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={props.handleChange("price")}
                    value={props.values.price}
                  />
                  <Text>Plats</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={props.handleChange("location")}
                    value={props.values.location}
                  />
                  <Text>Namn</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={props.handleChange("courier.name")}
                    value={props.values.courier.name}
                  />
                  <Text>Telefonnummer</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={props.handleChange("courier.phone")}
                    value={props.values.courier.phone}
                  />
                  <Button
                    title="Skapa annons"
                    color="#2492FF"
                    onPress={props.handleSubmit}
                  />
                </View>
              )}
            </Formik>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEEEEE",
    marginTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
  },
  textInput: {
    backgroundColor: "white",
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
    // borderBottomWidth: 2,
    color: "black",
    marginBottom: 100,
    fontSize: 30,
    fontWeight: "500",
  },
  backgroundColorGreen: {
    backgroundColor: "#2492FF",
  },
  borderWidth: {
    borderWidth: 0,
  },
});
