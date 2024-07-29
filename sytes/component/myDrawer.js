import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useEffect } from "react";
const lightTheme = {
  backgroundColor: "#222",
  textColor: "#000",
  // ... other styles
};

const darkTheme = {
  backgroundColor: "yellow",
  textColor: "#fff",
  // ... other styles
};

import SettingsScreen from "./SettingsScreen";
import PersonalScreen from "./PersonalScreen";
import ProfileScreen from "./ProfileScreen";
import HomeScreen from "./HomeScreen";

const myDrawer = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
      setIsDarkMode(prefersDark.matches);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "light" : "dark");
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <Text>highlight</Text>
      <Image source={require("../assets/Home.png")} style={styles.img} />
    </View>
  );
};

export default myDrawer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    height: "1000%",
  },
  img: {
    buttom: 100,
    width: 30,
    height: 30,
    resizeMode: "contain",
    alignSelf: "center",
  },
});
