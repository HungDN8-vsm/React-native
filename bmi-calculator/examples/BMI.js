import React, { useState } from 'react';
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
  Modal,
} from 'react-native';

import Gender from './BMIcomponents/Gender';
import Height from './BMIcomponents/Height';
import Info from './BMIcomponents/Info';
import Result from './BMIcomponents/Result';

const windowWidth = Dimensions.get('window').width;
let bmiValue = 0;
let bmiText = '';

export default function BMI() {
  const [modalVisible, setModalVisible] = useState(false);
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState(160);
  const [weight, setWeight] = useState(50);
  const [age, setAge] = useState(20);

  function calculateBmi() {
    // Tính chỉ số BMI
    bmiValue = (weight / ((height / 100) * (height / 100))).toFixed(2);
    if (bmiValue < 18.5) {
      bmiText = 'UNDERWEIGHT';
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      bmiText = 'NORMAL';
    } else if (bmiValue >= 25 && bmiValue < 30) {
      bmiText = 'OVERWEIGHT';
    } else if (bmiValue >= 30 && bmiValue < 35) {
      bmiText = 'OBESE';
    } else {
      bmiText = 'MORBIDLY OBESE';
    }

    setModalVisible(true);
  }

  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>BMI CALCULATOR</Text>
        </View>
        <View style={styles.content}>
          <Gender gender={gender} setGender={setGender} />

          <Height height={height} setHeight={setHeight} />

          <Info
            weight={weight}
            setWeight={setWeight}
            age={age}
            setAge={setAge}
          />

          <View style={styles.calButton}>
            <TouchableOpacity onPress={calculateBmi}>
              <View style={styles.button}>
                <Text
                  style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
                  CALCULATE
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <Modal animationType="slide" visible={modalVisible}>
          <Result
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            bmiValue={bmiValue}
            bmiText={bmiText}
            setGender={setGender}
            setHeight={setHeight}
            setWeight={setWeight}
            setAge={setAge}
          />
        </Modal>
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
  resultContent: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#323344',
    marginVertical: 20,
    borderRadius: 5,
  },
});
