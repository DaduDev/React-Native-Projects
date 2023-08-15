import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): JSX.Element {
  const [bg, setBg] = useState('#ffffff');
  const [btnColor, setBtnColor] = useState('#51E1ED');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    for (let index = 0; index < 6; index++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setBg(color);
    generateBtnColor();
  };

  const generateBtnColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    for (let index = 0; index < 6; index++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setBtnColor(color);
  };

  return (
    <>
      <StatusBar backgroundColor={bg} />
      <View style={[styles.btn1, {backgroundColor: bg}]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={[styles.actionbtn1, {backgroundColor: btnColor}]}>
            <Text style={styles.btnText}>Touch Me!</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={[styles.btn2, {backgroundColor: bg}]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={[styles.actionbtn2, {backgroundColor: btnColor}]}>
            <Text style={styles.btnText}>Touch Me!</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={[styles.btn3, {backgroundColor: bg}]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={[styles.actionbtn3, {backgroundColor: btnColor}]}>
            <Text style={styles.btnText}>Touch Me!</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  btn1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionbtn1: {
    borderRadius: 15,
    padding: 30,
  },
  actionbtn2: {
    width: 105,
    height: 100,
    borderRadius: 50,
    padding: 26,
    paddingTop: 35,
  },
  actionbtn3: {
    borderRadius: 15,
    padding: 30,
  },
  btnText: {
    // fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#ffffff',
  },
});

export default App;
