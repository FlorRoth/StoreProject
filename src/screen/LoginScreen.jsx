import { ScrollView, StyleSheet, Text, View } from "react-native";
import { CustomButton } from "../screen/components/ui/CustomButton.jsx";
import { CustomInput } from "../screen/components/ui/CustomInput.jsx";
import { CustomHeader } from "../screen/components/home/CustomHeader.jsx";
import { FormContext } from "../contexts/FormContext.jsx";
import { useContext, useState } from "react";
import { useLoginValidations } from "../hook/useLoginValidations.js";




export default function LoginScreen() {
  const [errorMessage, setErrorMessage] = useState("");
  const { formState } = useContext(FormContext);
  const onSubmitLogin = () => {
    useLoginValidations(setErrorMessage, formState)
  }

  return (
    <ScrollView style={styles.containerLogin}>
      <CustomHeader
        tittle={"Welcome!"}
        subTittle={"please login or sign up to continue our app"}
      />
      <View style={styles.form}>
        <Text>{errorMessage}</Text>
        <CustomInput text={"Email"} key={"email-address"} />
        <CustomInput text={"Password"} password={true} />
        <View style={styles.buttons}>
          <CustomButton
            onSubmitChange={() => onSubmitLogin()}
            btnText={"Login"} />
          <View style={styles.bar}></View>
          <CustomButton
            btnText={"Continue with Facebook"}
            bckColor={"#3b5998"}
            img={"authFacebook"}
          />
          <CustomButton
            btnText={"Continue with Google"}
            bckColor={"#fff"}
            borderC={"#ddd"}
            colorT={"#606060"}
            img={"authGoogle"}
          />
          <CustomButton
            btnText={"Continue with Apple"}
            bckColor={"#fff"}
            borderC={"#ddd"}
            colorT={"#606060"}
            img="authApple"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerLogin: {
    marginTop: 40,
    marginBottom: 10,
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  form: {
    flex: 4,
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  bar: {
    backgroundColor: "#ccc",
    height: 1,
    width: "90%",
    marginVertical: 12,
  },
  buttons: {
    width: "100%",
    alignItems: "center",
  },
});
