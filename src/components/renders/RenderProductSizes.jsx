import { Text, View,TouchableOpacity } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import { productsStyles } from "../../styles/productsStyles";


export default function RenderProductSizes ({ sizes, onSizeSelected, selectedSize }) {
  return (
    <View style={globalStyles.containerTitle}>
      <View style={{ flex: 1, paddingRight: 15, paddingLeft: 0, paddingTop: 10 }}>
        <Text style={productsStyles.productItemTitle}>Size</Text>
        <View style={productsStyles.contentSize}>
          {sizes.map((size, index) => (
            <TouchableOpacity
              key={index}
              style={[
                productsStyles.btnSize,
                selectedSize === size && productsStyles.btnSizeSelected,
              ]}
              onPress={() => onSizeSelected(size)}
            >
              <Text
                style={[
                  productsStyles.btnSizeText,
                  selectedSize === size && productsStyles.btnSizeSelectedText,
                ]}
              >
                {size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

