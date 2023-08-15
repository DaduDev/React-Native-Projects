/* eslint-disable prettier/prettier */
import React from 'react';
import type {PropsWithChildren} from 'react';
import {View, StyleSheet, Text} from 'react-native';

type CurrencyButtonProps = PropsWithChildren<{
  name: string;
  flag: string;
}>;

const CurrencyButton = (props: CurrencyButtonProps): JSX.Element => {
  return (
    <View style={styles.btnContainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.name}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flag: {
    fontSize: 28,
    color: '#ffffff',
    marginBottom: 4,
  },
  name: {
    fontSize: 20,
    color: '#2d3436',
  },
});

export default CurrencyButton;
