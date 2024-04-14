import { SafeAreaView, StyleSheet, View, Text, ScrollView } from "react-native";
import { useContext, useEffect } from "react";
import { CustomButton } from "./components/ui/CustomButton";
import { FormContext } from "../contexts/FormContext";
import { Spinner } from "./components/ui/Spinner";
import { CustomInfo } from "./components/ui/CustomInfo";
import { CustomIMG } from "./components/ui/CustomIMG";
import { CustomSetting } from "./components/ui/CustomSetting";

export default function ProfileScreen() {
  const { state, getUserData, logout, setErrorMessage } = useContext(FormContext);

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {state.isLoading ? (
        <Spinner />
      ) : (
        <ScrollView>
          <View style={styles.header}>
            <CustomIMG width={120} height={120} img={"logoPerfil"} />
          </View>
          <View style={{ gap: 12 }}>
            <CustomInfo left={"Name"} right={state.user.username} />
            <CustomInfo left={"Age"} right={"22 Year"} />
            <CustomInfo left={"Email"} right={state.user.email} />
          </View>

          <View>
            <Text style={styles.setting}>Settings</Text>
            <View style={styles.borderBox}>
              <CustomSetting
                textL={"Language"}
                textR={"English"}
                arrow={true}
                img="global"
              />
              <CustomSetting
                textL={"Notification"}
                buttonSwitch={true}
                img="campana"
              />
              <CustomSetting
                textL={"Drack Mode"}
                textR={"off"}
                buttonSwitch={true}
                img="luna"
              />
              <CustomSetting textL={"Language"} arrow={true} img="pregunta" />
            </View>
          </View>
        </ScrollView>
      )}
      <CustomButton ButtonPress={() => logout()} btnText={"LOG OUT"} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: "5%",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 64,
    marginTop: 64,
  },
  setting: {
    fontSize: 24,
    fontWeight: "500",
    marginTop: 16,
  },
  borderBox: {
    gap: 16,
    marginTop: 16,
    borderColor: "#ccc",
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
});
