import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { ProductProvider } from "./src/providers/ProductProvider";
import { BottomTabs } from "./src/screen/navigations/BottomTabs";
import { FormProvider } from "./src/providers/FormProvider";
import { StackNavigators } from "./src/screen/navigations/StackNavigators";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <FormProvider>
        <ProductProvider>
          <StatusBar />
          <StackNavigators>
            <BottomTabs />
          </StackNavigators>
        </ProductProvider>
      </FormProvider>
    </NavigationContainer>
  );
}
