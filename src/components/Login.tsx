import {useState} from 'react';

import {Card, TextInput, Button, Text, Portal, Modal} from 'react-native-paper';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {setHomeLayersVisibility} from '../redux/uiSlice';
import lang from '../lang/en-es';

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const language = useAppSelector(state => state.ui.language);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleBackClick = () => {
    dispatch(setHomeLayersVisibility('homeButtons'));
  };

  const hideModal = () => setIsModalVisible(false);
  const showModal = () => setIsModalVisible(true);

  return (
    <>
      <Card style={{ marginBottom: 20 }}>
        <Card.Content>
          <TextInput label="Email" value={email} />
          <TextInput label={language === "en" ? "Password" : "Contraseña"} value={password} />
        </Card.Content>
      </Card>
      <Button
        mode="contained"
        style={{
          borderRadius: 14,
          backgroundColor: "#0096ff",
          borderWidth: 2,
          borderColor: "#fff"
        }}
      >
        <Text style={{ color: "#fff", fontWeight: 'bold' }}>{lang.logIn.logIn[language]}</Text>
      </Button>
      <Button mode="text" onPress={showModal}>
        <Text style={{ color: "#fff", fontWeight: 'bold' }}>{lang.logIn.forgotPassword[language]}</Text>
      </Button>
      <Button mode="text" onPress={handleBackClick}>
        <Text style={{ color: "#fff", fontWeight: 'bold' }}>{'< ' + lang.logIn.return[language]}</Text>
      </Button>
      <Portal>
        <Modal visible={isModalVisible} onDismiss={hideModal} style={{ padding: 40 }}>
          <Card>
            <Card.Title title={lang.resetPassword.reset[language]} titleStyle={{ fontWeight: 'bold', alignSelf: 'center' }}></Card.Title>
            <Card.Content>
              <Text style={{ paddingBottom: 20 }}>{lang.resetPassword.instructions[language]}</Text>
              <TextInput label={lang.resetPassword.email[language]} value={email} />
            </Card.Content>
            <Card.Actions style={{ display: 'flex', alignContent: 'center' }}>
              <Button onPress={hideModal}>{lang.resetPassword.buttons.cancel[language]}</Button>
              <Button>{lang.resetPassword.buttons.ok[language]}</Button>
            </Card.Actions>
          </Card>
        </Modal>
      </Portal>
    </>
  );
};

export default Login;
