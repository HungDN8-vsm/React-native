import React, { useState } from 'react';
import { Foundation } from '@expo/vector-icons';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function Gender({ gender, setGender }) {
  return (
    <View style={styles.gender}>
      <TouchableOpacity
        style={
          gender === 'Male' ? styles.genderOptionSelected : styles.genderOption
        }
        onPress={() => setGender('Male')}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Foundation name="male-symbol" size={70} color="#50c8ed" />
          <Text style={{ color: '#7a7c8a' }}>MALE</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          gender === 'Female'
            ? styles.genderOptionSelected
            : styles.genderOption
        }
        onPress={() => setGender('Female')}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Foundation name="female-symbol" size={70} color="#e74f25" />
          <Text style={{ color: '#7a7c8a' }}>FEMALE</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  gender: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  genderOption: {
    // backgroundColor: '#24263b',
    backgroundColor: '#323344',
    width: (windowWidth * 42) / 100,
    height: (windowWidth * 42) / 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  genderOptionSelected: {
    // backgroundColor: '#24263b',
    backgroundColor: '#24263b',
    width: (windowWidth * 42) / 100,
    height: (windowWidth * 42) / 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
});
