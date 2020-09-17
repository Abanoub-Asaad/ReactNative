import React, { Component, useState } from "react"
import { ImageBackground, Text, TextInput, ScrollView, Button, FlatList } from "react-native";
import { View, Image, ActivityIndicator, TouchableOpacity, StyleSheet } from "react-native";
import Card from "./Card";

function App() {

  const [value, setValue]=useState("")
  const [tasks, setTasks]=useState([])

  return (
    <View style={styles.container} >

      <Text style={{ fontSize: 48, color: "blue" }}>
        My ToDo
        </Text>

      <TextInput style={styles.textIn}
        placeholder="Enter task name then press enter"
        onChangeText={(val) => {
          setValue(val)
        }}
        returnKeyType="done"
        onSubmitEditing={() => {

          let task = [...tasks];
          task.push(value);
          setTasks(task)
          setValue("")
          
        }}
        value={value} 
      />

      <FlatList
        data={tasks}
        renderItem={({ item, index }) => {
          return (
            <Card
              task={item} 

              deleteTask={() => {
                let task = [...tasks]
                task.splice(index, 1)
                setTasks(task)
              }}
            />
          )
        }}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    alignItems: "center"
  },
  textIn: {
    marginTop: 60,
    marginBottom: 40,
    width: "95%",
    height: 45,
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 10
  }
});

export default App; 