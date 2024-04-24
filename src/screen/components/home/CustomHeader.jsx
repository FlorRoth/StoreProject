import { StyleSheet, Text, View } from "react-native";
import { CustomIMG } from "../ui/CustomIMG.jsx";
import { FormContext } from "../../../contexts/FormContext.jsx";
import { useContext } from "react";
export const CustomHeader = ({
  tittle,
  subTittle,
  flex = 1,
  center = "",
  width = "100%",
  wimg = 240,
  img = "authLogo",
  gap = 0,
}) => {
  const { theme } = useContext(FormContext);

  return (
    <View
      style={[
        styles.header,
        { gap: gap, backgroundColor: theme == "dark" ? "#212121" : "#fff" },
      ]}
    >
      <CustomIMG width={wimg} height={wimg} img={img} />
      <View
        style={[
          styles.textBox,
          {
            flex: flex,
            alignItems: center,
            justifyContent: center,
          },
        ]}
      >
        <Text
          style={[styles.text, { color: theme == "dark" ? "#aaa" : "black" }]}
        >
          {tittle}
        </Text>
        <Text
          style={[
            styles.subText,
            {
              width: width,
            },
          ]}
        >
          {subTittle}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: -24,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: 20,
  },
  textBox: {
    width: "90%",
    marginTop: -32,
  },
  text: {
    fontSize: 30,
    fontWeight: "500",
    marginBottom: 8,
  },
  subText: {
    color: "#aaa",
    fontSize: 16,
  },
});
