import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


const PaymentSuccessScreen = () => {
        const router = useRouter();
    
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Ionicons name="checkmark-circle" size={60} color="#EF2A39" />
                <Text style={styles.successText}>Success!</Text>
                <Text style={styles.message}>Your payment was successful. A receipt for this purchase has been sent to your email.</Text>
                <TouchableOpacity style={styles.button} onPress={() => router.push('/Accueil')}>
                    <Text style={styles.buttonText}>Go Back</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
         flex: 1,
          justifyContent: 'center', 
          alignItems: 'center',
           backgroundColor: '#f8f8f8' 
    },
    card: { 
        backgroundColor: 'white',
        padding: 30, borderRadius: 15,
         alignItems: 'center',
         shadowColor: '#000', 
         shadowOpacity: 0.2,
        shadowRadius: 10, 
        elevation: 5
     },
    successText: {
         fontSize: 22,
         fontWeight: 'bold',
        color: '#EF2A39',
         marginTop: 10 
    },
    message: {
         fontSize: 14,
         textAlign: 'center',
        color: '#555',
        marginVertical: 10 
       
    },
    button: { 
        backgroundColor: '#EF2A39',
         paddingVertical: 10, 
         paddingHorizontal: 20,
          borderRadius: 5, 
          marginTop: 15
     },
    buttonText: {
         color: 'white',
         fontSize: 16, 
          fontWeight: 'bold'
     }
});

export default PaymentSuccessScreen;
