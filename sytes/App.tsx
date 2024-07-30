import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { FontDisplay, useFonts } from "expo-font";
const font1 = require("./assets/KBold.ttf");
const font2 = require("./assets/face.ttf");
const font3 = require("./assets/didot.ttf");

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import SettingsScreen from "./component/SettingsScreen";
import PersonalScreen from "./component/PersonalScreen";
import ProfileScreen from "./component/ProfileScreen";
import HomeScreen from "./component/HomeScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    font1: require("./assets/KBold.ttf"),
    font2: require("./assets/face.ttf"),
    font3: require("./assets/didot.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
