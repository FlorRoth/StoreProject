import { ScrollView, StyleSheet, Text, View } from "react-native";
import { CustomButton } from "../screen/components/ui/CustomButton.jsx";
import { CustomInput } from "../screen/components/ui/CustomInput.jsx";
import { CustomHeader } from "../screen/components/home/CustomHeader.jsx";
import { FormContext } from "../contexts/FormContext.jsx";
import { useContext, useEffect } from "react";
import { useLoginValidations } from "../hook/useLoginValidations.js";
import { useNavigation } from "@react-navigation/core";
import { Spinner } from "./components/ui/Spinner.jsx";
import { DarkTheme } from "@react-navigation/native";
export default function LoginScreen() {
  const {
    formState,
    theme,
    state,
    postLogin,
    errorMessage,
    setErrorMessage,
    getUserData,
  } = useContext(FormContext);
  const navigation = useNavigation();

  useEffect(() => {
    if (state.isLogged) {
      navigation.navigate("Profile");
    }
  }, [state]);

  useEffect(() => {
    setErrorMessage("");
  }, []);

  const onSubmitLogin = () => {
    useLoginValidations(setErrorMessage, formState, postLogin);
  };

  return (
    <ScrollView
      style={[
        styles.containerLogin,
        { backgroundColor: theme == "dark" ? "#212121" : "white" },
      ]}
    >
      <CustomHeader
        tittle={"Welcome!"}
        subTittle={"Please login or sign up to continue our app"}
      />
      <View style={styles.form}>
        <Text>{errorMessage}</Text>

        <CustomInput text={"User Name"} input={"UserName"} length={24} />
        <CustomInput
          text={"Password"}
          input={"Password"}
          password={true}
          length={24}
        />
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
            bckColor={theme == "dark" ? "#212121" : "#fff"}
            borderC={"#ddd"}
            colorT={theme == "dark" ? "white" : "#606060"}
            img={"authGoogle"}
          />
          <CustomButton
            ButtonPress={() => navigation.navigate("PageNotFound")}
            btnText={"Continue with Apple"}
            bckColor={theme == "dark" ? "#212121" : "#fff"}
            borderC={"#ddd"}
            colorT={theme == "dark" ? "white" : "#606060"}
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
