import { useContext, useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image} from 'react-native';
import { cartStyles } from '../styles/cartStyles';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { CartContext } from '../contexts/CartContext';
import Spinner from '../components/ui/Spinner';
import RenderCartItem from '../components/renders/RenderCartItem';
import { globalStyles } from '../styles/globalStyles';


export default function Cart() {

  const navigation = useNavigation();
  const {state: stateCart} = useContext(CartContext); 
  

  return (
    <View  style={{ flex: 1}}>
     {stateCart.isLoading ? (
        <Spinner />
      ) : 
      (
        stateCart.cartItems.length > 0 ? (
         <View style={globalStyles.container}>
                <ScrollView>
                    <View>
                        <Text style={globalStyles.titleStyle}>Cart</Text>
                        {stateCart.cartItems.map(cart => RenderCartItem({ item: cart.item, key: cart.item.id , quantity: cart.quantity}))}
                    </View>

                </ScrollView>

                <View style={[cartStyles.containerTotal, {marginTop: 10} ]}>
                    <Text style={cartStyles.textTotal}>Total ({stateCart.cartItems.length} {stateCart.cartItems.length > 1 ? 'items' : 'item'}) :</Text>
                    <Text style={{fontSize: 20, fontWeight: 800}}>${stateCart.total.toFixed(2)}</Text>
                </View>

                <View style={cartStyles.addToCartContainer}>
                  <TouchableOpacity style={cartStyles.addToCartButton}>
                    <View style={[{flex:1},cartStyles.containerTotal]}>
                        <Text style={cartStyles.addToCartButtonText}>Buy</Text>
                        <Image
                            style={{ height: 30, width: 30, marginEnd: 5}}
                            source={require('../../assets/arrow-button-cart.png')}
                        />
                    </View>
        
                  </TouchableOpacity>
                </View>
          </View> 

        ) : 
        (
          <View style={{    flex: 1,
            justifyContent: 'center',
            alignItems: 'center'}}>
            <Image
                    style={{ height: 200, width: "100%"}}
                    source={require('../../assets/empty-cart.png')}
            />
          </View>

          
        )
      )}
    </View>


  );
}