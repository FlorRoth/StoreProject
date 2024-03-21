import { StyleSheet, Text, View } from 'react-native';
import { CustomIMG } from "../ui/CustomIMG.jsx";

export const CustomHeader = ({ tittle, subTittle, flex = 1, center = "", width = "100%", wimg = 240, img = "authLogo", gap = 0 }) => {
  return (
    <View style={[styles.header, { gap: gap, }]}>
      <CustomIMG width={wimg} height={wimg} img={img} />
      <View style={[styles.textBox, {
        flex: flex,
        alignItems: center,
        justifyContent: center,
      }]}>
        <Text style={styles.text}>{tittle}</Text>
        <Text style={[styles.subText, {
          width: width,
        }]}>
          {subTittle}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: 20,
  },
  textBox: {
    width: "90%",
  },
  text: {
    fontSize: 30,
    fontWeight: "500",
    marginBottom: 8,
  },
  subText: {
    color: "#aaa",
    fontSize: 16,
  },
});