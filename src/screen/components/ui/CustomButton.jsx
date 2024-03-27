import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { CustomIMG } from './CustomIMG';

export const CustomButton = ({
  btnText,
  bckColor = "#000",
  marginH = 20,
  marginV = 10,
  borderR = 40,
  borderW = 1,
  borderC = "",
  colorT = "#fff",
  img = false,
  ButtonPress,
}) => {
  return (
    <TouchableOpacity
      onPress={ButtonPress}
      style={[styles.btn, {
        backgroundColor: bckColor,
        marginHorizontal: marginH,
        marginVertical: marginV,
        borderRadius: borderR,
        borderWidth: borderW,
        borderColor: borderC ? borderC : bckColor
      }]}>
      {img ? <CustomIMG width={32} height={32} img={img} /> : ""}
      <Text style={[styles.btnText, {
        color: colorT,
      }]}>{btnText}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    width: "90%",
    height: 64,
  },

  btnText: {
    fontSize: 18,
    color: '#000',
    fontWeight: '500'
  },
});