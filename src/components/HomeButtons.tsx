import {Button, Text} from 'react-native-paper';

import styles from '../styles';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import lang from '../lang/en-es';
import {setHomeLayersVisibility} from '../redux/uiSlice';

const HomeButtons: React.FC = ({navigation}) => {
  const dispatch = useAppDispatch();
  const language = useAppSelector(state => state.ui.language);

  return (
    <>
      <Button
        mode="contained-tonal"
        style={styles.appButton}
        onPress={() => dispatch(setHomeLayersVisibility('login'))}>
        <Text
          style={{
            textTransform: 'uppercase',
            color: '#fff',
            fontWeight: 'bold',
          }}>
          {lang.homeButtons.logIn[language]}
        </Text>
      </Button>
      <Button
        mode="contained-tonal"
        style={styles.appButton}
        onPress={() => dispatch(setHomeLayersVisibility('signUp'))}>
        <Text
          style={{
            color: '#0047ab',
            fontWeight: 'bold',
          }}>
          {lang.homeButtons.signUp[language]}
        </Text>
      </Button>
      <Button mode="text" onPress={() => navigation.navigate('DrawerNav')}>
        <Text style={{color: '#FFF', fontWeight: 'bold'}}>{lang.homeButtons.useAsGuest[language]}</Text>
      </Button>
    </>
  );
};

export default HomeButtons;
