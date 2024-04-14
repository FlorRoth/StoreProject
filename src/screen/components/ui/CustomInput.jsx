import { StyleSheet, Text, TextInput, View } from "react-native";
import { useForm } from "../../../hook/useForm";

export const CustomInput = ({ text, input, mode = "text", password = false, length = 12 }) => {
  const { onChangeInput } = useForm();

  return (
    <View style={styles.formBox}>
      <Text style={styles.formName}>{text}</Text>
      <View>
        <TextInput
          maxLength={length}
          style={styles.formInput}
          secureTextEntry={password}
          inputMode={mode}
          placeholderTextColor={"#000"}
          onChangeText={(value) => onChangeInput(input, value)}
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
  formName: {
    fontSize: 22,
    fontWeight: "500",
  },
  formInput: {
    fontSize: 18,
  },
});
