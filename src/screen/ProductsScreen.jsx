import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View,FlatList, TouchableOpacity, Image, SafeAreaView, ActivityIndicator} from 'react-native';
import { productsStyles } from '../styles/productsStyles';
import { globalStyles } from '../styles/globalStyles';
import { ProductContext } from '../contexts/ProductContext';
import { useNavigation } from '@react-navigation/native';


export default function Products() {

  const navigation = useNavigation();
  const {state, getProducts} = useContext(ProductContext); 


      useEffect(() => {
          init();
      },[]);


      const init = async () => {
        getProducts();
    }


  const renderProductsItem = ({item}) => {

    return (
      <TouchableOpacity
        style={productsStyles.cardProduct}
        onPress={()=>navigation.navigate("ProductItem", { item: item })}>
        <View style={productsStyles.cardProductHeader}>
          <Image
            style={{height: 22, width: 22}}
            source={require('../../assets/favorite.png')}
          />


        </View>
        <Image style={productsStyles.productImage} source={{ uri: item.image }} />
        <View style={productsStyles.cardProductFooter}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text numberOfLines={2} style={productsStyles.titleProduct}>{item.title}</Text>
            <Text numberOfLines={3} style={productsStyles.descriptionProduct}>{item.description}</Text>
            <Text style={productsStyles.priceProduct}>$ {item.price.toFixed(2)}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }


  return (
    <View  style={{ flex: 1}}>
     {state.isLoading ? (
        <ActivityIndicator size="large" color="#000000" />
      ) : (
      <View style={productsStyles.productsContainer}>
            <View style={productsStyles.headerContainer}>
              <TouchableOpacity>
                <Image 
                            style={{height: 35, width: 35}}
                            source={require('../../assets/arrow.png')}
                          />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                            style={{height: 22, width: 22}}
                            source={require('../../assets/search.png')}
                          />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={globalStyles.titleStyle}>Productos</Text>
                <FlatList
                  contentContainerStyle={productsStyles.listProductsContainer}
                  data={state.products}
                  horizontal={false}
                  numColumns={2}
                  keyExtractor={item => {
                    return item.id
                  }}
                  renderItem={renderProductsItem}
                /> 
            </View>
      </View> 
     )}
    </View>


  );
}