import { useContext, useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image} from 'react-native';
import { CartContext } from '../../contexts/CartContext';
import { cartStyles } from '../../styles/cartStyles';



export default function RenderCartItem({item, key, quantity}) {

  const {addToCart,removeFromCart} = useContext(CartContext); 
  
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
                    source={require('../../../assets/tash.png')}
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
    );

}