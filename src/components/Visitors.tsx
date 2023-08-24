import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Surface, FAB, Button, TextInput } from "react-native-paper";
import { useState, useEffect } from "react";
import { useAppSelector } from "../redux/hooks";
import styles from "../styles";
import lang from "../lang/en-es";
import AntDesign from "react-native-vector-icons/AntDesign";
import { RFValue } from "react-native-responsive-fontsize";
import {
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
const Visitors: React.FC = () => {
  const language = useAppSelector((state) => state.ui.language);
  const [visible, setVisible] = useState<boolean>(false);
  const [scanVisible, setScanVisible] = useState<boolean>(false);
  const [manualCapVisible, setManualCapVisible] = useState<boolean>(false);
  const [pasNo, setPasNo] = useState<string>("");
  const [plates, setPlates] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [modalScan, setModalScan] = useState<boolean>(false);
  const [scanText, setScanText] = useState<string>("");

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setScanText(data);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
      <Surface style={styles.surfaceVisitors}>
        <Text variant="bodyLarge" style={[styles.bodyText, styles.pb20]}>
          {lang.visitors.noPass[language]}
        </Text>
        <Text variant="bodyMedium" style={[styles.bodyText, styles.pb20]}>
          {lang.visitors.start[language]}
        </Text>
        <Text variant="bodyMedium" style={styles.bodyText}>
          {lang.visitors.moreInfo[language]}{" "}
          <Text variant="bodyMedium" style={styles.linkText}>
            http://www.tijuana.gob.mx/
          </Text>
        </Text>

        <FAB
          onPress={() => {
            setVisible(true);
          }}
          icon="plus"
          color="#fff"
          style={{
            alignSelf: "center",
            position: "absolute",
            bottom: 20,
            backgroundColor: "#0096ff",
            borderRadius: 30,
          }}
        />
      </Surface>

      {/* SCAN CAMERA MODAL */}
      <Modal visible={scanVisible}>
        <SafeAreaView
          style={{
            flex: 1,

            alignItems: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              flexDirection: "row",
              width: "100%",
              backgroundColor: "#333",
              alignItems: "flex-end",
              padding: RFValue(20),
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setVisible(true);
                setScanVisible(false);
              }}
            >
              <AntDesign name="close" color="#fff" size={RFValue(20)} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 10,
              width: "100%",
              justifyContent: "space-evenly",
              padding: RFValue(20),
            }}
          >
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={StyleSheet.absoluteFillObject}
            />
            {scanned && (
              <Button
                style={{ marginTop: RFValue(20) }}
                icon="camera"
                buttonColor="#333"
                color="#fff"
                mode="contained"
                onPress={() => setScanned(false)}
              >
                {lang.visitors.rescan[language]}
              </Button>
            )}
          </View>
        </SafeAreaView>
      </Modal>

      {/* ADD PASS MODAL */}
      <Modal visible={visible}>
        <SafeAreaView
          style={{
            flex: 1,

            alignItems: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              flexDirection: "row",
              width: "100%",
              backgroundColor: "#333",
              alignItems: "flex-end",
              padding: RFValue(20),
            }}
          >
            <Text
              style={[
                styles.bodyText,
                { fontSize: RFValue(20), marginLeft: RFValue(65) },
              ]}
            >
              {lang.visitors.newPass[language]}{" "}
            </Text>

            <TouchableOpacity
              onPress={() => {
                setVisible(false);
              }}
            >
              <AntDesign name="close" color="#fff" size={RFValue(20)} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 10,
              width: "100%",
              justifyContent: "space-evenly",
              padding: RFValue(20),
            }}
          >
            {!manualCapVisible && (
              <Surface style={{ padding: RFValue(20) }}>
                <Text> {lang.visitors.scanCodeTitle[language]} </Text>

                <Button
                  style={{ marginTop: RFValue(20) }}
                  icon="camera"
                  buttonColor="#333"
                  color="#fff"
                  mode="contained"
                  onPress={() => {
                    setVisible(false);
                    setScanVisible(true);
                  }}
                >
                  {lang.visitors.btnScanTitle[language]}
                </Button>

                {scanText != "" && (
                  <View
                    style={{
                      borderTopWidth: 2,
                      borderTopColor: "#bbb",
                      marginTop: RFValue(10),
                      padding: RFValue(10),
                    }}
                  >
                    <Text>{scanText}</Text>
                  </View>
                )}
              </Surface>
            )}
            <Surface style={{ padding: RFValue(20) }}>
              <Text> {lang.visitors.captureInfoTitle[language]} </Text>
              {!manualCapVisible && (
                <Button
                  style={{ marginTop: RFValue(20) }}
                  buttonColor="#333"
                  color="#fff"
                  mode="contained"
                  onPress={() => setManualCapVisible(true)}
                >
                  {lang.visitors.btnCaptureInfoTitle[language]}
                </Button>
              )}
              {manualCapVisible && (
                <View
                  style={{
                    borderTopWidth: 2,
                    borderTopColor: "#bbb",
                    marginTop: RFValue(10),
                    padding: RFValue(10),
                  }}
                >
                  <TextInput
                    label={lang.visitors.inputPaseNo[language]}
                    value={pasNo}
                    onChangeText={(text) => setPasNo(text)}
                  />
                  <TextInput
                    label={lang.visitors.inputPlates[language]}
                    value={plates}
                    onChangeText={(text) => setPlates(text)}
                  />
                  <TextInput
                    label={lang.visitors.inputLastName[language]}
                    value={lastName}
                    onChangeText={(text) => setLastName(text)}
                  />
                  <Button
                    style={{ marginTop: RFValue(20) }}
                    buttonColor="#333"
                    color="#fff"
                    mode="contained"
                    onPress={() => setManualCapVisible(false)}
                  >
                    {lang.visitors.btnSubmitManualCap[language]}
                  </Button>
                </View>
              )}
            </Surface>
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
};

export default Visitors;
