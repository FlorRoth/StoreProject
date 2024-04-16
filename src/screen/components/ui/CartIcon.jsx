import { useContext, useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { productsStyles } from '../../../styles/productsStyles';
import { CartContext } from '../../../contexts/CartContext';
import { cartStyles } from '../../../styles/cartStyles';



export default function CartIcon() {

  const {state: stateCart} = useContext(CartContext); 
  const navigation = useNavigation();

  return (
    <View>

        <TouchableOpacity style={[productsStyles.cartProductHeader,productsStyles.shadow]}
        onPress={()=>navigation.navigate("Cart")}
            >
            <Image
                style={{height: 30, width: 30}}
                source={require('../../../../assets/cart-white.png')}
            />
            <View style={cartStyles.containerIconCart}>
                <Text style={cartStyles.numberItemsCart}>{stateCart.cartItems.length}</Text>
            </View>
        </TouchableOpacity>
        
    </View>



  );
}