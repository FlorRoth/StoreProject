import { StyleSheet, Text, TextInput, View } from "react-native";
import { useForm } from "../../../hook/useForm";
import { FormContext } from "../../../contexts/FormContext";
import { useContext } from "react";
export const CustomInput = ({
  text,
  input,
  mode = "text",
  password = false,
  length = 12,
  onChangeText = false,
  value = null,
  fontSizeText = 22,
}) => {
  const { onChangeInput } = useForm();
  const { theme } = useContext(FormContext);

  return (
    <View style={styles.formBox}>
      <Text
        style={[
          styles.formName,
          {
            fontSize: fontSizeText,
            color: theme == "dark" ? "white" : "black",
          },
        ]}
      >
        {text}
      </Text>
      <View>
        <TextInput
          maxLength={length}
          style={[
            styles.formInput,
            { color: theme == "dark" ? "grey" : "#000" },
          ]}
          secureTextEntry={password}
          inputMode={mode}
          placeholderTextColor={theme == "dark" ? "white" : "#000"}
          value={value}
          onChangeText={
            onChangeText ? onChangeText : (value) => onChangeInput(input, value)
          }
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
    fontWeight: "500",
  },
  formInput: {
    fontSize: 18,
  },
});
