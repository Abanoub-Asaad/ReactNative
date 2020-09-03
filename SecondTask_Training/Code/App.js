import React, { Component } from "react"
import { ImageBackground, Text, TextInput, ScrollView, Button } from "react-native";
import { View, Image, ActivityIndicator, TouchableOpacity } from "react-native";
import DisplayNum from "./DisplayNum";

export default class App extends Component {


  constructor(props) {
    super(props)
    this.state = {

      count: 0

    }
  }

  makeIncrement = () => {
    if (this.state.count == 20)
      alert("Number can't be bigger than 20");
    else
      this.setState({
        count: this.state.count + 1
      })
  }

  makeDecrement = () => {
    if (this.state.count == 0)
      alert("Number can't be less than 0");
    else
      this.setState({
        count: this.state.count - 1
      })
  }

  makeClear = () => {
    this.setState({
      count: 0
    })
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#000", justifyContent: "center", alignItems: "center" }}>

        <DisplayNum
          num={this.state.count}
        />

        <TouchableOpacity onPress={this.makeIncrement} >
          <View style={{
            backgroundColor: '#16213e', alignItems: 'center',
            justifyContent: 'center', borderRadius: 5, marginTop:20, width: 130, height: 60
          }}
          >
            <Text style={{ color: 'white' }}>Increase Count</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.makeDecrement} >
          <View style={{
            backgroundColor: '#16213e', alignItems: 'center',
            justifyContent: 'center', borderRadius: 5, marginTop:20, width: 130, height: 60
          }}
          >
            <Text style={{ color: 'white' }}>Decrease Count</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.makeClear} >
          <View style={{
            backgroundColor: '#16213e', alignItems: 'center',
            justifyContent: 'center', borderRadius: 5, marginTop:20, width: 130, height: 60
          }}
          >
            <Text style={{ color: 'white' }}>Clear</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}