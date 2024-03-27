
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, ScrollView, Button } from 'react-native';
import { productsStyles } from '../styles/productsStyles';
import { globalStyles } from '../styles/globalStyles';
import { ProductContext } from '../contexts/ProductContext';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../contexts/CartContext';

export default ProductItem = ({ route }) => {
  const { item } = route.params;
  const [quantity, setQuantity] = useState(1); 
  const [selectedSize, setSelectedSize] = useState('S');
  const {state, toggleFavorite} = useContext(ProductContext); 
  const {state: stateCart, addToCart} = useContext(CartContext); 
  const navigation = useNavigation();

  
  if (!item) {
    navigation.navigate('PageNotFound');
    return null;
  }
  
  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };


  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };


  const handleAddToCart = (product, quantity) => {
    addToCart(product,quantity);
    Alert.alert("Producto agregado al carrito con exito!")
  }


  const renderStars = () => {
    const stars = [];
    const rating = Math.round(item.rating.rate); 
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <Image
            key={i}
            style={productsStyles.star}
            source={require('../../assets/star.png')}
          />
        );
      } else {
        stars.push(
          <Image
            key={i}
            style={productsStyles.star}
            source={require('../../assets/empty_star.png')} 
          />
        );
      }
    }
    return stars;
  };
  

  const renderSizes = () => {
    return(
    <View style={globalStyles.containerTitle}>
        <View style={{flex: 1, paddingRight: 15,paddingLeft: 0,paddingTop: 10}}>
          <Text style={productsStyles.productItemTitle}>Size</Text>
          <View style={productsStyles.contentSize}>
            <TouchableOpacity 
              style={[productsStyles.btnSize, selectedSize === 'S' && productsStyles.btnSizeSelected]}
              onPress={() => handleSizeSelection('S')}>
              <Text style={[ productsStyles.btnSizeText, selectedSize === 'S' && productsStyles.btnSizeSelectedText]}>S</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[productsStyles.btnSize, selectedSize === 'M' &&  productsStyles.btnSizeSelected]}
              onPress={() => handleSizeSelection('M')}>
              <Text style={[ productsStyles.btnSizeText, selectedSize === 'M' &&  productsStyles.btnSizeSelectedText]}>M</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[productsStyles.btnSize, selectedSize === 'L' &&  productsStyles.btnSizeSelected]}
              onPress={() => handleSizeSelection('L')}>
              <Text style={[ productsStyles.btnSizeText, selectedSize === 'L' &&  productsStyles.btnSizeSelectedText]}>L</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[productsStyles.btnSize, selectedSize === 'XL' &&  productsStyles.btnSizeSelected]}
              onPress={() => handleSizeSelection('XL')}>
              <Text style={[ productsStyles.btnSizeText, selectedSize === 'XL' &&  productsStyles.btnSizeSelectedText]}>XL</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[productsStyles.btnSize, selectedSize === 'XXL' &&  productsStyles.btnSizeSelected]}
              onPress={() => handleSizeSelection('XXL')}>
              <Text style={[ productsStyles.btnSizeText, selectedSize === 'XXL' &&  productsStyles.btnSizeSelectedText]}>XXL</Text>
            </TouchableOpacity>
          </View> 
      </View>
    </View>);
  };
  


  return (
    <View style={productsStyles.productItemcontainer}>
        <View style={{flex: 1}}>

        <TouchableOpacity style={[productsStyles.cartProductHeader,productsStyles.shadow]}
        onPress={()=>navigation.navigate("Cart")}
        >
          <Image
            style={{height: 30, width: 30}}
            source={require('../../assets/cart-white.png')}
          />
        </TouchableOpacity>

          <Image
            style={productsStyles.productItemImage}
            source={{
              uri: item.image,
            }}
          />

          <View style={[productsStyles.favoriteProductFooter,productsStyles.shadow]}>
              <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
                      <Image
                              style={{ height: 30, width: 30}}
                              source={state.favorites.includes(item.id) ? require('../../assets/favorite-black.png') : require('../../assets/favorite-white.png') }
                      />
              </TouchableOpacity>
          </View>

        </View>

        <View style={productsStyles.productDescriptionContainer}>
        <ScrollView>
            <View style={globalStyles.containerTitle}>
              <View style={{paddingTop: 15}}>
                <Text style={productsStyles.productItemTitle}>{item.title}</Text>

                <View style={{flexDirection: "row", justifyContent: "space-between", width: "100%"}}>
                  <View style={{marginTop: 10}}>
                    <Text style={productsStyles.productDescription}>{item.category}</Text>
                    <View style={productsStyles.starContainer}>
                      {renderStars()}
                      <Text style={{ fontSize: 12 }}>({item.rating.count} Review)</Text>
                    </View>
                  </View>

                  <View style={{}}>
                      <View style={productsStyles.quantityContainer}>
                      <TouchableOpacity onPress={decreaseQuantity}>
                        <Text style={{ fontSize: 20 }}>-</Text>
                      </TouchableOpacity>
                      <Text style={{ fontSize: 16 }}>{quantity}</Text>
                      <TouchableOpacity onPress={increaseQuantity}>
                        <Text style={{ fontSize: 20 }}>+</Text>
                      </TouchableOpacity>
                      </View>
                      <Text style={{fontSize: 12, fontWeight: "700", marginTop: 5}}>Avaliable in stock</Text>
                  </View> 
                </View>
              
              </View>
            </View>
            {item.category.includes('clothing') && ( renderSizes())}
            <View style={{paddingTop: 10}}>
              <Text style={productsStyles.productItemTitle}>Description</Text>
              <View style={{marginTop: 10}}>
                <Text style={productsStyles.productDescription}>
                {item.description}
                </Text>
              </View>
            </View>
            </ScrollView>
            <View style={productsStyles.addToCartContainer}>
              <View style={{ flex: 1, marginTop: 5}}>
                <Text style={{fontSize: 10, color: '#AAAAAA'}}>Total Price</Text>
                <Text style={productsStyles.productPrice}>$ {item.price.toFixed(2)}</Text>
              </View>
              <TouchableOpacity style={productsStyles.addToCartButton}  onPress={() => handleAddToCart(item,quantity)}>
                    <Image
                    style={{width: 20, height: 20, objectFit: "contain", marginRight: 10}}
                  source={require('../../assets/cart.png')} 
                />
                <Text style={productsStyles.addToCartButtonText}>Add To Cart</Text>
              </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}
