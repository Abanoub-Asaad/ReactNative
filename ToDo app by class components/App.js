import React, { Component } from "react"
import { ImageBackground, Text, TextInput, ScrollView, Button, FlatList } from "react-native";
import { View, Image, ActivityIndicator, TouchableOpacity, StyleSheet } from "react-native";
import Card from "./Card";

export default class App extends Component {


  constructor(props) {
    super(props)
    this.state = {
      value: "",
      tasks: []
    }
  }

  render() {
    return (
      <View style={styles.container} >

        <Text style={{ fontSize: 48, color: "blue" }}>
          My ToDo
        </Text>

        <TextInput style={styles.textIn}
          placeholder="Enter task name then press enter"
          onChangeText={(val) => {
            this.setState({ value: val })
          }}
          returnKeyType="done"
          onSubmitEditing={() => {

            let task = this.state.tasks;
            task.push(this.state.value);
            this.setState({ tasks: task, value: "" })
          }}
          value={this.state.value}
        />

        <FlatList
          data={this.state.tasks}
          renderItem={({ item, index }) => {
            return (
              <Card
                task={item}

                deleteTask={() => {
                  let task = [...this.state.tasks]
                  task.splice(index, 1)
                  this.setState({ tasks: task })
                }}
              />
            )
          }}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center"
  },
  textIn: {
    //backgroundColor:"red",
    marginTop: 60,
    marginBottom: 40,
    width: "95%",
    height: 45,
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 10
  }
});

