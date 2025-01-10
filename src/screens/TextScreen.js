import React, { useState } from "react";

import { View, Text, StyleSheet,TextInput } from "react-native"


const TextScreen = () => {
const [name, setName] = useState("");

    return <View>
        <Text>Password:</Text>
        <TextInput style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)} />
        {name.length > 0 && name.length < 5 ? (
    <Text style={{ color: 'red' }}>Password should be longer than 5 characters</Text>
) : null}
    </View>
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: "black",
        borderWidth: 1,
        padding: 5
    }
});

export default TextScreen;