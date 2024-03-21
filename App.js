import { FormProvider } from "./src/providers/FormProvider";
import LoginScreen from "./src/screen/LoginScreen";
import SignUpScreen from "./src/screen/SignUpScreen";
import SuccessfulScreen from "./src/screen/SuccessfulScreen";

export default function App() {
  return (
    <FormProvider>
      <SignUpScreen />
      {/* <LoginScreen /> */}
      {/* <SuccessfulScreen /> */}
    </FormProvider>
  );
}
