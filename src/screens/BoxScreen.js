import React from "react";

import { View, Text, StyleSheet } from "react-native"


const BoxScreen = () => {


    return <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>Child #1</Text>
        <Text style={styles.textTwoStyle}>Child #2</Text>
        <Text style={styles.textThirdStyle}>Child #3</Text>
    </View>
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: "black",
        height: 400,
        flexDirection: "row",
        justifyContent: "space-between"

        
        
        
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: "red",
        backgroundColor: "lightcoral",
        height: 100,
        width: 100
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: "red",
        backgroundColor: "skyblue",
        height: 100,
        width: 100,
        marginTop: 100
       
    },
    textThirdStyle: {
        borderWidth: 3,
        borderColor: "red",
        backgroundColor: "violet",
        height: 100,
        width: 100
        
    }
});

export default BoxScreen;