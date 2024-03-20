import { ScrollView, StyleSheet, View } from "react-native";
import { CustomButton } from "../screen/components/ui/CustomButton.jsx";
import { CustomInput } from "../screen/components/ui/CustomInput.jsx";
import { CustomHeader } from "../screen/components/home/CustomHeader.jsx";
import { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function SignUpScreen() {
  const [isSelected, setSelection] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <CustomHeader tittle={"Sign Up"} subTittle={"Create an new account"} />
      <View style={styles.form}>
        <CustomInput text={"User Name"} />
        <CustomInput text={"Email"} key={"email-address"} />
        <CustomInput text={"Password"} />
        <CustomInput text={"Confirm Password"} />
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
          <CustomButton btnText={"Register"} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
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