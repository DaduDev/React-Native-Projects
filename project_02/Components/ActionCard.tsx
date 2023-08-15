/* eslint-disable prettier/prettier */
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.elevatedCard1]}>
          <View style={styles.headingContainer}>
            <Text style={styles.headerText}>Data Structures</Text>
          </View>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            }}
            style={styles.cardImage}
          />
          <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
              Let's learn about basic data structures, which are very core to
              play with some logical problems and make fun of data by arranging
              and rearranging through different methods
            </Text>
          </View>
          <View style={styles.footerContainer}>
            <TouchableOpacity
              onPress={() => {
                openWebsite('https://dadudev.live/data-structures');
              }}>
              <Text style={styles.socialLink}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                openWebsite('https://hashnode.com/@dadudev');
              }}>
              <Text style={styles.socialLink}>Follow Me</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  card: {
    width: 350,
    height: 380,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard1: {
    backgroundColor: '#DE4839',
    elevation: 3,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  cardImage: {
    height: 200,
    width: 350,
  },
  bodyContainer: {
    padding: 8,
  },
  footerContainer: {
    padding: 2,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialLink: {
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
});
