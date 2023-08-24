import {Divider, Text, Button} from 'react-native-paper';
import openMap from 'react-native-open-maps';
import {SafeAreaView} from 'react-native-safe-area-context';
import { Image } from 'react-native';

import {useAppSelector} from '../redux/hooks';
import styles from '../styles';
import { ScrollView } from 'react-native-gesture-handler';

const HowToArrive: React.FC = props => {
  const language = useAppSelector(state => state.ui.language);

  const coords = {
    lng: 32.53512,
    lat: -117.02922,
  };

  /**
   *
   */
  const goToMap = () => {
    openMap({latitude: coords.lng, longitude: coords.lat});
  };

  return (
    <ScrollView style={styles.p20}>
      <Image
        source={require('../assets/mapa.jpeg')}
        style={{
          resizeMode: 'stretch',
          width: '100%',
          marginTop: 0,
          marginBottom: 20
        }} />
      <>
        {language && language === 'en' && (
          <>
            <Text style={styles.bodyTextBlk}>
            1. Head to <Text style={styles.textBold}>Downtown Tijuana</Text>.
            </Text>
            <Divider style={styles.my10} />
            <Text style={styles.bodyTextBlk}>
              2. Take <Text style={styles.textBold}>2nd Street</Text> to the{' '}
              <Text style={styles.textBold}>San Ysidro Port of Entry</Text>.
            </Text>
            <Divider style={styles.my10} />
            <Text style={styles.bodyTextBlk}>
              3. Enter through the{' '}
              <Text style={[styles.bodyTextBlk,styles.textBold]}>
                "Servicios M&eacute;dicos-Colonia Federal"
              </Text>{' '}
              designated lane.
            </Text>
            <Button mode="text" onPress={goToMap}>
              SHOW ON MAP
            </Button>
          </>
        )}
        {language && language === 'es' && (
          <>
            <Text>
            1. Dir&iacute;jase al <Text style={styles.textBold}>Centro de la Ciudad</Text>.
            </Text>
            <Divider style={styles.my10} />
            <Text>
              2. Tome la <Text style={styles.textBold}>Calle Segunda</Text> hacia la{' '}
              <Text style={styles.textBold}>Garita de San Ysidro</Text>.
            </Text>
            <Divider style={styles.my10} />
            <Text>
              3. Ingrese por el carril delimitado con la se&ntilde;alizaci&oacute;n{' '}
              <Text style={styles.textBold}>
                "Servicios M&eacute;dicos-Colonia Federal"
              </Text>
            </Text>
            <Button
              mode="contained"
              onPress={goToMap}
              icon="map"
              style={{
                marginTop: 20,
                borderRadius: 0,
                backgroundColor: "#50C878"
              }}
            >
              MOSTRAR EN MAPA
            </Button>
          </>
        )}
      </>
    </ScrollView>
  );
};

export default HowToArrive;
