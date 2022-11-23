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
  ImageBackground
} from "react-native";
import {React, useState} from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { icons, images, COLORS, FONTS, SIZES } from "../constants/index";
import Input from "../constants/RegistrationPage/input";
import Button from "../constants/RegistrationPage/button";
import Loader from "../constants/RegistrationPage/loader";
import alert from "../constants/alert";

const Login = ({ navigation }) => {

  const [loading, setLoading] = useState(false);

  const [inputs, setInputs] = useState({
    email: "",
    username: "",
    fullname: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  let valid = true;

  const validate = () => {
    Keyboard.dismiss();

    if (!inputs.username) {
      handleError("Please input username", "username");
    }

    if (!inputs.password) {
      handleError("Please input password", "password");
    } 

    if (valid) {
      signIn();
    }
  };

  const signIn = () => {
   setLoading(true)
   setTimeout(async () => {
    setLoading(false)
    let userData = await AsyncStorage.getItem('user')
    console.log(userData.email)
    if(userData){

      userData = JSON.parse(userData);
      if(
        inputs.username == userData.username && 
        inputs.password == userData.password){
        AsyncStorage.setItem('user', JSON.stringify({...userData, loggedIn: true}))
        console.log(`userdata: ${userData}`);
        console.log('Im in');
        navigation.navigate('Home')
      }else{
         alert("Invalid details");
         valid = false;
      }

    } else {
      alert('User does not exist')
      valid = false;
    }
   }, 3000)
  };

  // console.log(errors)
  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
    // console.log(text);
  };

  const handleError = (errorMessage, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  };
  return (
    <SafeAreaView style={{alignItems: 'center', textAlign: 'center'}}>
      <ImageBackground
        source={images.pastaSalad}
        resizeMode="contain"
        
        style={styles.backgroundImage}
        imageStyle={{ opacity: 0.4 }}
      >
        <Loader visible={loading} />
        <ScrollView
          contentContainerStyle={{
            paddingTop: 50,
            paddingHorizontal: 20,
            flex: 1,
            borderWidth: 1,
          }}
        >
          <Text
            style={{ color: COLORS.white, fontSize: 40, fontWeight: "bold" }}
          >
            SmartWaste
          </Text>
          <Text
            style={{ color: COLORS.white, fontSize: 40, fontWeight: "bold" }}
          >
            Login
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
          <View style={{ marginVertical: 20, alignItems: 'center'}}>
            {/* <Input
            placeholder="exempel@hotmail.com"
            iconName={icons.regEmail}
            label="Email"
            error={errors.email}
            onFocus={() => {
              handleError(null, "email");
            }}
            onChangeText={(text) => handleOnChange(text, "email")}
          /> */}
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
            <Button title="Logga in" onPress={validate} />

            <Text
              style={{
                paddingTop: 15,
                color: COLORS.white,
                textAlign: "center",
                fontSize: 17,
                fontWeight: 'bold',
              }}
              onPress={() => navigation.navigate("Register")}
            >
              Har du inte ett konto? Registrera dig
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
    position: "absolute",
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    width: d.width,
    height: d.height * 1.09,
    
  },
});

const Styles = StyleSheet.create({});

export default Login;