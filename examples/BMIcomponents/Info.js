import React, { useState, useCallback } from 'react';
import { Entypo } from '@expo/vector-icons';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function Info() {
  const [weight, setWeight] = useState(50);
  const [age, setAge] = useState(20);

  const minusWeight = () => {
    if (weight > 1) setWeight((weight) => weight - 1);
  };

  const plusWeight = () => {
    setWeight((weight) => weight + 1);
  };

  const minusAge = () => {
    if (age > 1) setAge((age) => age - 1);
  };

  const plusAge = () => {
    setAge((age) => age + 1);
  };

  let timer;
  const onMinusWeightPressIn = () => {
    minusWeight();
    this.timer = setTimeout(onMinusWeightPressIn, 200);
  };

  const onPlusWeightPressIn = () => {
    plusWeight();
    this.timer = setTimeout(onPlusWeightPressIn, 200);
  };

  const onMinusAgePressIn = () => {
    minusAge();
    this.timer = setTimeout(onMinusAgePressIn, 200);
  };

  const onPlusAgePressIn = () => {
    plusAge();
    this.timer = setTimeout(onPlusAgePressIn, 200);
  };

  const onButtonPressOut = () => {
    this.timer !== undefined ? this.clearTimeout(this.timer) : null;
  };

  return (
    <View style={styles.info}>
      <View style={styles.weightBox}>
        <Text style={{ color: '#7a7c8a' }}>WEIGHT</Text>
        <Text style={styles.heightInfo}>{weight}</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            // onPress={minusWeight}
            onPressIn={onMinusWeightPressIn}
            onPressOut={onButtonPressOut}>
            <View style={styles.minusBox}>
              <Entypo name="minus" size={24} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={plusWeight}
            onPressIn={onPlusWeightPressIn}
            onPressOut={onButtonPressOut}>
            <View style={styles.plusBox}>
              <Entypo name="plus" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.weightBox}>
        <Text style={{ color: '#7a7c8a' }}>AGE</Text>
        <Text style={styles.heightInfo}>{age}</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            // onPress={minusAge}
            onPressIn={onMinusAgePressIn}
            onPressOut={onButtonPressOut}>
            <View style={styles.minusBox}>
              <Entypo name="minus" size={24} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={plusAge}
            onPressIn={onPlusAgePressIn}
            onPressOut={onButtonPressOut}>
            <View style={styles.plusBox}>
              <Entypo name="plus" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  info: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  weightBox: {
    backgroundColor: '#323344',
    width: (windowWidth * 42) / 100,
    height: (windowWidth * 42) / 100,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 7,
  },
  plusBox: {
    height: 30,
    width: 30,
    backgroundColor: '#5e606e',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  minusBox: {
    height: 30,
    width: 30,
    backgroundColor: '#5e606e',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginRight: 30,
  },
  heightInfo: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    alignItems: 'flex-end',
  },
});
