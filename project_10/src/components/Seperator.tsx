/* eslint-disable prettier/prettier */
import {StyleSheet, View} from 'react-native';
import React from 'react';

const Seperator = () => {
  return <View style={styles.seperator}></View>;
};

export default Seperator;

const styles = StyleSheet.create({
  seperator: {
    height: 0.8,
    color: '#CAD5A2',
  },
});
