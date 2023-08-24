import { Surface } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "../styles";
import Header from "./Header";
import AppTitle from "./AppTitle";
import HomeButtons from "./HomeButtons";
import Login from "./Login";
import { useAppSelector } from "../redux/hooks";
import SignUp from "./SignUp";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native-gesture-handler";
const Main: React.FC = ({ navigation }) => {
  const homeButtonsVisible = useAppSelector(
    (state) => state.ui.homeButtonsVisible
  );

  const loginVisible = useAppSelector((state) => state.ui.loginVisible);
  const signUpVisible = useAppSelector((state) => state.ui.signUpVisible);

  return (
    <SafeAreaView
      style={{ backgroundColor: "#0047ab", justifyContent: "center" }}
    >
      <StatusBar style="light" />
      <Header />

      <AppTitle />

      <ScrollView style={styles.surfaceBottom}>
        {homeButtonsVisible && <HomeButtons navigation={navigation} />}
        {loginVisible && <Login />}
        {signUpVisible && <SignUp />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;
