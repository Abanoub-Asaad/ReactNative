import React, { Component } from "react"
import { ImageBackground, Text, TextInput, ScrollView, Button } from "react-native";
import { View, Image, ActivityIndicator, TouchableOpacity } from "react-native";
import DisplayNum from "./DisplayNum";

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      low: '',
      high: '',
      randomNumber: ''
    }
  }

  generate=()=>{
    
    if(this.state.low=="" )
      alert("Please, Enter low num !")
    else if(this.state.high=="")
      alert("Please, Enter high num !");
    else if(this.state.low > this.state.high)
      alert("Low num must be less than high num");
    else{
      let res = Math.floor(Math.random()*this.state.high+this.state.low)+1;
      this.setState({randomNumber: res});
    }
    
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#03045e", justifyContent: "center", alignItems: "center" }}>

        <DisplayNum
        num = {this.state.randomNumber}
        />

        <TextInput
          placeholder={"Low"}
          backgroundColor={"#90e0ef"}
          style={{ paddingHorizontal: 20, marginTop: 20 }}
          onChangeText={(value) => {
            this.setState({ low: value })
          }}
          keyboardType={"numeric"}
        />

        <TextInput
          placeholder={"High"}
          backgroundColor={"#90e0ef"}
          style={{ paddingHorizontal: 20, marginTop: 10, marginVertical: 10 }}
          onChangeText={(value) => {
            this.setState({ high: value })
          }}
          keyboardType={"numeric"}
        />

        <Button
          title={"Generate Random Numbers"}
          color={"#0077b6"}
          onPress={this.generate}
        />

      </View>
    );
  }
}