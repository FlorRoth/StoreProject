import { StyleSheet, View } from "react-native";
import { CustomHeader } from "../screen/components/home/CustomHeader.jsx";
import { CustomButton } from "../screen/components/ui/CustomButton.jsx";
import { useNavigation } from "@react-navigation/core";

export default function SuccessfulScreen() {
  const navigation = useNavigation();

  const onHandleShopping = () => {
    navigation.navigate("inicio");
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        tittle={"Successful!"}
        subTittle={
          "You have successfully registed in our app and start working in it."
        }
        flex={0}
        center={"center"}
        width={"66%"}
        wimg={100}
        img={"authCheck"}
        gap={60}
      />
      <View style={styles.botton}>
        <CustomButton btnText={"Start Shopping"} ButtonPress={() => onHandleShopping()}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  botton: {
    width: "100%",
  },
});

