import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { ProductProvider } from "./src/providers/ProductProvider";
import { BottomTabs } from "./src/screen/navigations/BottomTabs";
import { FormProvider } from "./src/providers/FormProvider";
import { StackNavigators } from "./src/screen/navigations/StackNavigators";
import { StatusBar } from "react-native";
import { CartProvider } from "./src/providers/CartProvider";

export default function App() {
  return (
    <NavigationContainer>
      <FormProvider>
        <CartProvider>
          <ProductProvider>
            <StatusBar />
            <StackNavigators>
              <BottomTabs />
            </StackNavigators>
          </ProductProvider>
        </CartProvider>
      </FormProvider>
    </NavigationContainer>
  );
}
