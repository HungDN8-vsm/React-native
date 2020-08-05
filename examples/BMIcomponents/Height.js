import React, { useState } from 'react';

import { StyleSheet, Text, View, Dimensions, Slider } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function Height() {
  const [height, setHeight] = useState(160);

  return (
    <View style={styles.heightBox}>
      <Text style={{ color: '#7a7c8a' }}>HEIGHT</Text>
      <Text style={styles.heightInfo}>{height} cm</Text>
      <Slider
        style={{ width: (windowWidth * 85) / 100, height: 40 }}
        minimumValue={0}
        maximumValue={200}
        minimumTrackTintColor="#744b60"
        maximumTrackTintColor="black"
        value={height}
        step={1}
        onValueChange={(value) => setHeight(value)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  heightBox: {
    height: 140,
    backgroundColor: '#323344',
    marginVertical: 12,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  heightInfo: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    alignItems: 'flex-end',
  },
});
