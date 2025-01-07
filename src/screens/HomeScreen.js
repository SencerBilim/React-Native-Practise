import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";


const HomeScreen = ({ navigation }) => {

  

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Selam! </Text>
      <Button 
      onPress={() => navigation.navigate("Component")}
      title=" Go to Components Demo" 
      />
      <Button 
      onPress={() => navigation.navigate("List")}
      title=" Go to List Demo" 
      />
      <Button 
      onPress={() => navigation.navigate("Image")}
      title=" Go to Image Screen Demo" 
      />
      <Button 
      onPress={() => navigation.navigate("Counter")}
      title=" Go to Counter Demo" 
      />
      <Button 
      onPress={() => navigation.navigate("Color")}
      title=" Go to Color Demo" 
      />
      <Button 
      onPress={() => navigation.navigate("Square")}
      title=" Go to Square Demo" 
      />
      
    </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 45,
    marginBottom: 20,
  },
  linkText: {
    fontSize: 20,
    color: 'blue',
    marginTop: 20,
  },
});

export default HomeScreen;
