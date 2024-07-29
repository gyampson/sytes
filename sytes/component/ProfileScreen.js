import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
const lightTheme = {
  backgroundColor: "#222",
  textColor: "#000",
  // ... other styles
};

const darkTheme = {
  backgroundColor: "green",
  textColor: "#fff",
  // ... other styles
};

const ProfileScreen = () => {
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
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    height: "1000%",
    backgroundColor: "green",
  },
});
