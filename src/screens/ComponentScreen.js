import React from 'react'
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {
  const name ="Sencer";
  
    return (
      <View>
        <Text style={styles.text}>Getting started with React Native! </Text>
        <Text style={styles.name}>My name is {name}</Text>
      </View>
    
    );
  };

const styles = StyleSheet.create({
  text: {
    fontSize: 45,
  },
  name: {
    fontSize: 20,
  },
})

export default ComponentScreen
