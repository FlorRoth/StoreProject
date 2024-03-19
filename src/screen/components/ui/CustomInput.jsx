import { StyleSheet, Text, TextInput, View } from "react-native";
import { useForm } from "../../../hook/useForm";

export const CustomInput = ({ text, key, mode }) => {
  const { formState, onChangeInput } = useForm();

  return (
    <View style={styles.formBox}>
      <Text style={styles.formText}>{text}</Text>
      <View>
        <TextInput
          keyboardType={key}
          inputMode={mode}
          placeholderTextColor={"#000"}
          onChangeText={(value) => onChangeInput(text, value)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formBox: {
    width: "90%",
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
    marginBottom: 28,
  },
  formText: {
    fontSize: 20,
    fontWeight: "500",
  },
});
