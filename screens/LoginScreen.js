import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import LoginForm from "../components/LoginScreen/LoginForm";

const INSTAGRAM_LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png";
const LoginScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.logocontainer}>
      <Image source={{ uri: INSTAGRAM_LOGO, height: 100, width: 100 }} />
    </View>
    <LoginForm navigation={navigation} />
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logocontainer: {
    alignItems: "center",
    marginTop: 60,
  },
});

export default LoginScreen;
