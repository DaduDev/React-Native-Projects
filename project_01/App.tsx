import React from 'react';
import {ScrollView, Text, SafeAreaView, TextInput} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Hello, World</Text>
        <TextInput defaultValue="I'm a default text" />
        <Text>Hello, World</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
