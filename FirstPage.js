import React from "react";
import { StatusBar } from "expo-status-bar";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  FlatList,
  ScrollView,
  ImageBackground,
} from "react-native";

const windowWidth = Dimensions.get("window").width;

const DATA = [
  {
    id: "1",
    icon: "car",
    name: "Cars",
    score: 15,
    color: "blue",
  },
  {
    id: "2",
    icon: "dumbbell",
    name: "Sports",
    score: 10,
    color: "orange",
  },
  {
    id: "3",
    icon: "user-friends",
    name: "People",
    score: 0,
    color: "purple",
  },
  {
    id: "4",
    icon: "home",
    name: "Cities",
    score: 5,
    color: "green",
  },
];

const backgroundImage = require("../assets/background.jpg");

export default function FirstPage() {
  const renderItem = ({ item }) => (
    <View style={styles.itemScores}>
      <View style={styles.itemIcon}>
        <FontAwesome5 name={item.icon} size={28} />
      </View>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemScore}>{item.score}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground source={backgroundImage} style={styles.background}>
        <View style={styles.header}>
          <FontAwesome5 name="home" size={28} style={styles.homeIcon} />
          <Text style={styles.headerTitle}>PEOPLE</Text>
        </View>
        <Text style={styles.highScoreText}>High Scores</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
        <View style={styles.bottom}>
          <Text style={styles.yourScore}>Your Score: 13</Text>
          <View style={styles.mxh}>
            <View style={styles.fb}>
              <FontAwesome5 name="facebook-f" size={40} />
            </View>
            <View style={styles.tw}>
              <FontAwesome5 name="twitter" size={40} />
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  headerTitle: {
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 28,
    flex: 1,
  },
  homeIcon: {
    position: "absolute",
    left: 15,
  },
  highScoreText: {
    marginTop: 38,
    color: "white",
    textAlign: "center",
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: 30,
  },
  itemScores: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: 60,
    width: (windowWidth * 80) / 100,
    borderRadius: 30,
    marginBottom: 15,
    flexDirection: "row",
  },
  itemName: {
    flex: 1,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  itemIcon: {
    alignItems: "center",
    justifyContent: "center",
    height: 54,
    width: 54,
    borderRadius: 30,
    left: 3,
    backgroundColor: "purple",
  },
  itemScore: {
    alignSelf: "center",
    marginRight: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  yourScore: {
    color: "white",
    textAlign: "center",
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 30,
  },
  bottom: {
    height: 120,
  },
  mxh: {
    flexDirection: "row",
    justifyContent: "center",
  },
  fb: {
    backgroundColor: "white",
    borderRadius: 30,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
    borderWidth: 1,
  },
  tw: {
    marginLeft: 15,
    backgroundColor: "white",
    borderRadius: 30,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
    borderWidth: 1,
  },
});
