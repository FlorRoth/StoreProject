
import React, { useContext, useState } from 'react';
import {Text, View, Image, Alert, ScrollView } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { cartStyles } from '../styles/cartStyles';
import { paymentStyles } from '../styles/paymentStyles';

import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../contexts/CartContext';
import { CustomButton } from './components/ui/CustomButton';
import { CustomInput } from './components/ui/CustomInput';


export default PaymentScreen = () => {

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
        <View style={{flex: 2}}>
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
        </View>
        <View style={{flex: 2}}>
          <ScrollView>
            <View style={{paddingHorizontal: 10}}>
              <Text style={{ fontSize: 20, color: "#000000", fontWeight: "900", marginBottom: 15}}>Card Details</Text>

              <CustomInput
              text={"Card holder"} input={"CardHolder"} value={cardHolder} length={24}
              onChangeText={(text) => setCardHolder(text)}
              fontSizeText={16}
              />
              <CustomInput
              text={"Card number"} input={"CardNumber"} value={cardNumber} length={12}
              onChangeText={(text) => setCardNumber(text)}
              mode='numeric'
              fontSizeText={16}
              />

              <CustomInput
              text={"Exp date"} input={"ExpDate"} value={expDate} length={5}
              onChangeText={(text) => setExpDate(text)}
              fontSizeText={16}
              />

              <CustomInput
              text={"CVV"} input={"CVV"} value={cvv} length={3}
              onChangeText={(text) => setCvv(text)}
              mode='numeric'
              password={true}
              fontSizeText={16}
              />

              <CustomButton  
                ButtonPress={updateCardDetails}
                btnText={"Add Card"}
                bckColor={"#000000"}
                colorT={"#FFFFFF"}
                
              />
            </View>


          </ScrollView>
        </View>

        <View style={[cartStyles.containerTotal, {marginTop: 10, marginBottom: 10} ]}>
            <View style={[{width: 70}]} >
              <CustomButton  
                  ButtonPress={() => navigation.navigate('Cart')}
                  btnText={"Cancel"}
                  bckColor={"white"}
                  colorT={"#919191"}
                />
            </View>
            <View style={[{width: 200}]} >
              <CustomButton  
                ButtonPress={buttonAlert}
                btnText={"Confirm payment"}
              />
            </View>
        </View>
  </View>
  )
}
