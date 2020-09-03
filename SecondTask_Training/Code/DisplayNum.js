import React, { Component } from "react"
import { ImageBackground, Text, TextInput, ScrollView, Button } from "react-native";
import { View, Image, ActivityIndicator, TouchableOpacity } from "react-native";



class DisplayNum extends Component {

    constructor(props) {
        super(props);
        this.state = {
                
        }
    }

    render() {

        return (

            <View style={{ width: 200, height: 200, borderRadius: 50, backgroundColor: "#fca311", alignItems: "center", justifyContent: "center", marginVertical:10 }} >
                <Text style={{ fontSize: 48 }}>
                    {this.props.num}
                </Text>


            </View>);

    }

}
export default DisplayNum
