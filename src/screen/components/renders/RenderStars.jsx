import React from 'react';
import {Image } from 'react-native';
import { productsStyles } from '../../../styles/productsStyles';
;


export default function RenderStars(ratingItem) {
  const stars = [];
    const rating = Math.round(ratingItem); 
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <Image
            key={i}
            style={productsStyles.star}
            source={require('../../../../assets/star.png')}
          />
        );
      } else {
        stars.push(
          <Image
            key={i}
            style={productsStyles.star}
            source={require('../../../../assets/empty_star.png')} 
          />
        );
      }
    }
    return stars;

}