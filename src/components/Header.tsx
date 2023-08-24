import { Surface } from "react-native-paper";

import styles from "../styles";
import LanguageSelector from "./LanguageSelector";
import { View } from "react-native";
const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <LanguageSelector color="white" />
    </View>
  );
};

export default Header;
