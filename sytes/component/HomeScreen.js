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
  backgroundColor: "grey",
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
      <Router>
        <TouchableOpacity style={styles.nav}>
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
            Personal
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
            <Image source={require("../assets/Home.png")} style={styles.img} />
            Home
          </Link>
          <TouchableOpacity style={styles.samson1}>
            <Image
              source={require("../assets/samson.jpg")}
              style={styles.samson}
            />
            <Text style={styles.txt}>SAMSON GYAMPOH </Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <Routes>
          <Route path="/PersonalScreen" element={<PersonalScreen />} />

          <Route path="/ProfileScreen" element={<ProfileScreen />} />
          <Route path="/SettingsScreen" element={<SettingsScreen />} />
          <Route path="/myDrawer" element={<MyDrawer />} />
        </Routes>
      </Router>
      <View>
        <TouchableOpacity style={styles.samson2}>
          <Text style={styles.txt1}>
            Samson Gyampoh, a 28-year-old software engineer from Indonesia, is
            passionate about his work and loves solving complex problems. He
            recently graduated from university with a degree in Computer Science
            and has worked in various industries such as tech, healthcare, and
            finance. He is eager to learn more about the field and share his
            knowledge with others. Samson is a friendly, outgoing, and
            detail-oriented individual who is always ready to help others.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1B31",

    width: "100%",
  },
  header1: {
    alignItems: "center",
    fontFamily: "font2",
  },
  nav1: {
    marginLeft: 50,
    fontSize: 20,
    color: "black",

    fontWeight: "light",
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
    tintColor: "white",
  },
  header: {},
  darkmode: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  samson: {
    width: 60,
    height: 60,
    borderColor: "yellow",
    borderStyle: "solid",
    backgroundColor: "white",

    right: 600,
    resizeMode: "cover",
    borderRadius: 30,
  },
  txt: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",

    right: 600,
    fontFamily: "font2",
  },
});
