import React, {useState, Fragment} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Button} from 'react-native-elements';
import {getCountryWeather} from '../../../actions/countryActions';
import {SvgCssUri} from 'react-native-svg';

const CountryList = (props) => {
  const [capitalData, setCapitalData] = useState({});
  const {data = []} = props;

  const handleWeather = async (capital) => {
    try {
      const data = await getCountryWeather(capital);
      setCapitalData(data);
    } catch (err) {
      alert('Something went wrong!!');
    }
  };
  const {current = {}} = capitalData;
  const {capital, population, latlng, flag} = data;
  return (
    <View style={styles.DetailContainer}>
      <View>
        <Text>Capital: {capital} </Text>
        <Text>Population: {population} </Text>
        <Text>Latlng: {latlng.join()}</Text>
        <SvgCssUri width="50" height="50" uri={flag} />
        <Button
          title="Capital Weather"
          onPress={() => handleWeather(capital)}
          disabled={Object.values(current).length > 0}
        />
      </View>
      <View>
        {Object.values(current).length > 0 && (
          <Fragment>
            <Text>Temperature: {current.temperature} </Text>
            <Text>Wind Speed: {current.wind_speed} </Text>
            <Text> Precip: {current.precip} </Text>
            {current.weather_icons &&
              current.weather_icons.map((url, index) => {
                return (
                  <Image
                    style={styles.imgStyle}
                    source={{
                      uri: url,
                    }}
                    key={index}
                  />
                );
              })}
          </Fragment>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  DetailContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'gray',
    margin: 10,
    padding: 10,
  },
  imgStyle: {
    width: 50,
    height: 50,
  },
});

export default CountryList;
