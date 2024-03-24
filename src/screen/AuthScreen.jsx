import { StyleSheet, View } from "react-native";
import { CustomButton } from "../screen/components/ui/CustomButton.jsx";
import { CustomIMG } from "./components/ui/CustomIMG.jsx";

export default function AuthScreen({ navigation }) {
  return (
    <View style={styles.containerLogin}>
      <View style={styles.logo}>
        <CustomIMG width={240} height={240} img={"authLogo"} />
      </View>
      <View style={styles.buttons}>
        <CustomButton
          ButtonPress={() => navigation.navigate('LoginScreen')}
          btnText={"Login"}
          bckColor={"#ffff"}
          colorT={"#000000"}
          borderC={"#000000"}
        />
        <CustomButton
          ButtonPress={() => navigation.navigate('SignUpScreen')}
          btnText={"Sign Up"}
          bckColor={"#000000"}
          colorT={"#ffff"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerLogin: {
    marginBottom: 10,
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
});
