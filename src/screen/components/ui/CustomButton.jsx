import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const CustomButton = ({
  btnText,
  bckColor = "#000",
  marginH = 20,
  marginV = 10,
  borderR = 40,
  borderW = 1,
  borderC = "",
  colorT = "#fff"
}) => {

  return (
    <TouchableOpacity style={[styles.btn, {
      backgroundColor: bckColor,
      marginHorizontal: marginH,
      marginVertical: marginV,
      borderRadius: borderR,
      borderWidth: borderW,
      borderColor: borderC ? borderC : bckColor
    }]}>
      <Text style={[styles.btnText, {
        color: colorT,
      }]}>{btnText}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: "90%",
    height: 64,
  },

  btnText: {
    fontSize: 18,
    color: '#000',
    fontWeight: '500'
  },
});