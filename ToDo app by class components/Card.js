import React, { Component } from "react"
import { ImageBackground, Text, TextInput, ScrollView, Button } from "react-native";
import { View, Image, ActivityIndicator, TouchableOpacity, StyleSheet } from "react-native";

export default class Card extends Component {


    constructor(props) {
        super(props)
        this.state = {
            checked: false
        }
    }

    render() {
        return (
            <View style={styles.container} >

                {/******* Check Box *******/}
                <TouchableOpacity style={[styles.checkBox, this.state.checked ? {
                    backgroundColor: "gray"

                } : {}]} onPress={() => {
                    this.setState({ checked: !this.state.checked })
                }} >

                    {this.state.checked && <Image
                        source={require("./true.png")}
                        style={{ width: 18, height: 18 }}
                    />}

                </TouchableOpacity>

                {/********* Task Text *********/}
                <Text numberOfLines={1} style={styles.taskText}>
                    {this.props.task}

                </Text>

                {/********** Delete ********/}
                <TouchableOpacity style={styles.deleteStyle} onPress={() => {
                    this.props.deleteTask()
                }} >

                    <Image
                        source={require("./trash.png")}
                        style={{ width: 25, height: 25, marginRight: 70 }}
                    />

                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor:"red",

        flexDirection: "row",
        width: "95%",
        height: 65,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "gray",
        alignItems: "center",
        paddingHorizontal: 10
    },
    checkBox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 3,
        alignItems: "center"
    },
    taskText: {
        fontSize: 18,
        marginLeft: 10,
        width: 300
    },
    deleteStyle: {
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center"
    }
});

