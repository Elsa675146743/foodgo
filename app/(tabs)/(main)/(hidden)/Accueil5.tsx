import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { useRouter } from 'expo-router';

export default function BurgerCustomizationScreen() {
  const router = useRouter();
  const [spicyLevel, setSpicyLevel] = useState(0.5);
  const [portion, setPortion] = useState(2);
  const toppings = ['Tomato', 'Cheese', 'Mushroom', 'Avocado'];
  const sides = ['Fries', 'Coleslaw', 'Salad', 'Bacons'];

  const renderOption = (item: string) => (
    <TouchableOpacity style={styles.optionCard}>
      <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.optionImage} />
      <Text>{item}</Text>
      <TouchableOpacity style={styles.addButton}>
        <Text style={{ color: 'white' }}>+</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Barre de navigation */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/Accueil')}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Image et Texte en Row */}
      <View style={styles.headerContainer}>
        <Image source={require("../../../../assets/images/burger2.png")} style={styles.burgerImage} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Customize Your Burger</Text>
          <Text style={styles.description}>Your taste's ultimate experience</Text>
        </View>
      </View>
       {/* Alignement des labels sur la même ligne */}
                  <View style={styles.labelRow}>
                      <Text style={styles.label}>Spicy</Text>
                      <Text style={styles.label1}>Portion</Text>
                  </View>

     {/* Alignement du Slider et du Sélecteur de portion */}
                <View style={styles.rowContainer}>
                    {/* Curseur de piquant */}
                    <View style={styles.sliderContainer}>
                        <Slider
                            style={styles.slider}
                            minimumValue={0}
                            maximumValue={10}
                            step={1}
                            value={spicyLevel}
                            onValueChange={setSpicyLevel}
                            minimumTrackTintColor="#E53935"
                            maximumTrackTintColor="#000"
                        />
                        {/* Texte Mild & Hot en bas du Slider */}
                        <View style={styles.sliderTextContainer}>
                            <Text style={styles.mildText}>Mild</Text>
                            <Text style={styles.hotText}>Hot</Text>
                        </View>
                    </View>
    
                    {/* Sélecteur de portion */}
                    <View style={styles.portionContainer}>
                        <TouchableOpacity onPress={() => setPortion(Math.max(1, portion - 1))} style={styles.portionButton}>
                            <Text style={styles.portionText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.portionValue}>{portion}</Text>
                        <TouchableOpacity onPress={() => setPortion(portion + 1)} style={styles.portionButton}>
                            <Text style={styles.portionText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
      {/* Toppings */}
      <Text style={styles.sectionTitle}>Toppings</Text>
      <FlatList
        data={toppings}
        horizontal
        renderItem={({ item }) => renderOption(item)}
        keyExtractor={(item) => item}
      />

      {/* Side Options */}
      <Text style={styles.sectionTitle}>Side Options</Text>
      <FlatList
        data={sides}
        horizontal
        renderItem={({ item }) => renderOption(item)}
        keyExtractor={(item) => item}
      />

      {/* Total and Order Now */}
      <Text style={styles.totalText}>Total: $16.49</Text>
      <TouchableOpacity style={styles.orderButton} onPress={() => router.push("/payement")}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>ORDER NOW</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  textContainer: {
    marginLeft: 16,
    flex: 1,
  },
  burgerImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 4,
    color: 'gray',
  },
  slider: {
    width: '100%' 
},
 
  counterButton: {
    backgroundColor: '#ddd',
    padding: 10,
    marginHorizontal: 10,
  },
  portionText: {
    fontSize: 20,
  },
  sectionTitle: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
  },
  optionCard: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  optionImage: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  addButton: {
    backgroundColor: 'red',
    borderRadius: 50,
    padding: 5,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  orderButton: {
    backgroundColor: '#EF2A39',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  rowContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
},
mildText: { 
  color: 'green', 
  textAlign: 'left'
},
hotText: {
   color: 'red',
    textAlign: 'right',
   marginRight:20 
},
sliderTextContainer: {
  flexDirection: 'row',
   justifyContent: 'space-between', 
   width: '100%', marginTop: 5 
},
portionContainer: {
  flexDirection: 'row', 
  alignItems: 'center', 
  justifyContent: 'center', 
  flex: 0.5 
},
portionButton: {
  backgroundColor: '#E53935', 
  padding: 10, 
  borderRadius: 5, 
  marginHorizontal: 10 
},
portionValue: { 
  fontSize: 18, 
  fontWeight: 'bold' 
},
sliderContainer: {
  flex: 1,
  alignItems: 'center', 
  justifyContent: 'center'
},
labelRow: {
  flexDirection: 'row', 
  justifyContent: 'space-between',
   marginVertical: 20 
},
label: { 
  fontSize: 16,
   fontWeight: 'bold'
},
label1: {
   fontSize: 16, 
   fontWeight: 'bold',
  marginRight: 60
   },
   
});
