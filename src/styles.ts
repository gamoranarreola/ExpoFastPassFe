import { StyleSheet,Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const Dheight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    header: {
      display: "flex",
      alignItems: "flex-end",
      height: "10%",
      backgroundColor: "#0047ab",
      paddingHorizontal: 10
    },
    surfaceTop: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: "20%",
      backgroundColor: "#0047ab"
    },
    titleTextFast: {
      color: "#fff",
      fontWeight: "bold",
      fontStyle: "italic",
      textTransform: "uppercase",
      letterSpacing: 4
    },
    titleTextLane: {
      color: "#0096ff",
      fontWeight: "bold",
      fontStyle: "italic",
      textTransform: "uppercase",
      letterSpacing: 4
    },
    surfaceBottom: {
      
      
      display: "flex",
      height:  Dheight * 0.8,
      backgroundColor: "#0096ff",
      padding: "10%",
      overflow: 'scroll'
    },
    appButton: {
      marginTop: 10,
      marginBottom: 10,
      padding: 5,
      borderColor: "#fff",
      borderWidth: 2,
      borderRadius: 14,
      backgroundColor: "transparent"
    },
    appButtonText: {
      fontWeight: "bold",
      fontSize: 16
    },
    appButtonTextWhite: {
      color: "#fff"
    },
    appButtonTextBlue: {
      color: "#0047ab"
    },
    headerTitle: {
      display: "flex",      
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#36454f",
      width: "86%"
    },
    surfaceVisitors: {
      flex:1,
      height: "100%",
      backgroundColor: "#0047ab",
      padding: 20
    },
    bodyText: {
     fontSize: RFValue(13),
      color: "#fff"
    },
    linkText: {
      fontSize: RFValue(13),
      color: "#0096ff"
    },
    pb20: {
      paddingBottom: 20
    },
    textSmall: {
      textTransform: "uppercase",
      color: "#fff",
      fontWeight: "600",
      fontSize: RFValue(7),
      fontStyle: "italic"
    },
    textBold: {
      fontWeight: "bold"
    },
    p20: {
      padding: 20
    },
    my10: {
      marginTop: 10,
      marginBottom: 10
    },
    flexRow: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    howToArrive: {
      display: "flex",
      alignContent: "flex-start"
    },
    bodyTextBlk:{
      fontSize: RFValue(13)
   },
   titleTextBlk:{
    fontSize: RFValue(18)
   }
  });

  export default styles;
