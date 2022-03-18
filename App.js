import { StatusBar } from "expo-status-bar";
import React from "react";
import { TextInput, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import axios from "axios";

export default function App() {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    const songId = e.target.value;
    axios
      .get(`https://api.discogs.com/releases/${songId}`)
      .then(({ data: { title, resource_url, extraartists, artists } }) => {
        const songObj = {
          title: title,
          artist: artists[0].name,
          extraArtists: extraartists,
          url: resource_url,
        };
        console.log(songObj);
      })
      .catch((err) => console.log(err));
  };

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
        onSubmitEditing={(e) => {
          handleSubmit(e);
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
