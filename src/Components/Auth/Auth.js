import { useState } from "react";
import {
  View,
  Text,
  Pressable,
  ImageBackground,
  TextInput,
  StyleSheet,
} from "react-native";
import initFireBase from "../../../config";

const Auth = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
const auth = initFireBase.auth();
  const handleSubmit = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.replace("Home");
      })
      .catch((error) => {
        setErrorMessage("error");
        console.log(error);
      });
  };

  return (
    <ImageBackground
      source={require("../../../assets/bg.jpg")}
      style={styles.container}
    >
      <View style={styles.container2}>
        <Text
          style={{
            color: "white",
            fontSize: 36,
            fontWeight: "bold",
            alignSelf: "center",
          }}
        >
          Authentification
        </Text>
        <TextInput
          placeholder="Your E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
          onChangeText={(value) => setEmail(value)}
        ></TextInput>
        <TextInput
          placeholder="Password"
          autoCapitalize="none"
          keyboardType="default"
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(value) => setPassword(value)}
        ></TextInput>
        <Pressable
          onPress={handleSubmit}
          style={{
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: "#3B466F",
            alignSelf: "center",
            padding: 10,
          }}
        >
          <Text style={{ fontSize: 19, color: "white" }}>Submit</Text>
        </Pressable>
      </View>
      <Pressable
        onPress={() => navigation.navigate("Register")}
        style={{
          alignItems: "center",
          alignSelf: "flex-end",
          marginRight: 20,
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 15, color: "#3B466F" }}>
          Create new account
        </Text>
      </Pressable>
    </ImageBackground>
  );
};
export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    height: 300,
    width: "90%",
    justifyContent: "center",
    // alignItems:"center",
    backgroundColor: "#0008",
    borderRadius: 10,
    padding: 20,
  },
  input: {
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 10,
  },
});
