import { Surface, Text } from "react-native-paper";
import { View } from "react-native";
import styles from "../styles";
import { RFValue } from "react-native-responsive-fontsize";
const AppTitle: React.FC = () => {
  return (
    <View
      style={{
        marginTop: RFValue(-20),
        paddingLeft: RFValue(10),
        paddingRight: RFValue(10),
        paddingBottom: RFValue(10),
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "#0047ab",
        }}
      >
        <Text style={styles.titleTextFast} variant="displayLarge">
          fast
        </Text>
        <Text style={styles.titleTextLane} variant="displayLarge">
          lane
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#0047ab",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Text style={styles.textSmall}>
          pases de{" "}
          <Text style={[styles.textSmall, styles.textBold]}>
            cruce ágil a usuarios
          </Text>{" "}
          de servicios médicos y turísticos
        </Text>
      </View>
    </View>
  );
};

export default AppTitle;
