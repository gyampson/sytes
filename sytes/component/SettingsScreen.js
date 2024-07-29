import { StyleSheet, Text, View, Switch } from "react-native";
import React, { useState, useEffect } from "react";
const lightTheme = {
  backgroundColor: "#222",
  textColor: "#000",
  // ... other styles
};

const darkTheme = {
  backgroundColor: "red",
  textColor: "#fff",
  // ... other styles
};

const SettingsScreen = () => {
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
      <Text>SettingsScreen #1B1B31</Text>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    height: "1000%",
  },
});
