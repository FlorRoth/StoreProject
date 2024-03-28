import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View,FlatList, TouchableOpacity, Image, SafeAreaView, ActivityIndicator} from 'react-native';
import { productsStyles } from '../styles/productsStyles';
import { globalStyles } from '../styles/globalStyles';
import { ProductContext } from '../contexts/ProductContext';
import { useNavigation } from '@react-navigation/native';


export default Categories=({route}) => {
    const { item } = route.params;
  const navigation = useNavigation();
  const {state, getProducts,getCategories,toggleFavorite} = useContext(ProductContext); 

      useEffect(() => {
          init();
      },[]);

      const init = async () => {
        getProducts();
        getCategories()
    }


  const renderProductsItem = ({item}) => {
    return (
      <TouchableOpacity
        style={productsStyles.cardProduct}
        onPress={()=>navigation.navigate("ProductItem", { item: item })}>
        <View style={productsStyles.cardProductHeader}>
          <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
            <Image
                    style={{ height: 25, width: 25}}
                    source={state.favorites.includes(item.id) ? require('../../assets/favorite-black.png') : require('../../assets/favorite.png') }
            />
          </TouchableOpacity>


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

  const productsByCategorie =(categorie)=>{
    const products= state.products
    return products.filter(producto => producto.category===categorie)
  }
  return (
    <View  style={{ flex: 1}}>
     {state.isLoading ? (
        <ActivityIndicator size="large" color="#000000" />
      ) : (
      <View style={globalStyles.container}>
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
              <Text style={globalStyles.titleStyle}>Productos de {item} </Text>
                <FlatList
                  contentContainerStyle={productsStyles.listProductsContainer}
                  data={productsByCategorie(item)}
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