
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { cartStyles } from '../styles/cartStyles';
import { paymentStyles } from '../styles/paymentStyles';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../contexts/CartContext';


export default PaymentScreen = ({ route }) => {

  const {clearCart} = useContext(CartContext); 

    const[cards, setCards]  = useState([
        { id: 1, number: '**** **** **** 1234', holder:'Isabella Martín', expiration:'12/24', logo: 'https://img.icons8.com/color/70/000000/visa.png' },
        { id: 2, number: '**** **** **** 5678', holder:'Liam Johnson', expiration:'12/24',logo: 'https://img.icons8.com/color/70/000000/mastercard.png' },
        { id: 3, number: '**** **** **** 5688', holder:'Sofia Chen', expiration:'12/24', logo:'https://img.icons8.com/color/70/000000/mercado-pago.png' },
      ]);

    const [cardNumber, setCardNumber] = useState('');
    const [expDate, setExpDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [cardHolder, setCardHolder] = useState('');

    const formatCardNumber = (number) => {
      const visibleDigits = number.slice(-4);
      const maskedNumber = '**** **** **** ' + visibleDigits;
      return maskedNumber;
    }


    const validateExpDate = (expDate) => {
      const expDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
      return expDateRegex.test(expDate);
    };

    
    const updateCardDetails = () => {

      if (!cardHolder || !cardNumber || !expDate || !cvv) {
        Alert.alert('Error', 'All the fields are required.');
        return;
      }
      if (!validateExpDate(expDate)) {
        Alert.alert('Error', 'The expiration date format must be "MM/YYY".');
        return;
      }

      let cardNetwork;
      const firstDigit = cardNumber.charAt(0);
    
      if (firstDigit === '4') {
        cardNetwork = 'Visa';
      } else if (firstDigit === '5') {
        cardNetwork = 'Mastercard';
      } else {
        cardNetwork = 'Mercado Pago';
      }
    
    
      const newCards = [...cards];
      const maskedCardNumber = formatCardNumber(cardNumber);
      const newCard = {
          id: cards.length + 1,
          number: maskedCardNumber,
          holder: cardHolder, 
          expiration: expDate,
          logo: cardNetwork === 'Visa' ? 'https://img.icons8.com/color/70/000000/visa.png' : cardNetwork === 'Mastercard' ? 'https://img.icons8.com/color/70/000000/mastercard.png' : 'https://img.icons8.com/color/70/000000/mercado-pago.png',
      };
      newCards.unshift(newCard);
      setCards(newCards);
      setCardNumber('');
      setCardHolder('');
      setExpDate('');
      setCvv('');
      
    }

    const navigation = useNavigation();


    const buttonAlert = () =>
      Alert.alert('Successfully completed purchase!', 'We will contact you as soon as possible.', [
      {text: 'OK', onPress: () => {
        clearCart();
        navigation.navigate('Products');
      }},
    ]); 

    
  
  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.titleStyle}>Payment</Text>
        <ScrollView
        horizontal
        contentContainerStyle={paymentStyles.carouselContainer}
        showsHorizontalScrollIndicator={false}
        >
          {cards.map((card) => (
              <View key={card.id} style={paymentStyles.cardContainer}>
                <Image source={{ uri: card.logo }} style={{width: 50,height: 30}} />
                <Text style={paymentStyles.cardNumber}>{card.number}</Text>
                <View style={paymentStyles.cardInfoContainer}>
                    <View style={{flex: 1}}>
                    <Text style={paymentStyles.cardInfoLabel}>Card Holder</Text>
                    <Text style={paymentStyles.cardInfoValue}>{card.holder}</Text>
                    </View>
                    <View style={{flex: 1}}>
                    <Text style={paymentStyles.cardInfoLabel}>Expiration</Text>
                    <Text style={paymentStyles.cardInfoValue}>{card.expiration}</Text>
                    </View>
                </View>
              </View>
          ))}
        </ScrollView>
        <ScrollView>
          <View style={{paddingHorizontal: 10}}>
            <Text style={{ fontSize: 18, color: "#000000", fontWeight: "900"}}>Card Details</Text>
            <TextInput
              style={paymentStyles.input}
              placeholder="Card holder"
              value={cardHolder}
              onChangeText={(text) => setCardHolder(text)}
            />
            <TextInput
              style={paymentStyles.input}
              placeholder="Card number"
              value={cardNumber}
              maxLength={12}
              onChangeText={(text) => setCardNumber(text)}
              keyboardType="numeric"
            />
            <TextInput
              style={paymentStyles.input}
              placeholder="Exp date"
              value={expDate}
              maxLength={5}
              onChangeText={(text) => setExpDate(text)}
            />
            <TextInput
              style={paymentStyles.input}
              placeholder="CVV"
              secureTextEntry={true}
              value={cvv}
              maxLength={3}
              onChangeText={(text) => setCvv(text)}
              keyboardType="numeric"
            />
            
            <TouchableOpacity style={paymentStyles.paymentContainerButtons}  onPress={updateCardDetails}>
                <Text style={cartStyles.addToCartButtonText}>Add Card</Text>
          </TouchableOpacity>
          </View>


        </ScrollView>

        <View style={[cartStyles.containerTotal, {marginTop: 10, marginBottom: 10} ]}>
            <TouchableOpacity style={{ flexDirection: 'row',
                    alignItems: 'center',}} onPress={() => navigation.navigate('Cart')}>
                <Text style={cartStyles.textTotal}>Cancel</Text>
            </TouchableOpacity>
                    
            <TouchableOpacity style={[paymentStyles.paymentContainerButtons,{width: 200}]}  onPress={buttonAlert}>
                <Text style={cartStyles.addToCartButtonText}>Confirm payment</Text>
            </TouchableOpacity>
        </View>
  </View>
  )
}
