import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  Switch,
} from "react-native";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const lightTheme = {
  backgroundColor: "#222",
  textColor: "#000",
  // ... other styles
};

const darkTheme = {
  backgroundColor: "#1B1B31",
  textColor: "#fff",
  // ... other styles
};
import MyDrawer from "./myDrawer";
import ProfileScreen from "./ProfileScreen";
import PersonalScreen from "./PersonalScreen";
import SettingsScreen from "./SettingsScreen";
import { DarkTheme } from "@react-navigation/native";

const HomeScreen = () => {
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
      style={[
        styles.container,
        {
          backgroundColor: theme.backgroundColor,
          color: theme.textColor,
        },
      ]}
    >
      <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
        <Router>
          <View style={styles.nav}>
            <TouchableOpacity onPress={toggleTheme}>
              <Image
                source={require("../assets/darkmode.png")}
                style={styles.darkmode}
              />
            </TouchableOpacity>
            <Link to="/PersonalScreen" style={styles.nav1}>
              <Image
                source={require("../assets/personal.png")}
                style={styles.img}
              />
              Personal Details
            </Link>

            <Link to="/ProfileScreen" style={styles.nav1}>
              <Image
                source={require("../assets/Profile.png")}
                style={styles.img}
              />
              Profile
            </Link>

            <Link to="/SettingsScreen" style={styles.nav1}>
              <Image
                source={require("../assets/settings.png")}
                style={styles.img}
              />
              Settings
            </Link>

            <Link to="/myDrawer " style={styles.nav1}>
              <Image
                source={require("../assets/Home.png")}
                style={styles.img}
              />
              Home
            </Link>
          </View>
          <Routes>
            <Route path="/PersonalScreen" element={<PersonalScreen />} />

            <Route path="/ProfileScreen" element={<ProfileScreen />} />
            <Route path="/SettingsScreen" element={<SettingsScreen />} />
            <Route path="/myDrawer" element={<MyDrawer />} />
          </Routes>
        </Router>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1B31",
    paddingTop: 20,
    width: "100%",
  },
  header1: {
    alignItems: "center",
    fontFamily: "font2",
  },
  nav1: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 50,
    fontSize: 20,
    color: "blue",
    textDecorationLine: "none",
    fontWeight: "condensed",
    fontFamily: "font2",
  },

  nav: {
    alignItems: "flex-end",
    flexDirection: "row-reverse",
    buttom: 50,
    flexDirection: "row-reverse",
  },
  img: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    flexDirection: "row",
    top: 25,
    right: 30,
    tintColor: "red",
  },
  header: {},
  darkmode: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
});
