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
  StatusBar
} from "react-native";
import { React, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { icons, images, COLORS, FONTS, SIZES } from "../constants/index";
import Input from "../constants/RegistrationPage/input";
import Button from "../constants/RegistrationPage/button";
import Loader from "../constants/RegistrationPage/loader";
import alert from "../constants/alert";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

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
  // If true, login, if false show error
  let valid = true;

  // To validate username and password
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
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      // Get user info saved in storage
      let userData = await AsyncStorage.getItem("user");
      // console.log(userData.email)
      if (userData) {
        // Makes it a json object
        userData = JSON.parse(userData);

        if (
          inputs.username == userData.username &&
          inputs.password == userData.password
        ) {
          // If passes, make loggedin true
          AsyncStorage.setItem(
            "user",
            JSON.stringify({ ...userData, loggedIn: true })
          );
          // console.log(`userdata: ${userData}`);
          navigation.navigate("Home");
        } else {
          alert("Invalid details");
          valid = false;
        }
      } else {
        alert("User does not exist");
        valid = false;
      }
    }, 3000);
  };
  // Updates the state of user info in Inputs state, to what the user is typing
  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
    // console.log(text);
  };
  // Updates the state of error in error state, to show error
  const handleError = (errorMessage, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  };
  return (
    <SafeAreaView style={{ alignItems: "center", textAlign: "center" }}>
      {/* Background image */}
      <ImageBackground
        source={images.pastaSalad}
        resizeMode="contain"
        style={styles.backgroundImage}
        imageStyle={{ opacity: 0.2 }}
      >
        {/* Show loader if true */}
        <Loader visible={loading} />
        <ScrollView
          contentContainerStyle={{
            paddingTop: StatusBar.currentHeight,
            paddingHorizontal: 20,
            flex: 1,
            borderWidth: 1,
          }}
        >
          {/* Headers */}
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
          {/* Input fields */}
          <View style={{ marginVertical: 20, alignItems: "center" }}>
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
            {/* Button login */}
            <Button title="Logga in" onPress={validate} />

            <Text
              style={{
                paddingTop: 15,
                color: COLORS.white,
                textAlign: "center",
                fontSize: 17,
                fontWeight: "bold",
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

// Get the dimension of user screen
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
