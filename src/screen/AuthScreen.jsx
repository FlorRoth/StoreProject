import { StyleSheet, View } from "react-native";
import { CustomButton } from "../screen/components/ui/CustomButton.jsx";
import { CustomIMG } from "./components/ui/CustomIMG.jsx";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";
import { CustomSetting } from "./components/ui/CustomSetting.jsx";
import { FormContext } from "../contexts/FormContext.jsx";
import { useContext } from "react";
export default function AuthScreen({ navigation }) {
  const { theme, toggleTheme } = useContext(FormContext);
  return (
    <View
      style={[
        styles.containerLogin,
        { backgroundColor: theme == "dark" ? "#212121" : "white" },
      ]}
    >
      <View style={styles.logo}>
        <CustomIMG width={"100%"} height={240} img={"authLogo"} />
      </View>

      <View style={styles.buttons}>
        <CustomButton
          ButtonPress={() => navigation.navigate("LoginScreen")}
          btnText={"Login"}
          bckColor={"#ffff"}
          colorT={"#000000"}
          borderC={"#000000"}
        />
        <CustomButton
          ButtonPress={() => navigation.navigate("SignUpScreen")}
          btnText={"Sign Up"}
          bckColor={theme == "dark" ? "grey" : "#000000"}
          colorT={theme == "dark" ? "#000000" : "#fff"}
        />
        <View style={styles.borderBox}>
          <CustomSetting
            textL={"Dark Mode"}
            textR={theme == "dark" ? "on" : "off"}
            buttonSwitch={true}
            img="luna"
            onClick={() => toggleTheme()}
            currentState={theme == "dark"}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logo: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  borderBox: {
    //sacar
    gap: 16,
    width: "100%",
    marginTop: 16,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
});
