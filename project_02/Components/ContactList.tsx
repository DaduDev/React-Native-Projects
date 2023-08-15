/* eslint-disable prettier/prettier */
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const contacts = [
  {
    uid: 1,
    name: 'Dadapeer Shaik',
    status: 'Not a Competitive Programmer',
    imageUrl: 'https://avatars.githubusercontent.com/u/69897636?v=4',
  },
  {
    uid: 2,
    name: 'Hitesh Choudhary',
    status: 'Just an extra ordinary teacher',
    imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
  },
  {
    uid: 3,
    name: 'Kunal Kushwaha',
    status: 'Empowering communities via open-source and education.',
    imageUrl: 'https://avatars.githubusercontent.com/u/42698533?v=4',
  },
  {
    uid: 4,
    name: 'William',
    status: '101010',
    imageUrl: 'https://avatars.githubusercontent.com/u/651833?v=4',
  },
];

export default function ContactList() {
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{uri: imageUrl}} style={styles.userImage} />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text numberOfLines={2} style={styles.userStatus}>
                {status}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container: {
    paddingHorizontal: 25,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#12B0E8',
    padding: 8,
    borderRadius: 8,
  },
  userImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  userStatus: {
    fontSize: 12,
  },
});
