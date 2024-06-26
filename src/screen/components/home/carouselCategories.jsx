import React from "react";
import { View, StyleSheet, Text, FlatList, Pressable } from "react-native";
import { CarouselCategoriesCards } from "./carouselCategoriesCards";
import { ProductContext } from "../../../contexts/ProductContext";
import { useNavigation } from "@react-navigation/native";
import { FormContext } from "../../../contexts/FormContext";
import { useContext } from "react";
export const CarouselCategories = ({ name, dataProduct }) => {
  const { theme } = useContext(FormContext);

  const navigation = useNavigation();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme == "dark" ? "#212121" : "white",
          shadowColor: theme == "dark" ? "white" : "black",
        },
      ]}
    >
      <Pressable
        style={styles.title}
        onPress={() => navigation.navigate("Categories", { item: name })}
      >
        <Text
          style={[
            styles.text,
            { color: theme == "dark" ? "#f2f8ff" : "#212121" },
          ]}
        >
          {name.toUpperCase()}
        </Text>
        <Text
          style={[
            styles.text,
            { color: theme == "dark" ? "#f2f8ff" : "#212121" },
          ]}
        >
          VIEW ALL
        </Text>
      </Pressable>

      <FlatList
        data={dataProduct}
        renderItem={({ item }) => (
          <View>
            <CarouselCategoriesCards item={item} />
          </View>
        )}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  container: {
    padding: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    shadowColor: "black",
    height: 280,
    width: "100%",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    justifyContent: "space-evenly",
    alignItems: "left",
    marginTop: 20,
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    padding: 5,
    textAlignVertical: "auto",
  },
});
