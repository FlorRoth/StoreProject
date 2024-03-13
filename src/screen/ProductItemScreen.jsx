
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, ScrollView, Button } from 'react-native'
import { productsStyles } from '../styles/productsStyles'
import { globalStyles } from '../styles/globalStyles'

export default ProductItem = () => {

  return (
    <View style={productsStyles.productItemcontainer}>
        <View style={{flex: 1}}>

          <Image
            style={productsStyles.productItemImage}
            source={{
              uri: 'https://media.glamour.mx/photos/63751c4374b8c314cbf80150/1:1/w_2000,h_2000,c_limit/bikers2019.jpg',
            }}
          />

        </View>

        <View style={productsStyles.productDescriptionContainer}>
        <ScrollView>
            <View style={globalStyles.containerTitle}>
              <View style={{paddingTop: 15}}>
                <Text style={productsStyles.productItemTitle}>Super Soft T-Shirt</Text>
                <Text style={productsStyles.productDescription}>
                    Lorem ipsum dolor sit amet.
                </Text>
                <View style={productsStyles.starContainer}>
                    <Image
                      style={productsStyles.star}
                      source={require('../../assets/star.png')}
                    />
                    <Image
                      style={productsStyles.star}
                      source={require('../../assets/star.png')}
                    />
                    <Image
                      style={productsStyles.star}
                      source={require('../../assets/star.png')}
                    />
                    <Image
                      style={productsStyles.star}
                      source={require('../../assets/star.png')}
                    />
                    <Image
                      style={productsStyles.star}
                     source={require('../../assets/star.png')}
                    />

                    <Text style={{fontSize: 12}}>(320 Review)</Text>
                </View>
              </View>
              <View>
                <View style={productsStyles.quantityContainer}>
                      <TouchableOpacity>
                          <Text style={{fontSize: 16}}>-</Text>
                      </TouchableOpacity>
                      <TouchableOpacity>
                          <Text style={{fontSize: 16}}>1</Text>
                      </TouchableOpacity>
                      <TouchableOpacity>
                          <Text style={{fontSize: 16}}>+</Text>
                      </TouchableOpacity>
                </View>
                <Text style={{fontSize: 12, fontWeight: "700", marginTop: 10}}>Avaliable in stock</Text>
              </View>


            </View>
            <View style={globalStyles.containerTitle}>
              <View style={{flex: 1, paddingRight: 15,paddingLeft: 0,paddingTop: 15}}>
                <Text style={productsStyles.productItemTitle}>Size</Text>
                <View style={productsStyles.contentSize}>
                  <TouchableOpacity style={productsStyles.btnSize}>
                    <Text style={{color:"#888888", fontWeight: "700"}}>S</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={productsStyles.btnSize}>
                    <Text style={{color:"#888888", fontWeight: "700"}}>M</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={productsStyles.btnSize}>
                    <Text style={{color:"#888888", fontWeight: "700"}}>L</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={productsStyles.btnSize}>
                    <Text style={{color:"#888888", fontWeight: "700"}}>XL</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={productsStyles.btnSize}>
                    <Text style={{color:"#888888", fontWeight: "700"}}>XXL</Text>
                  </TouchableOpacity>
                </View> 

              </View>
              <View>
                <View style={productsStyles.contentColors}>
                  <TouchableOpacity
                    style={[productsStyles.btnColor, { backgroundColor: '#00BFFF' }]}></TouchableOpacity>
                  <TouchableOpacity
                    style={[productsStyles.btnColor, { backgroundColor: '#FF1493' }]}></TouchableOpacity>
                  <TouchableOpacity
                    style={[productsStyles.btnColor, { backgroundColor: '#00CED1' }]}></TouchableOpacity>
                  <TouchableOpacity
                    style={[productsStyles.btnColor, { backgroundColor: '#228B22' }]}></TouchableOpacity>
                </View>
              </View>


            </View>
            <View style={{paddingTop: 0}}>
              <Text style={productsStyles.productItemTitle}>Description</Text>
              <Text style={productsStyles.productDescription}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
              dolor. Aenean massa.
              </Text>
            </View>

            <View style={productsStyles.addToCartContainer}>
              <View style={{ flex: 1, marginTop: 5}}>
                <Text style={{fontSize: 10, color: '#AAAAAA'}}>Total Price</Text>
                <Text style={productsStyles.productPrice}>$ 12.22</Text>
              </View>
              <TouchableOpacity style={productsStyles.addToCartButton}>
                <Text style={productsStyles.addToCartButtonText}>Add To Cart</Text>
              </TouchableOpacity>
            </View>
            </ScrollView>
        </View>


    </View>
  )
}