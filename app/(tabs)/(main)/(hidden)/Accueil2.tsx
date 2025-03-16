import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { useRouter } from 'expo-router';

const ProductDetailScreen = () => {
    const router = useRouter();
    const [portion, setPortion] = useState(2);
    const [spicyLevel, setSpicyLevel] = useState(0);

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
            
            {/* Image du produit */}
            <Image source={require("../../../../assets/images/VeggieBurger.png")} style={styles.productImage} />

            {/* Informations */}
            <Text style={styles.title}>Cheeseburger Veggie Burger</Text>
            <View style={styles.infoRow}>
                <Text style={styles.rating}>⭐ 4.9</Text>
                <Text style={styles.time}>⏳ 26 mins</Text>
            </View>
            <Text style={styles.description}>
                The cheeseburger Wendy’s Burger is a classic fast food burger that packs a punch of flavor in every bite. 
                Made with a juicy beef patty cooked to perfection, it’s topped with melted American cheese, crispy lettuce, 
                ripe tomato, and crunchy pickles.
            </Text>

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
            
            {/* Boutons de commande */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.priceButton}>
                    <Text style={styles.priceText}>$9.99</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.orderButton} onPress={() => router.push('/payement')}>
                    <Text style={styles.orderText}>ORDER NOW</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#fff', 
        padding: 16 
    },
    header: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: 10, 
        marginTop: 20 
    },
    productImage: { 
        width: '100%',
         height: 200, 
         resizeMode: 'contain'
         },
    title: { 
        fontSize: 20, 
        fontWeight: 'bold', 
        marginVertical: 10
     },
    infoRow: { 
        flexDirection: 'row',
         alignItems: 'center', 
         marginBottom: 10 
    },
    rating: { 
        fontSize: 16, 
        marginRight: 10 
    },
    time: { 
        fontSize: 16, 
        color: '#666'
     },
    description: {
         fontSize: 14,
          color: '#666',
           marginBottom: 15
     },
    labelRow: {
         flexDirection: 'row', 
         justifyContent: 'space-between',
          marginVertical: 20 
    },
    rowContainer: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
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
    sliderContainer: {
         flex: 1,
         alignItems: 'center', 
         justifyContent: 'center'
     },
    slider: {
         width: '100%' 
    },
    sliderTextContainer: {
         flexDirection: 'row',
          justifyContent: 'space-between', 
          width: '100%', marginTop: 5 
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
    portionText: { 
        color: '#fff',
         fontSize: 18 
    },
    portionValue: { 
        fontSize: 18, 
        fontWeight: 'bold' 
    },
    buttonContainer: { 
        flexDirection: 'row',
         justifyContent: 'space-between',
          marginTop: 50 
    },
    priceButton: { 
        backgroundColor: '#E53935',
         padding: 15,
          borderRadius: 20
     },
    priceText: { 
        color: '#fff', 
        fontSize: 18 
    },
    orderButton: {
         backgroundColor: '#000', 
         padding: 15, 
         borderRadius: 20 
        },
    orderText: { 
        color: '#fff', 
        fontSize: 18 }
});

export default ProductDetailScreen;
