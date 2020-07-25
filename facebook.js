import { StatusBar } from "expo-status-bar";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  View,
  SafeAreaView,
  Image,
  Switch,
  Dimensions,
  Button,
  TouchableOpacityBase,
} from "react-native";

const banner = require("../assets/banner.jpg");

export default function facebook() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Image source={banner} style={styles.banner} />
      {/* <Text style={styles.header}>Xin chào!</Text>
        <Text style={styles.name}>Do Ngoc Hung</Text>
        <Text style={styles.phone}>0855234900</Text>
        <View style={styles.box}>
          <TextInput
            style={styles.password}
            maxLength={6}
            secureTextEntry
            placeholder="******"
          />
          <FontAwesome5 name="lock" style={styles.lockIcon} />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.login}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>
         */}
      <View style={styles.content}>
        <TextInput
          style={styles.username}
          placeholder="Số điện thoại hoặc email"
        />
        <TextInput
          style={styles.password}
          placeholder="Mật khẩu"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.login}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.button2}>Quên mật khẩu?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.button2}>Quay lại</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text>---------------------HOẶC---------------------</Text>
        <TouchableOpacity style={styles.newAccount}>
          <Text style={styles.newAcc}>Tạo tài khoản mới</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  banner: {
    flex: 4,
    width: "100%",
    resizeMode: "cover",
  },
  content: {
    flex: 5,
    alignItems: "center",
    backgroundColor: "white",
  },
  username: {
    fontSize: 20,
    backgroundColor: "white",
    width: "90%",
    height: 46,
    marginTop: 20,
    borderWidth: 1,
    paddingStart: 10,
    borderColor: "gray",
  },
  password: {
    fontSize: 20,
    backgroundColor: "white",
    width: "90%",
    height: 46,
    borderWidth: 1,
    paddingStart: 10,
    borderColor: "gray",
    marginBottom: 10,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3377FF",
    width: "90%",
    height: 46,
    borderRadius: 8,
  },
  login: {
    color: "white",
    fontSize: 16,
  },
  button2: {
    fontSize: 16,
    color: "blue",
    marginTop: 10,
  },
  footer: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "white",
  },
  newAccount: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B3FFF2",
    width: "90%",
    height: 46,
    borderRadius: 8,
    marginBottom: 8,
    marginTop: 15,
  },
  newAcc: {
    color: "blue",
    fontSize: 16,
  },
});
