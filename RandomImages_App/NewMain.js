
import React, { Component } from "react"
import { ImageBackground, Text, TextInput, ScrollView } from "react-native";
import { View, Image, ActivityIndicator, TouchableOpacity } from "react-native";

class NewMain extends Component {

    constructor(props) {
        super(props)
        this.state = {

            imageURL: 'https://source.unsplash.com/random/300x400'

        }

    }

    Load_New_Image = () => {

        this.setState({
            imageURL: 'https://source.unsplash.com/random/300x400'+new Date().toLocaleString()

        })
    }

    render() {
        let txt = "Hi :-)";
        return (
            <View style={{ flex: 1 }}>

                <Text>Abanoub Asaad Azab</Text>
                <Image style={{ width: 300, height: 400 }} source={{ uri: this.state.imageURL }} >
                </Image>
                <TouchableOpacity onPress={this.Load_New_Image} >
                    <View style={{
                        backgroundColor: 'red', alignItems: 'center',
                        justifyContent: 'center', borderRadius: 15
                    }}
                    >
                        <Text style={{ color: 'white' }}>Get Random Image</Text>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }

}
export default NewMain