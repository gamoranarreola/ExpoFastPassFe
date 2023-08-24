import {useState} from "react";
import Icon from 'react-native-vector-icons/AntDesign';
import {Menu, Text, Button} from "react-native-paper";

import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {setLanguage} from "../redux/uiSlice";

const LanguageSelector: React.FC = (props) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);
  const language = useAppSelector(state => state.ui.language);
  const dispatch = useAppDispatch();

  return (
    <Menu
      visible={menuVisible}
      onDismiss={closeMenu}
      anchor={
        <Button onPress={openMenu}>
          <Text style={{color: props.color, fontWeight: 'bold', fontSize: 16}}>{language === 'en' ? 'English' : 'Español'}&nbsp;<Icon name="caretdown" /></Text>
        </Button>
      }
      anchorPosition="bottom">
      <Menu.Item
        onPress={() => {
          dispatch(setLanguage("en"));
        }}
        title="English"
        trailingIcon={language === 'en' ? "check-bold" : ""}
      />
      <Menu.Item
        onPress={() => {
          dispatch(setLanguage("es"));
        }}
        title="Espa&ntilde;ol"
        trailingIcon={language === 'es' ? "check-bold" : ""}
      />
    </Menu>
  );
};

export default LanguageSelector;
