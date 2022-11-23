import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Image,
  Text,
  TouchableOpacity,
  Keyboard,
  Alert,
  Dimensions,
  ImageBackground,
} from "react-native";
import { React, useState } from "react";
import { icons, images, COLORS, FONTS, SIZES } from "../constants/index";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Input from "../constants/RegistrationPage/input";
import Button from "../constants/RegistrationPage/button";
import Loader from "../constants/RegistrationPage/loader";
const Register = ({navigation}) => {

  const [loading, setLoading] = useState(false)
  
  const [inputs, setInputs] = useState({
    email: '',
    username: '',
    fullname: '',
    phone: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  let valid = true;

  const validate = () =>{

    Keyboard.dismiss();

    if (!inputs.email){
      handleError('Please input email', 'email')
      valid = false;
    }else if(!inputs.email.match(/\S+@\S+\.\S+/)){
      handleError('Please input a valid email', 'email')
      valid = false;
    }

    if(!inputs.username){
      handleError("Please input username", "username");
      valid = false;
    }

    if(!inputs.fullname){
      handleError("Please input fullname", "fullname");
      valid = false;
    }

    if(!inputs.phone){
      handleError("Please input phone", "phone");
      valid = false;
    }

    if(!inputs.password){
      handleError("Please input password", "password");
      valid = false;
    }else if (inputs.password.length < 5){
      handleError('Min password length of 5', 'password')
      valid = false;
    }

    if(valid) {
      register();
    }
  };

  const register = () =>{
    setLoading(true)

    setTimeout(() =>{
      setLoading(false);
      try {
        AsyncStorage.setItem('user', JSON.stringify(inputs))
        // let sync = AsyncStorage.getItem('user');
        // console.log(sync.email)
        navigation.navigate('Login')
        console.log()
      } catch (error) {
        Alert.alert('Error', 'Något gick fel')
      }
    }, 3000)
  }

  // console.log(errors)
  const handleOnChange = (text, input) => {
    setInputs(prevState =>({...prevState,[input]: text}))
    console.log('working')
    console.log(text)
  };

  const handleError = (errorMessage, input) =>{
    setErrors(prevState => ({...prevState, [input]: errorMessage}))
  }

  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={images.pastaSalad}
        resizeMode="contain"
        
        style={styles.backgroundImage}
        imageStyle={{ opacity: 0.7 }}
      >
        <Loader visible={loading} />
        <ScrollView
          contentContainerStyle={{
            paddingTop: 50,
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{ color: COLORS.white, fontSize: 40, fontWeight: "bold" }}
          >
            Registrera
          </Text>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 18,
              fontWeight: "bold",
              marginVertical: 10,
            }}
          >
            Ange dina uppgifter
          </Text>
          <View style={{ marginVertical: 20 }}>
            <Input
              placeholder="exempel@hotmail.com"
              iconName={icons.regEmail}
              label="Email"
              error={errors.email}
              onFocus={() => {
                handleError(null, "email");
              }}
              onChangeText={(text) => handleOnChange(text, "email")}
            />
            <Input
              placeholder="Exempel: Spaghettipojken11"
              iconName={icons.regUser}
              label="Användarnamn"
              error={errors.username}
              onFocus={() => {
                handleError(null, "username");
              }}
              onChangeText={(text) => handleOnChange(text, "username")}
            />
            <Input
              placeholder="Namn och efternamn"
              iconName={icons.name}
              label="Namn"
              error={errors.fullname}
              onFocus={() => {
                handleError(null, "fullname");
              }}
              onChangeText={(text) => handleOnChange(text, "fullname")}
            />
            <Input
              keyboardType="numeric"
              placeholder="Exempel: 073 ** 67 110"
              iconName={icons.phone}
              label="Telefonnummer"
              error={errors.phone}
              onFocus={() => {
                handleError(null, "phone");
              }}
              onChangeText={(text) => handleOnChange(text, "phone")}
            />
            <Input
              placeholder="Minst 5 tecken"
              label="Lösenord"
              password
              iconName={icons.lock}
              error={errors.password}
              onFocus={() => {
                handleError(null, "password");
              }}
              onChangeText={(text) => handleOnChange(text, "password")}
            />
            <Button
              title="Registrera dig"
              backgroundColor={"rgb(2, 102, 178)"}
              onPress={validate}
            />

            <Text
              style={{
                color: COLORS.white,
                textAlign: "center",
                fontSize: 17,
                fontWeight: 'bold'
              }}
              onPress={() => navigation.navigate("Login")}
            >
              Har du redan ett konto? Logga in
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const d = Dimensions.get("window");

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

  backgroundImage: {
  
  flex: 1,
  backgroundColor:'rgba(0,0,0,0.45)',
  width: d.width,
  height: d.height * 1.09
}
});

const Styles = StyleSheet.create({
  
})

export default Register;
