import { SafeAreaView } from "react-native-safe-area-context";
import { Divider, Text } from "react-native-paper";

import { useAppSelector } from "../redux/hooks";
import LanguageSelector from "./LanguageSelector";
import styles from "../styles";
import lang from "../lang/en-es";
import { View } from "react-native";

const Settings: React.FC = (props) => {
  const language = useAppSelector((state) => state.ui.language);

  return (
    <View style={[styles.p20, styles.flexRow]}>
      <Text style={[styles.bodyTextBlk, { width: "50%" }]}>
        {lang.settings.language[language]}
      </Text>
      <LanguageSelector />
      <Divider style={styles.my10} />
    </View>
  );
};

export default Settings;
