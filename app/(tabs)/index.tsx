import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";

const { width } = Dimensions.get("window");

const HomeScreen = () => {
  const router = useRouter(); // Utilisation d'Expo Router au lieu de React Navigation
  
  // Valeurs d'opacité et de scale pour l'animation
  const opacity = useSharedValue(1);
  const scale = useSharedValue(1);

  useEffect(() => {
    // Lancer l'animation
    opacity.value = withTiming(0, { duration: 1000, easing: Easing.out(Easing.exp) });
    scale.value = withTiming(1.5, { duration: 1000, easing: Easing.out(Easing.exp) });

    // Naviguer vers l'écran "Accueil" après 1.2 secondes
    setTimeout(() => {
      router.push('/Accueil'); // Redirection avec Expo Router
    }, 1200);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  return (
    <LinearGradient colors={["#FF939B", "#EF2A39"]} style={styles.container}>
      <Animated.Text style={styles.title}>Foodgo</Animated.Text>

      {/* Images en bas */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/burger.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <Image 
          source={require("../../assets/images/burger1.png")}
          style={styles.image1}
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
    fontSize: 60,
    fontWeight: "regular",
    color: "white",
    fontFamily: "cursive",
    marginBottom: "60%",
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: width,
    justifyContent: "flex-start",
  },
  image: {
    width: 245,
    height: 329,
  },
  image1: {
    width: 191,
    height: 202,
    marginLeft: -100,
  },
});

export default HomeScreen;
