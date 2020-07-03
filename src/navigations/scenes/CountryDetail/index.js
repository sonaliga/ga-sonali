import React from 'react';
import {StyleSheet} from 'react-native';
import CountryList from './list';
import {ScrollView} from 'react-native-gesture-handler';

const CountryDetail = (props) => {
  const {route} = props;
  const {data = []} = route.params;

  return (
    <ScrollView>
      {data.map((country, index) => {
        return <CountryList data={country} />;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  DetailContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    width: 50,
    height: 50,
  },
});

export default CountryDetail;
