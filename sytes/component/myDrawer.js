import {
  StyleSheet,
  Text,
  View,
  Image,
  Video,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import video from "../assets/video.mp4";
const lightTheme = {
  backgroundColor: "#222",
  textColor: "#000",
  // ... other styles
};

const darkTheme = {
  backgroundColor: "#ccd8db",
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
    <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
      <View
        style={[styles.container, { backgroundColor: theme.backgroundColor }]}
      >
        <View style={styles.menu}>
          <video
            autoplay="true"
            muted="true"
            loop="true"
            width="95%"
            height="67%"
            top="30%"
          >
            <source src="./assets/video.mp4" type="video/mp4" />
          </video>
          <TouchableOpacity style={styles.back2}>
            <Text style={styles.back}>WELCOME TO MY WEBSITE </Text>
            <Text style={styles.back1}> KNOW A LOT ABOUT ME </Text>
            <Text style={styles.back3}> MY PORTFOLIO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.port}>
            <Image
              source={require("../assets/react.png")}
              style={styles.icons}
            />
            <Image
              source={require("../assets/html.jpeg")}
              style={styles.icons}
            />
            <Image
              source={require("../assets/node.jpeg")}
              style={styles.icons}
            />
            <Image
              source={require("../assets/ui_ux.jpeg")}
              style={styles.icons}
            />
            <Image
              source={require("../assets/bootstrap.jpeg")}
              style={styles.icons}
            />
            <Image
              source={require("../assets/javascript.webp")}
              style={styles.icons}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default myDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  back: {
    left: 20,
    bottom: 350,
    color: "white",
    fontSize: 65,
    fontWeight: "bold",
    fontFamily: "font3",
    zIndex: -1,
    alignItems: "center",
  },
  back1: {
    left: 20,
    bottom: 350,
    color: "white",
    fontSize: 35,
    fontFamily: "font1",
  },
  back3: {
    left: 20,
    bottom: 300,
    color: "white",
    fontSize: 35,
    fontFamily: "font2",
    fontWeight: "thin",
  },
  back2: {
    alignItems: "center",
  },
  icons: {
    width: 150,
    height: 150,
    marginLeft: 50,
    bottom: 246,
    right: 20,
    borderColor: "yellow",
    borderStyle: "solid",
    backgroundColor: "white",

    resizeMode: "stretch",
    borderRadius: 100,
  },
  menu: {
    alignItems: "center",
  },
  port: {
    flexDirection: "row",
  },
});
