import { Text, View } from "react-native";
import { Surface, IconButton } from "react-native-paper";

import { useAppSelector } from "../redux/hooks";
import lang from "../lang/en-es";
import { RFValue } from "react-native-responsive-fontsize";
const HeaderTitle: React.FC = (props) => {
  const language = useAppSelector((state) => state.ui.language);

  return (
    <Surface
      style={{
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#36454f",
        padding: RFValue(5),
      }}
    >
      <IconButton
        icon="menu"
        iconColor="#fff"
        onPress={() => props.navigation.toggleDrawer()}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingRight: 15,
        }}
      >
        <Text
          style={{
            fontSize: RFValue(18),
            textTransform: "uppercase",
            color: "#fff",
            fontWeight: "bold",
            fontStyle: "italic",
          }}
        >
          {lang.headerTitle.welcome[language]}
        </Text>
        <Text
          style={{
            fontSize: RFValue(13),
            textTransform: "uppercase",
            color: "#fff",
            fontStyle: "italic",
            letterSpacing: 10,
          }}
        >
          {lang.headerTitle.visitors[language]}
        </Text>
      </View>
    </Surface>
  );
};

export default HeaderTitle;
