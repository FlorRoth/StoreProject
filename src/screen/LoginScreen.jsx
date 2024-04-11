import { ScrollView, StyleSheet, Text, View } from "react-native";
import { CustomButton } from "../screen/components/ui/CustomButton.jsx";
import { CustomInput } from "../screen/components/ui/CustomInput.jsx";
import { CustomHeader } from "../screen/components/home/CustomHeader.jsx";
import { FormContext } from "../contexts/FormContext.jsx";
import { useContext, useState, useEffect } from "react";
import { useLoginValidations } from "../hook/useLoginValidations.js";
import { useNavigation } from "@react-navigation/core";
import { Spinner } from "./components/ui/Spinner.jsx";
export default function LoginScreen() {
  const [errorMessage, setErrorMessage] = useState("");
  const { formState, getUserData, state, postLogin } = useContext(FormContext);
  const navigation = useNavigation();

  useEffect(() => {
    if (state.isLogged) {
      navigation.navigate("Perfil");
    }
  }, [state]);

  const onSubmitLogin = () => {
    useLoginValidations(setErrorMessage, formState, postLogin);
  };

  return (
    <ScrollView style={styles.containerLogin}>
      <CustomHeader
        tittle={"Welcome!"}
        subTittle={"please login or sign up to continue our app"}
      />
      <View style={styles.form}>
        <Text>{errorMessage}</Text>

        <CustomInput text={"User Name"} input={"UserName"} />
        <CustomInput text={"Password"} input={"Password"} password={true} />
        <View style={styles.buttons}>
          {state.isLoading ? (
            <Spinner />
          ) : (
            <CustomButton
              ButtonPress={() => onSubmitLogin()}
              btnText={"Login"}
            />
          )}
          <View style={styles.bar}></View>
          <CustomButton
            ButtonPress={() => navigation.navigate("PageNotFound")}
            btnText={"Continue with Facebook"}
            bckColor={"#3b5998"}
            img={"authFacebook"}
          />
          <CustomButton
            ButtonPress={() => navigation.navigate("PageNotFound")}
            btnText={"Continue with Google"}
            bckColor={"#fff"}
            borderC={"#ddd"}
            colorT={"#606060"}
            img={"authGoogle"}
          />
          <CustomButton
            ButtonPress={() => navigation.navigate("PageNotFound")}
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
    marginBottom: 10,
    flex: 1,
    backgroundColor: "#fff",
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
