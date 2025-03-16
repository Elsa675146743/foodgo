import React, { useState } from "react";
import { View, Text, TextInput, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';

const allCategories = ["All", "Combos", "Sliders", "Classic"];
const burgers = [
  { id: "1", name: "Cheeseburger wendy’s Burger", rating: 4.9, image: require("../../../assets/images/Wendy's.png"), screen: "Accueil1" },
  { id: "2", name: "Cheeseburger veggie Burger", rating: 4.8, image: require("../../../assets/images/VeggieBurger.png"), screen: "Accueil2" },
  { id: "3", name: "Cheeseburger chicken Burger", rating: 4.6, image: require("../../../assets/images/ChickenBurger.png"), screen: "Accueil3" },
  { id: "4", name: "Cheeseburger fried chicken Burger", rating: 4.5, image: require("../../../assets/images/FriedChicken.png"), screen: "Accueil4" },
];

const FoodListScreen = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBurgers = burgers.filter((burger) =>
    burger.name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.logo}>foodgo</Text>
          <Text style={styles.tagline}>order your favorite food!</Text>
        </View>
        <TouchableOpacity onPress={() => router.push("/profile")}> 
          <Image source={require("../../../assets/images/profile.jpg")} style={styles.profilePic} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchOptionsContainer}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="options" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryContainer}>
        {allCategories.map((cat, index) => (
          <TouchableOpacity key={index} disabled={cat !== "All"} onPress={() => setSelectedCategory(cat)}>
            <Text style={[cat === "All" ? styles.categoryTextAll : styles.categoryTextOther, selectedCategory === cat && styles.categorySelected]}>
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={filteredBurgers}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              switch (item.name) {
                case "Cheeseburger wendy’s Burger":
                  router.push("/Accueil1");
                  break;
                case "Cheeseburger veggie Burger":
                  router.push("/Accueil2");
                  break;
                case "Cheeseburger chicken Burger":
                  router.push("/Accueil3");
                  break;
                case "Cheeseburger fried chicken Burger":
                  router.push("/Accueil4");
                  break;
                default:
                  console.warn("Page non trouvée !");
              }
            }}
          >
            <Image source={item.image} style={styles.burgerImage} />
            <Text style={styles.burgerName}>{item.name}</Text>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={16} color="#ff9800" />
              <Text style={styles.rating}>{item.rating}</Text>
              <Ionicons name="heart" size={12} color="#ff3d3d" style={styles.heartIcon} />
            </View>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.fab} onPress={() => router.push('/Accueil5')}>
        <Ionicons name="add" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#fff",
    padding: 1 
  },
  header: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center",
    padding: 10,
    marginTop: 20
  },
  tagline: {
    fontSize: 14,
    color: "#888"
  },
  logo: { 
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "italic"
  },
  profilePic: {
    width: 40, 
    height: 40,
    borderRadius: 15 
  },
  searchOptionsContainer: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginVertical: 10,
    marginTop: 20
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 5,
    paddingHorizontal: 40,
    marginLeft: 50,
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
  searchIcon: {
    marginRight: 8 
  },
  searchInput: {
    flex: 1 
  },
  filterButton: {
    backgroundColor: "#EF2A39", 
    padding: 10, 
    borderRadius: 15, 
    marginLeft: 15 
  },
  categoryContainer: {
    flexDirection: "row", 
    alignItems: "center",
    paddingVertical: 15,
    padding: 10, 
    borderRadius: 50 
  },
  categoryTextAll: {
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 20,
    color: "#777",
    borderWidth: 1,
    borderColor: "#ff3d3d",
    textAlign: "center",
    marginRight: 10,
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
  categoryTextOther: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 20,
    color: "#FFF",
    borderWidth: 1,
    borderColor: "#D9D9D9",
    textAlign: "center",
    marginRight: 25,
    backgroundColor: "#D9D9D9",
  },
  categorySelected: {
    backgroundColor: "#EF2A39", 
    color: "#fff" 
  },
  ratingContainer: { 
    flexDirection: "row", 
    alignItems: "center", 
    position: "relative", 
    marginTop: 5 
  },
  rating: { 
    marginLeft: 4,
    color: "#ff9800",
    fontWeight: "bold"
  },
  heartIcon: { 
    position: "absolute", 
    left: 50, 
    top: -1 
  },
  card: {
    flex: 1, 
    margin: 15, 
    backgroundColor: "#fff",
    borderRadius: 10, 
    padding: 10, 
    alignItems: "center",
    elevation: 3 
  },
  burgerImage: {
    width: 100,
    height: 100, 
    resizeMode: "contain"
  },
  burgerName: {
    fontSize: 14,
    fontWeight: "bold", 
    textAlign: "center"
  },
  fab: { 
    position: "absolute",
    bottom: 2, 
    alignSelf: "center",
    backgroundColor: "#EF2A39",
    padding: 15, 
    borderRadius: 30,
    elevation: 5 
  },
});

export default FoodListScreen;
