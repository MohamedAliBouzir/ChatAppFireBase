import { Link } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ListProfil from "../Components/fragmentHome/ListProfil";
import Groupe from "../Components/fragmentHome/Groupe";
import Profile from "../Components/fragmentHome/Profile";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createMaterialBottomTabNavigator();

const Home = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: "tomato" }}
    >
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="user" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ListProfil"
        component={ListProfil}
        options={{
          tabBarLabel: "ListProfil",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Groupe"
        component={Groupe}
        options={{
          tabBarLabel: "Groupe",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Home;

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
  },
});
