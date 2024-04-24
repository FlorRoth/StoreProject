import { Text, View, TouchableOpacity } from "react-native";
import { globalStyles } from "../../../styles/globalStyles";
import { productsStyles } from "../../../styles/productsStyles";
import { FormContext } from "../../../contexts/FormContext";
import { useContext } from "react";

export default function RenderProductSizes({
  sizes,
  onSizeSelected,
  selectedSize,
}) {
  const { theme } = useContext(FormContext);

  return (
    <View style={globalStyles.containerTitle}>
      <View
        style={{ flex: 1, paddingRight: 15, paddingLeft: 0, paddingTop: 10 }}
      >
        <Text
          style={[
            productsStyles.productItemTitle,
            { color: theme == "dark" ? "#f2f8ff" : "#212121" },
          ]}
        >
          Size
        </Text>
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
}
