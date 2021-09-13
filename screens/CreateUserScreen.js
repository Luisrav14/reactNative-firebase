import React, { useState } from "react";
import { View, Text, Button, ScrollView, StyleSheet, TextInput } from "react-native";
import firebase from "../database/firebase";

const CreateUserScreen = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const saveNewUser = async () => {
    if (state.name === "") {
      alert("Please enter a name");
    } else if (state.email === "") {
      alert("Please enter a Email");
    } else if (state.phone === "") {
      alert("Please enter a Phone");
    } else {
      await firebase.db.collection("users").add({
        name: state.name,
        email: state.email,
        phone: state.phone,
      });
      alert("Saved");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Name User" onChangeText={(value) => handleChangeText("name", value)} />
      </View>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Email User" onChangeText={(value) => handleChangeText("email", value)} />
      </View>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Phone User" onChangeText={(value) => handleChangeText("phone", value)} />
      </View>
      <View>
        <Button title="Save User" onPress={() => saveNewUser()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },

  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});

export default CreateUserScreen;
