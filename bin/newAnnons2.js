import {React, useState} from "react";
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Image,
  Text,
  Button,
} from "react-native";
import { Formik} from 'formik';
import { COLORS } from "../constants";
import { images, icons } from "../constants";
import db, { annonsData, categoryData } from "../constants/db";


export default function NewAnnons() {
  

  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Formik
            initialValues={{
              id: null,
              name: "",
              portion: "",
              categories: [],
              price: "",
              location: "",
              description: "",
              courierName: "",
              info: "",
              ingredients: "",
              aller: "",
            }}
            onSubmit={(values) => {
              addAnnons(values)
              console.log(values);
              console.log(annons)
            }}
          >
            {(props) => (
              <View>
                <Text>Maträtt</Text>

                <TextInput
                  style={[
                    styles.textInput,
                    {
                      borderWidth: 1,
                    },
                  ]}
                  placeholder="Maträtt"
                  onChangeText={props.handleChange("name")}
                  value={props.values.name}
                />

                <TextInput
                  style={[
                    styles.textInput,
                    {
                      borderWidth: 1,
                    },
                  ]}
                  placeholder="Beskrivning"
                  onChangeText={props.handleChange("description")}
                  value={props.values.description}
                />
                
                <TextInput
                  style={[
                    styles.textInput,
                    {
                      borderWidth: 1,
                      height: 100,
                    },
                  ]}
                  placeholder="Ingredientser"
                  onChangeText={props.handleChange("ingredients")}
                  multiline={true}
                  numberOfLines={3}
                  value={props.values.ingredients}
                />

                <TextInput
                  style={[
                    styles.textInput,
                    {
                      borderWidth: 1,
                    },
                  ]}
                  placeholder="Antal portioner"
                  onChangeText={props.handleChange("portion")}
                  value={props.values.portion}
                />

                <TextInput
                  style={[
                    styles.textInput,
                    {
                      borderWidth: 1,
                    },
                  ]}
                  placeholder="Allergener"
                  onChangeText={props.handleChange("aller")}
                  value={props.values.aller}
                />

                <TextInput
                  style={[
                    styles.textInput,
                    {
                      borderWidth: 1,
                    },
                  ]}
                  placeholder="Kategorier"
                  onChangeText={props.handleChange("categories")}
                  value={props.values.categories}
                />

                <TextInput
                  style={[
                    styles.textInput,
                    {
                      borderWidth: 1,
                    },
                  ]}
                  placeholder="Extra info"
                  onChangeText={props.handleChange("info")}
                  value={props.values.info}
                />

                <TextInput
                  style={[
                    styles.textInput,
                    {
                      borderWidth: 1,
                    },
                  ]}
                  placeholder="Pris"
                  onChangeText={props.handleChange("price")}
                  value={props.values.price}
                />

                <TextInput
                  style={[
                    styles.textInput,
                    {
                      borderWidth: 1,
                    },
                  ]}
                  placeholder="Namn"
                  onChangeText={props.handleChange("courierName")}
                  value={props.values.courierName}
                />

                <Button
                  title="submit"
                  color="maroon"
                  onPress={props.handleSubmit}
                />
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    
    
  },
  textInput: {
    justifyContent: "flex-start",
    marginBottom: 20,
  },
});
