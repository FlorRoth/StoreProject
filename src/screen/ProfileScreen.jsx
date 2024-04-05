import { SafeAreaView, StyleSheet, View, Text, FlatList, Image, ScrollView } from "react-native";
import { useContext, useEffect } from "react";
import { CustomButton } from "./components/ui/CustomButton";
import { FormContext } from "../contexts/FormContext";
import { Spinner } from "./components/ui/Spinner";
import { CustomInfo } from "./components/ui/CustomInfo";
import { CustomIMG } from "./components/ui/CustomIMG";
export default function ProfileScreen() {
  const { state, getUserData, logout } = useContext(FormContext);

  useEffect(() => {
    getUserData();
  }, [state.isLogged]);

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  console.log(state.user.username);
  return (
    <SafeAreaView style={styles.container}>
      {state.isLoading ? (
        <Spinner />
      ) :
        <ScrollView>
          <View style={styles.header}>
            <CustomIMG width={120} height={120} img={"authLogo"} />
            <Text>Upload image</Text>
          </View>
          <View style={{ gap: 12 }}>
            <CustomInfo left={"Name"} right={state.user.username} />
            <CustomInfo left={"Age"} right={"22 Year"} />
            <CustomInfo left={"Email"} right={state.user.email} />
          </View>

          <View>
            <Text style={styles.setting}>Settings</Text>
            <View style={styles.borderBox}>
              <View style={styles.customSetting}>
                <Text style={styles.left}>Language</Text>
                <Text style={styles.right}>English</Text>
              </View>
            </View>
          </View>
        </ScrollView>}
      {/* <CustomButton ButtonPress={() => logout()} btnText={"LOG OUT"} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 32,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 64,
  },
  setting: {
    fontSize: 24,
    fontWeight: "500",
    marginTop: 16,
  },
  customSetting: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  borderBox: {
    margin: 32,
    borderColor: "#ccc",
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 24
  },
  left: {
    fontSize: 16,
    fontWeight: "600",
  },
  right: {
    color: "#999",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "right"
  },
});
