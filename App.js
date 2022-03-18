import { StatusBar } from "expo-status-bar";
import React from "react";
import { TextInput, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <Text style={{ margin: 15 }}>Extra Artists</Text>
      <TextInput
        style={{
          height: 50,
          backgroundColor: "#FFFF",
          padding: 10,
        }}
        placeholder={"Paste a song ID"}
        onChangeText={(input) => {
          setText(input);
        }}
        defaultValue={text}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEEEEE",
    alignItems: "center",
    justifyContent: "center",
  },
});
