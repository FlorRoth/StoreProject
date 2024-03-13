import { useState } from 'react';
import { StyleSheet, Text, View,FlatList, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import { productsStyles } from '../styles/productsStyles';
import { globalStyles } from '../styles/globalStyles';


export default function Products({data}) {

  const [products, setProducts] = useState(data);


  const renderProductsItem = ({item}) => {
    return (
      <TouchableOpacity
        style={productsStyles.cardProduct}
        onPress={() => {
          clickEventListener()
        }}>
        <View style={productsStyles.cardProductHeader}>
          <Image
            style={{height: 22, width: 22}}
            source={require('../../assets/favorite.png')}
          />


        </View>
        <Image style={productsStyles.productImage} source={{ uri: item.image }} />
        <View style={productsStyles.cardProductFooter}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={productsStyles.titleProduct}>{item.title}</Text>
            <Text style={productsStyles.productDescription}>{item.description}</Text>
            <Text style={productsStyles.productPrice}>{item.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }


  return (

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
                data={products}
                horizontal={false}
                numColumns={2}
                keyExtractor={item => {
                  return item.id
                }}
                renderItem={renderProductsItem}
              /> 
          </View>
    </View> 

  );
}

