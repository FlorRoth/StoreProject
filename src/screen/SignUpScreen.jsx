import { StyleSheet, View } from "react-native";
import { CustomButton } from "../screen/components/ui/CustomButton.jsx";
import { CustomInput } from "../screen/components/ui/CustomInput.jsx";
import { CustomHeader } from "../screen/components/home/CustomHeader.jsx";
import { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function SignUpScreen() {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <CustomHeader tittle={"Sign Up"} subTittle={"Create an new account"} />
      <View style={styles.form}>
        <CustomInput text={"User Name"} />
        <CustomInput text={"Email"} />
        <CustomInput text={"Password"} />
        <CustomInput text={"Confirm Password"} />
        <View
          style={{
            width: "89%",
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
          <CustomButton btnText={"Register"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginBottom: 10,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    flex: 5,
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  buttons: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
});