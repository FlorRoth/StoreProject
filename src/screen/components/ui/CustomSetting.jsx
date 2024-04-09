import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { CustomIMG } from "./CustomIMG";

export const CustomSetting = ({
  textL,
  textR = "",
  arrow = false,
  buttonSwitch = false,
  img = "",
}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
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
        {arrow === true ? <Text style={styles.TextArrow}>{">"}</Text> : ""}
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
