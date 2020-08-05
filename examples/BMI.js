import React from 'react';
import { Foundation, Entypo } from '@expo/vector-icons';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Dimensions,
  StatusBar,
  Slider,
} from 'react-native';

import Gender from "./BMIcomponents/Gender";

import Height from "./BMIcomponents/Height";

import Info from "./BMIcomponents/Info";

const windowWidth = Dimensions.get('window').width;

export default function BMI() {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>BMI CALCULATOR</Text>
        </View>
        <View style={styles.content}>

          <Gender />

          <Height />

          <Info />

          <View style={styles.calButton}>
            <TouchableOpacity>
              <View style={styles.button}>
                <Text
                  style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
                  CALCULATE
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171b30',
  },
  header: {
    backgroundColor: '#1d2236',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    color: 'white',
    fontSize: 18,
  },
  content: {
    marginTop: 5,
    backgroundColor: '#1d2236',
    flex: 1,
    paddingHorizontal: 15,
  },
  calButton: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    height: 45,
    backgroundColor: '#e83d66',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
