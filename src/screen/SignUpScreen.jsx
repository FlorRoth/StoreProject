import { ScrollView, StyleSheet, Text, View } from "react-native";
import { CustomButton } from "../screen/components/ui/CustomButton.jsx";
import { CustomInput } from "../screen/components/ui/CustomInput.jsx";
import { CustomHeader } from "../screen/components/home/CustomHeader.jsx";
import { useContext, useEffect, useState } from "react";
import { FormContext } from "../contexts/FormContext.jsx";
import { useSignUpValidations } from "../hook/useSignUpValidations.js";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function SignUpScreen() {
  const [isSelected, setSelection] = useState(false);
  const { formState, theme, postSignUp, errorMessage, setErrorMessage } =
    useContext(FormContext);

  const onSubmitLogin = () => {
    if (isSelected === true) {
      useSignUpValidations(setErrorMessage, formState, postSignUp);
      return;
    }
    setErrorMessage("Click en checkbox.");
  };

  useEffect(() => {
    setErrorMessage("");
  }, []);

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: theme == "dark" ? "#212121" : "#fff" },
      ]}
    >
      <CustomHeader tittle={"Sign Up"} subTittle={"Create an new account"} />
      <View style={styles.form}>
        <Text>{errorMessage}</Text>
        <CustomInput text={"User Name"} input={"UserName"} length={24} />
        <CustomInput text={"Email"} input={"Email"} length={36} />
        <CustomInput
          text={"Password"}
          input={"Password"}
          password={true}
          length={24}
        />
        <CustomInput
          text={"Confirm Password"}
          input={"ConfirmPassword"}
          password={true}
          length={24}
        />
        <View
          style={{
            width: "89%",
            marginTop: 24,
          }}
        >
          <BouncyCheckbox
            textStyle={{
              textDecorationLine: "none",
            }}
            size={24}
            fillColor="grey"
            unfillColor="#FFFFFF"
            text="By creating an account you have to agree with our them & condication."
            innerIconStyle={{ borderWidth: 1 }}
            onPress={() => setSelection(!isSelected)}
          />
        </View>
        <View style={styles.buttons}>
          <CustomButton
            ButtonPress={() => onSubmitLogin()}
            btnText={"Register"}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  form: {
    flex: 5,
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  buttons: {
    marginTop: 32,
    width: "100%",
    alignItems: "center",
  },
});
