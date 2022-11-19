import { View, Image, Text } from "react-native";
import {
  StyleSheet,
  TextInput,
  Pressable,
  ImageBackground,
} from "react-native";
import React from "react";

const Profile = ({navigation}) => {
  return (
    <ImageBackground
      source={require("./../../../assets/bg.jpg")}
      style={styles.container}
    >
      <View style={styles.container}>
        <View style={styles.container2}>
          <Text
            style={{
              color: "white",
              fontSize: 36,
              fontWeight: "bold",
              alignSelf: "center",
            }}
          >
            Profile
          </Text>
          <Image
            style={styles.tinyLogo}
            source={require("./../../../assets/favicon.png")}
          />
          <TextInput
            placeholder="nom"
            keyboardType="default"
            autoCapitalize="none"
            style={styles.input}
          ></TextInput>
          <TextInput
            placeholder="Prénom"
            keyboardType="default"
            autoCapitalize="none"
            style={styles.input}
          ></TextInput>
          <TextInput
            placeholder="Pseudo"
            keyboardType="default"
            autoCapitalize="none"
            style={styles.input}
          ></TextInput>
          <Pressable
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
      </View>
    </ImageBackground>
  );
}
export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    height: "auto",
    width: 300,
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
    textAlign:"center"
  },
  tinyLogo: {
    width: 60,
    height: 70,
    alignSelf:"center"
  }
});