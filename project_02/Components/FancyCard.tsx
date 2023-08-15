/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Image
            style={styles.cardImage}
            source={{
              uri: 'https://www.designingbuildings.co.uk/w/images/b/b6/TajMahal1.jpg',
            }}
          />
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Taj Mahal</Text>
            <Text style={styles.cardLocation}>Agra, UP</Text>
            <Text style={styles.cardDescription}>
              White marble mausoleum built by Mughal emperor Shah Jahan.
            </Text>
            <Text style={styles.cardFooter}>15 min away</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    flexGrow: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 205,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardInfo: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 10,
  },
  cardDescription: {
    color: '#758283',
    fontSize: 16,
    marginBottom: 12,
    flexShrink: 1,
  },
  cardLocation: {
    color: '#000000',
    fontSize: 16,
    marginBottom: 4,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  cardFooter: {
    color: '#000000',
    fontSize: 17,
  },
});

export default FancyCard;
