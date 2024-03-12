import { StyleSheet, View } from "react-native";
import { CustomHeader } from "../screen/components/home/CustomHeader.jsx";
import { CustomButton } from "../screen/components/ui/CustomButton.jsx";

export default function SuccessfulScreen() {
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
        <CustomButton btnText={"Start Shopping"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  botton: {
    width: "100%",
    flex: 1,
  },
});

