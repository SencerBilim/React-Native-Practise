import React, { useState } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native';

const Counter = () => {
    const [counter, setCounter] = useState(0)
  
    return ( <View>
        <Button title="Increase" 
        onPress={() => {setCounter(counter +1)}}/>
        <Button title="Decrease" 
        onPress={() => {setCounter(counter -1)}} />
        <Text> Current Count:</Text>
        <Text>{counter}</Text>
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

export default Counter;
