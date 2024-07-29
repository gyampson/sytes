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
const lightTheme = {
  backgroundColor: "#fff",
  textColor: "#000",
  // ... other styles
};

const darkTheme = {
  backgroundColor: "#222",
  textColor: "#fff",
  // ... other styles
};

export default function App() {
  const [fontsLoaded] = useFonts({
    font1: require("./assets/KBold.ttf"),
    font2: require("./assets/face.ttf"),
    font3: require("./assets/didot.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect(() => {
  //   const savedTheme = localStorage.getItem("theme");
  //   if (savedTheme) {
  //     setIsDarkMode(savedTheme === "dark");
  //   } else {
  //     const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  //     setIsDarkMode(prefersDark.matches);
  //   }
  // }, []);

  // const toggleTheme = () => {
  //   setIsDarkMode(!isDarkMode);
  //   localStorage.setItem("theme", isDarkMode ? "light" : "dark");
  // };

  // const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <View style={styles.container}>
      <HomeScreen />
      {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
