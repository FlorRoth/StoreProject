import { useState } from "react";
import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import { CustomIMG } from "./CustomIMG";
import { useNavigation } from "@react-navigation/core";

export const CustomSetting = ({
  textL,
  textR = "",
  arrow = false,
  buttonSwitch = false,
  img = "",
}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const navigation = useNavigation();

  return (
    <View style={styles.customSetting}>
      <View style={styles.right}>
        <CustomIMG width={24} height={24} img={img} />
        <Text style={styles.textLeft}>{textL}</Text>
      </View>

      <View style={styles.right}>
        <Text style={styles.textRight}>{textR}</Text>
        {buttonSwitch === true ? (
          <Switch
            trackColor={{ false: "#aaa", true: "#000000" }}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        ) : (
          ""
        )}
        {arrow === true ? <TouchableOpacity onPress={() => navigation.navigate("PageNotFound")}><Text style={styles.TextArrow}>{">"}</Text></TouchableOpacity> : ""}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  customSetting: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textLeft: {
    paddingLeft: 16,
    fontSize: 16,
    fontWeight: "600",
  },
  right: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textRight: {
    color: "#999",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "right",
  },
  TextArrow: {
    paddingLeft: 16,
    color: "#666666",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "right",
  },
});
