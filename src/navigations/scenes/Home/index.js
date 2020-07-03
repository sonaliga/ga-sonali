import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {countryAction} from '../../../actions/countryActions';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const [disable, setDisable] = useState(true);
  const [country, setCountry] = useState('');
  const navigation = useNavigation();

  const handleText = (text) => {
    setCountry(text);
    setDisable(text.trim() === '');
  };

  const handleSubmit = async () => {
    try {
      const data = await countryAction(country);
      if (data.status && data.status !== 200) {
        alert('Something went wrong!!');
        return
      }
      navigation.navigate('CountryDetail', {
        data,
      });
    } catch (err) {
      alert('Something went wrong!!');
    }
  };

  return (
    <View style={styles.HomeContainer}>
      <Input
        placeholder="Enter country"
        onChangeText={handleText}
        value={country}
      />
      <Button title="Submit" disabled={disable} onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
