import {Divider, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

import { useAppSelector } from "../redux/hooks";
import lang from '../lang/en-es';
import styles from '../styles';
import { ScrollView } from 'react-native-gesture-handler';

const About: React.FC = props => {
  const language = useAppSelector(state => state.ui.language);

  return (
    <ScrollView style={styles.p20}>
      <Text style={[styles.titleTextBlk]}>{lang.about.fastlane[language]}:</Text>
      <Divider style={styles.my10} />
      <Text style={[styles.bodyTextBlk]}>{lang.about.notValid[language]}</Text>
      <Divider style={styles.my10} />
      <Text style={[styles.bodyTextBlk]}>{lang.about.singleTrip[language]}</Text>
      <Divider style={styles.my10} />
      <Text style={[styles.bodyTextBlk]}>{lang.about.courtesyPass[language]}</Text>
      <Divider style={styles.my10} />
      <Text style={[styles.bodyTextBlk]}>{lang.about.unlawfulReproduction[language]}</Text>
      <Divider style={styles.my10} />
      <Text style={[styles.bodyTextBlk]}>{lang.about.validity[language]}</Text>
      <Divider style={styles.my10} />
      <Text style={[styles.bodyTextBlk]}>{lang.about.comments[language]}</Text>
    </ScrollView>
  );
};

export default About;
