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
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
        <ImageBackground
          source={require("../assets/back.jpg")}
          style={styles.contact1}
        ></ImageBackground>
        <View style={styles.contact}>
          <Text style={styles.contact3}>CONTACT ME</Text>
          <Text style={styles.contact4}>Phone and Email</Text>
          <Image
            source={require("../assets/phone.png")}
            style={styles.footer}
          />
          <Text style={styles.footers}> +233 551 957 522 </Text>
          <Image
            source={require("../assets/message.png")}
            style={styles.footer}
          />
          <Text style={styles.footers}>sgyampoh005@st.ug.edu.gh</Text>
          <TouchableOpacity style={styles.footer1}>
            <Link to="https://web.whatsapp.com" style={styles.footer3}>
              <Image
                source={require("../assets/whatsapp.jpeg")}
                style={styles.footer2}
              />
            </Link>
            <Link to="https://github.com/gyampson" style={styles.footer3}>
              <Image
                source={require("../assets/github.jpeg")}
                style={styles.footer2}
              />
            </Link>
            <Link
              to="https://www.linkedin.com/in/samson-gyampoh-6921b7313/"
              style={styles.footer3}
            >
              <Image
                source={require("../assets/linkedin.png")}
                style={styles.footer2}
              />
            </Link>
            <Link to="https://x.com/GyampohSam54898" style={styles.footer3}>
              <Image
                source={require("../assets/twitter.png")}
                style={styles.footer2}
              />
            </Link>
            <Link
              to="https://www.instagram.com/sam_mysg/"
              style={styles.footer3}
            >
              <Image
                source={require("../assets/instagram.jpeg")}
                style={styles.footer2}
              />
            </Link>
            <Link
              to="https://web.facebook.com/samson.kwaku.142/"
              style={styles.footer3}
            >
              <Image
                source={require("../assets/facebook.png")}
                style={styles.footer2}
              />
            </Link>
            <Link to="https://web.snapchat.com/" style={styles.footer3}>
              <Image
                source={require("../assets/snapchat.png")}
                style={styles.footer2}
              />
            </Link>
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
    backgroundColor: "transparent",
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
  contact: {
    backgroundColor: "#1B1B31",
    width: "70%",
    height: "40%",
    alignItems: "center",
    bottom: 200,
    left: 200,
  },
  contact1: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "#1B1B31",
    opacity: 0.7,
    zIndex: -1,
  },
  contact3: {
    fontSize: 30,
    fontFamily: "font3",
    fontWeight: "bold",
    color: "white",
  },
  contact4: {
    fontSize: 25,
    fontFamily: "font3",
    fontWeight: "bold",
    color: "white",
  },
  footer: {
    tintColor: "white",
    width: 25,
    height: 25,
    top: 10,
    resizeMode: "contain",
  },
  footer1: {
    flexDirection: "row",
    top: 200,
  },
  footer2: {
    marginLeft: 20,
    width: 25,
    height: 25,
    resizeMode: "cover",
    borderRadius: 15,
  },
  footers: {
    fontSize: 15,
    color: "white",
    marginTop: 10,
    fontFamily: "font3",
    fontWeight: "bold",
    marginLeft: 10,
    left: 120,
    bottom: 25,
  },
});
