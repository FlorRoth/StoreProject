import { StyleSheet, Text, TextInput, View } from 'react-native';

export const CustomInput = ({ text, key, mode }) => {
  return (
    <View style={styles.formBox}>
      <Text style={styles.formText}>{text}</Text>
      <View>
        <TextInput
          keyboardType={key}
          inputMode={mode}
          placeholderTextColor={"#000"}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  formBox: {
    width: "90%",
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
  },
  formText: {
    fontSize: 20,
    fontWeight: "500",
  }
})