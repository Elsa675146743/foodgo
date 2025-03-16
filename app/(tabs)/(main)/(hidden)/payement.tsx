import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Switch } from 'react-native';
import { useRouter } from 'expo-router';


const PaymentScreen = () => {
        const router = useRouter();

    
    const [selectedMethod, setSelectedMethod] = useState('credit');
    const [saveCard, setSaveCard] = useState(false);

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="search" size={24} color="black" />
                </TouchableOpacity>
            </View>
            
            {/* Order Summary */}
            <Text style={styles.sectionTitle}>Order Summary</Text>
            <View style={styles.summaryContainer}>
                <View style={styles.summaryRow}><Text>Order</Text><Text>$16.48</Text></View>
                <View style={styles.summaryRow}><Text>Taxes</Text><Text>$0.3</Text></View>
                <View style={styles.summaryRow}><Text>Delivery fees</Text><Text>$1.5</Text></View>
                <View style={styles.summaryRow}><Text style={styles.boldText}>Total:</Text><Text style={styles.boldText}>$18.19</Text></View>
                <View style={styles.summaryRow}><Text>Estimated</Text><Text>15 - 30 mins</Text></View>
            </View>
            
           {/* Payment Methods */}
          <Text style={styles.sectionTitle}>Payment Methods</Text>
      <TouchableOpacity 
      style={[styles.paymentCard, selectedMethod === 'credit' && styles.selectedCard]} 
       onPress={() => setSelectedMethod('credit')}
>
  <View>
    <Text style={styles.cardText}>💳 Credit Card</Text>
    <Text style={styles.cardNumber}>5105 *** *** 0505</Text>
  </View>
  {selectedMethod === 'credit' && <Ionicons name="radio-button-on" size={20} color="white" style={styles.radioIcon} />}
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.paymentCard1, selectedMethod === 'debit' && styles.selectedCard]} 
  onPress={() => setSelectedMethod('debit')}
>
  <View>
    <Text style={styles.cardText}>💳 Debit Card</Text>
    <Text style={styles.cardNumber}>3569 *** *** 0505</Text>
  </View>
  {selectedMethod === 'debit' && <Ionicons name="radio-button-on" size={20} color="black" style={styles.radioIcon} />}
</TouchableOpacity>

            
            {/* Save Card Option */}
            <View style={styles.saveCardContainer}>
              <Switch value={saveCard} onValueChange={setSaveCard} />
              <Text style={styles.saveCardText}>Save card details for future payments</Text>
            </View>

            
            {/* Total Price & Pay Button */}
            <View style={styles.footer}>
             <View>
                <Text style={styles.totalPrice}>Total price:</Text>
                <Text style={styles.priceText}>$16.49</Text>
              </View>
             <TouchableOpacity style={styles.payButton} onPress={() => router.push('/succes')}>
            <Text style={styles.payButtonText}>Pay Now</Text>
           </TouchableOpacity>
</View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1,
         backgroundColor: '#fff', 
         padding: 20
     },
    header: {
         flexDirection: 'row',
          justifyContent: 'space-between',
           marginBottom: 20 ,
           marginTop: 20 
    },
    sectionTitle: { 
        fontSize: 18, 
        fontWeight: 'bold', 
        marginBottom: 10 
    },
    summaryContainer: {
         backgroundColor: '#ffffff',
          padding: 15,
           borderRadius: 20
    },
    summaryRow: { 
        flexDirection: 'row',
         justifyContent: 'space-between',
          marginVertical: 5 
    },
    boldText: {
         fontWeight: 'bold'
     },
    paymentCard: {
         padding: 15, 
         borderRadius: 10,
         backgroundColor: '#3C2F2F',
        marginVertical: 5,
         flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
    },
    paymentCard1: {
        padding: 15, 
        borderRadius: 10,
        backgroundColor: '#f2f2f2',
       marginVertical: 5,
        flexDirection: 'row', 
       justifyContent: 'space-between', 
       alignItems: 'center' 
   },
    selectedCard: {
         backgroundColor: '#333', 
         color: 'white' 
    },
    cardText: {
         fontSize: 16,
         color:'white'
     },
    
    cardNumber: {
         fontSize: 14,
          color: '#888'
     },
    radioIcon: {
         position: 'absolute',
          right: 15 
    },
    saveCardContainer: {
         flexDirection: 'row', 
         alignItems: 'center',
         marginVertical: 15
    },
    saveCardText: {
         marginLeft: 10
     },
    footer: {
         flexDirection: 'row',
          justifyContent: 'space-between',
           alignItems: 'center', 
           marginTop: 20
     },
    totalPrice: { 
        fontSize: 16 
    },
    priceText: {
         fontSize: 20,
          fontWeight: 'bold', 
          color: 'red' 
    },
    payButton: { 
        backgroundColor: '#3C2F2F',
         padding: 15,
          borderRadius: 20
     },
    payButtonText: {
         color: 'white', 
         fontSize: 16 
    }
});

export default PaymentScreen;
