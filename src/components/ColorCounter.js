import React, { useState } from 'react'
import { StyleSheet, View, Button, Text} from 'react-native';

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    
  
    return  <View>
        <Text>{color}</Text>
        <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
        <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
    </View>
    

  };




const styles = StyleSheet.create({
  text: {
    fontSize: 45,
  },
  name: {
    fontSize: 20,
  },
})

export default ColorCounter;
