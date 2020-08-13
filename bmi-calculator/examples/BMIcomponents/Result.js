import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';

export default function Result({
  modalVisible,
  setModalVisible,
  bmiValue,
  bmiText,
  setGender,
  setHeight,
  setWeight,
  setAge
}) {
  function reCalculate() {
    setGender('');
    setHeight(160);
    setWeight(50);
    setAge(20);
    setModalVisible(false);
  }

  return (
    <View style={styles.containerModal}>
      <View style={styles.headerModal}>
        <Text style={styles.resultText}>Your Result</Text>
      </View>
      <View style={{ flex: 7 }}>
        <View style={styles.resultContent}>
          <Text style={{ fontSize: 16, color: 'white' }}>{bmiText}</Text>
          <Text style={{ fontSize: 50, fontWeight: 'bold', color: 'white' }}>
            {bmiValue}
          </Text>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 16, color: 'white' }}>
              YOUR BMI IS {bmiText}.
            </Text>
            <Text style={{ fontSize: 16, color: 'white' }}>Thank you!</Text>
          </View>
        </View>
      </View>
      <View style={styles.calButton}>
        <TouchableOpacity onPress={reCalculate}>
          <View style={styles.button}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
              RE-CALCULATE
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerModal: {
    flex: 1,
    backgroundColor: '#171b30',
    paddingHorizontal: 15,
  },
  headerModal: {
    flex: 1,
    justifyContent: 'center',
  },
  resultText: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
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
  resultContent: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#323344',
    marginVertical: 20,
    borderRadius: 5,
  },
});
