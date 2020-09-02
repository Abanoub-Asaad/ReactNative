import React, { Component } from "react"
import { ImageBackground, Text, TextInput, ScrollView, Button } from "react-native";
import { View, Image, ActivityIndicator, TouchableOpacity } from "react-native";
import DisplayNum from "./DisplayNum";

export default class App extends Component {


  constructor(props) {
    super(props)
    this.state = {
      
      count:''

    }
  }

  makeIncrement = () => {
    if (this.state.count == 20)
      alert("Number can't be bigger than 20");
    else
      this.setState({
        count: count + 1
      })
  }

  makeDecrement = () => {
    if (this.state.count == 0)
      alert("Number can't be less than 0");
    else
      this.setState({
        count: count - 1
      })
  }

  makeClear = () => {
    this.setState({
      count: 0
    })
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#03045e", justifyContent: "center", alignItems: "center" }}>

        <DisplayNum
          num={this.state.count}
        />

        <Button
          title={"Increment"}
          color={"#0077b6"}
          onPress={this.makeIncrement}
        />

        <Button
          title={"Decrement"}
          color={"#0077b6"}
          onPress={this.makeDecrement}
        />

        <Button
          title={"Clear"}
          color={"#0077b6"}
          onPress={this.makeClear}
        />

      </View>
    );
  }
}