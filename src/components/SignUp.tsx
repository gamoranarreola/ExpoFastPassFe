import {Card, TextInput, Button} from 'react-native-paper';

import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {setHomeLayersVisibility} from '../redux/uiSlice';
import lang from '../lang/en-es';

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const language = useAppSelector(state => state.ui.language);

  /**
   *
   */
  const handleBackClick = () => {
    dispatch(setHomeLayersVisibility('homeButtons'));
  };

  return (
    <Card>
      <Card.Content>
        <TextInput label={lang.signUp.givenNames[language]} />
        <TextInput label={lang.signUp.surNames[language]} />
        <TextInput label={lang.signUp.maidenName[language]} />
        <TextInput label={lang.signUp.email[language]} />
        <TextInput label={lang.signUp.password[language]} />
        <TextInput label={lang.signUp.confirm[language]} />
        <Button
          mode="contained"
          onPress={handleBackClick}
          style={{
            marginTop: 20,
            borderRadius: 0,
            backgroundColor: "#50C878"
          }}
        >
          {lang.signUp.register[language]}
        </Button>
      </Card.Content>
    </Card>
  );
};

export default SignUp;
