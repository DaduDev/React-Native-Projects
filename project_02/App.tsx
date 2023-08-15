import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCard from './Components/FlatCard';
import ElevatedCard from './Components/ElevatedCard';
import FancyCard from './Components/FancyCard';
import ActionCard from './Components/ActionCard';
import ContactList from './Components/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElevatedCard />
        <FancyCard />
        <ActionCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
