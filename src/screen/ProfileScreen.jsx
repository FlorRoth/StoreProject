import { SafeAreaView, StyleSheet,View, Text, FlatList } from "react-native";
import { useContext, useEffect } from "react";
import { CustomButton } from "./components/ui/CustomButton";
import { FormContext } from "../contexts/FormContext";
import { Spinner } from "./components/ui/Spinner";
export default function ProfileScreen() {
  const { state, getUserData, logout } = useContext(FormContext);
  useEffect(() => {
    getUserData();
  }, [state.isLogged]);

  const dataUser = [
    { id:1,data: state.user.email },
    { id:2,data: state.user.name?.firstname },
    { id:3,data: state.user.name?.lastname },
    { id:6,data: state.user.phone },
    { id:4,data: state.user.username },
    { id:5,data: 'address' },
  ];
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  console.log(state.user.name?.firstname);
  console.log(dataUser);
  return (
    <SafeAreaView style={styles.container}>
      {state.isLoading ? (
            <Spinner />
          ) :
       <FlatList
        data={dataUser}
        renderItem={({item}) => <Item title={item.data} />}
        keyExtractor={item => item.id}
      />}
      <CustomButton ButtonPress={() => logout()} btnText={"LOG OUT"} />
    </SafeAreaView>
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
