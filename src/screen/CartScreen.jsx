import { useContext, useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image} from 'react-native';
import { cartStyles } from '../styles/cartStyles';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { CartContext } from '../contexts/CartContext';
import Spinner from '../components/ui/Spinner';


export default function Cart() {

  const navigation = useNavigation();
  const {state: stateCart,addToCart,removeFromCart} = useContext(CartContext); 
  

  const renderCartItem = ({item, key, quantity}) => {
    
    const [qty, setQty] = useState(quantity); 

    const decreaseQuantity = () => {
      if (qty > 1) {
        setQty(qty - 1);
      }
    };
  
    const increaseQuantity = () => {
      setQty(qty + 1);
    };

    useEffect(() => {
      const timer = setTimeout(() => {
        addToCart(item,qty)
      }, 1000);
  
      return () => clearTimeout(timer);
    }, [qty]);


    return (
      <View
        key={key}
        style={cartStyles.cardProduct}>
        <View style={cartStyles.cardProductHeader}>
          <TouchableOpacity onPress={() => removeFromCart(item.id)}>
            <Image
                    style={{ height: 13, width: 13}}
                    source={require('../../assets/tash.png')}
            />
          </TouchableOpacity>


        </View>


        <View style={{}}>
            <Image style={cartStyles.productImage} source={{ uri: item.image }} /> 
            <View style={[cartStyles.quantityContainer,cartStyles.shadow]}>
                <TouchableOpacity onPress={decreaseQuantity}>
                    <Text style={{ fontSize: 20 }}>-</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 16 }}>{qty}</Text>
                <TouchableOpacity onPress={increaseQuantity}>
                    <Text style={{ fontSize: 20 }}>+</Text>
                </TouchableOpacity>
            </View>
        </View> 
        
        <View style={cartStyles.cardProductFooter}>
            <View style={{flex: 2}}>
              <Text style={cartStyles.titleProduct}>{item.title}</Text>  
            </View>
            <View style={{flex:1 }}>
               <Text style={cartStyles.priceProduct}>$ {item.price.toFixed(2)}</Text> 
            </View>
            
            
        </View>
        <Text numberOfLines={0} style={cartStyles.descriptionProduct}>{item.category}</Text>
      </View>
    )
  }


  return (
    <View  style={{ flex: 1}}>
     {stateCart.isLoading ? (
        <Spinner />
      ) : 
      (
        stateCart.cartItems.length > 0 ? (
         <View style={cartStyles.productsContainer}>
                <ScrollView>
                    <View>
                        {stateCart.cartItems.map(cart => renderCartItem({ item: cart.item, key: cart.item.id , quantity: cart.quantity}))}
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