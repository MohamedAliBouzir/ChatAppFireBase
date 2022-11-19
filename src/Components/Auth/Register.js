import { useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  ImageBackground,
  TextInput,
  StyleSheet,
} from "react-native";
import initFireBase from "./../../../config";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [confirmation, setConfirmation] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [errormessage, setErrorMessage] = useState(null);

  const auth = initFireBase.auth();
  const handleSubmit = () => {
    setErrorMessage(null);
    setSubmitClicked(true);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigation.replace("Home");
      })
      .catch((error) => {
        setErrorMessage("error");
        console.log(error);
      });
  };
  useEffect(() => {
    if (password != null) {
      if (password != confirmPassword) {
        setConfirmation(false);
      } else {
        setConfirmation(true);
      }
    }
  }, [password, confirmPassword]);

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
          Register
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
        <TextInput
          placeholder="Confirm Password"
          autoCapitalize="none"
          keyboardType="default"
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(value) => setConfirmPassword(value)}
        ></TextInput>
        {confirmation == false &&
        password != null &&
        confirmPassword != null &&
        submitClicked != false ? (
          <View>
            <Text>Password aren't the same</Text>
          </View>
        ) : null}
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
        onPress={() => navigation.goBack()}
        style={{
          alignItems: "center",
          alignSelf: "flex-end",
          marginRight: 20,
          marginTop: 10,
        }}
      >
        <Text> Sign In ?</Text>
      </Pressable>
      {errormessage != null ? (
        <>
          <Text>errormessage</Text>
        </>
      ) : null}
    </ImageBackground>
  );
};
export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    height: "auto",
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
