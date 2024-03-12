import { StyleSheet, View } from "react-native";
import { CustomButton } from "../screen/components/ui/CustomButton.jsx";
import { CustomInput } from "../screen/components/ui/CustomInput.jsx";
import { CustomHeader } from "../screen/components/home/CustomHeader.jsx";

export default function LoginScreen() {
  return (
    <View style={styles.containerLogin}>
      <CustomHeader
        tittle={"Welcome!"}
        subTittle={"please login or sign up to continue our app"}
      />
      <View style={styles.form}>
        <CustomInput text={"Email"} />
        <CustomInput text={"Password"} />
        <View style={styles.buttons}>
          <CustomButton btnText={"Login"} />
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
    </View>
  );
}

const styles = StyleSheet.create({
  containerLogin: {
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
  bar: {
    backgroundColor: "#ccc",
    height: 1,
    width: "90%",
    marginVertical: 12,
  },
  buttons: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
});
