import React, { useReducer } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native';


const number = 1

const reducer = (state, action) => {
  //state === {red: number, green: number, blue: number};
    //action === { type: "change_red" || "change_green || "change_blue", payload: 50 || -50}
  switch (action.type) {
    case "Increase":
      return state + action.payload;
    case "Decrease":
      return state - action.payload;
    default: 
      return state;
  }
}


const Counter = () => {
    const [state, dispatch] = useReducer(reducer, 0)
  
    return ( <View>
        <Button title="Increase" 
        onPress={() => dispatch({ type: "Increase", payload: number})}/>
        <Button title="Decrease" 
        onPress={() => dispatch({ type: "Decrease", payload: number})}/>
        <Text> Current Count:</Text>
        <Text>{state}</Text>
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
