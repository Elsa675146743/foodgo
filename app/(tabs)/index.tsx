import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// import burgur from "../../assets/images/burger.png";

const { width } = Dimensions.get("window");

const HomeScreen = () => {
  return (
    <LinearGradient colors={["#ff8a8a", "#e60000"]} style={styles.container}>
      <Text style={styles.title}>Foodgo</Text>

      {/* Images en bas */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/burger.png")} // Remplace par ton URL d'image
          style={[styles.image, styles.leftImage]}
          resizeMode="contain"
        />
        <Image
          source={require("../../assets/images/burger.png")} // Remplace par ton URL d'image
          style={[styles.image, styles.rightImage]}
          resizeMode="contain"
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 82,
    fontWeight: "bold",
    color: "white",
    fontFamily: "cursive",
    marginBottom: "60%",
  },
  imageContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 20,
    width: width,
    justifyContent: "space-evenly",
  },
  image: {
    width: 120,
    height: 120,
  },
  leftImage: {
    transform: [{ translateX: -30 }],
  },
  rightImage: {
    transform: [{ translateX: 30 }],
  },
});

export default HomeScreen;
