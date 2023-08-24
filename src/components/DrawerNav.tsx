import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {
  useNavigation,
  useIsFocused,
  useRoute,
} from "@react-navigation/native";

import { useAppSelector } from "../redux/hooks";
import Visitors from "./Visitors";
import HeaderTitle from "./HeaderTitle";
import About from "./About";
import HowToArrive from "./HowToArrive";
import Settings from "./Settings";
import Main from "./Main";
import lang from "../lang/en-es";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  FlatList,
  ScrollView,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const Drawer = createDrawerNavigator();

const DrawerNav: React.FC = () => {
  const language = useAppSelector((state) => state.ui.language);
  const { navigate } = useNavigation<any>();

  const CustomDrawerContent = (props) => {
    return (
      <DrawerContentScrollView {...props}>
        <StatusBar style="light" />
        <DrawerItemList {...props} />
        <DrawerItem
          style={{ borderBottomWidth: 2, borderBottomColor: "#0096ff" }}
          // icon={()=><AntDesign name="logout" color="#fff"/>}
          labelStyle={{ color: "#fff", fontSize: 16 }}
          label={lang.drawerNav.logoff[language]}
          onPress={() => navigate("Main")}
        />
      </DrawerContentScrollView>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0047ab" }}>
      <NavigationContainer independent>
        <Drawer.Navigator
          initialRouteName="Visitors"
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          screenOptions={{
            drawerStyle: {
              backgroundColor: "#0047ab",
            },
            drawerLabelStyle: {
              color: "#fff",
              fontSize: 16,
            },
            drawerItemStyle: {
              borderBottomWidth: 2,
              borderBottomColor: "#0096ff",
              backgroundColor: "#0047ab",
            },
            header: ({ navigation, route, options }) => {
              return <HeaderTitle navigation={navigation} />;
            },
          }}
        >
          <Drawer.Screen
            name={lang.drawerNav.home[language]}
            component={Visitors}
          />
          <Drawer.Screen
            name={lang.drawerNav.about[language]}
            component={About}
          />
          <Drawer.Screen
            name={lang.drawerNav.howToArrive[language]}
            component={HowToArrive}
          />
          <Drawer.Screen
            name={lang.drawerNav.settings[language]}
            component={Settings}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default DrawerNav;
