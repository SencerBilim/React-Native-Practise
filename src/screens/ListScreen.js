import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
    const friends = [
        { name: "İrem", age: "25" },
        { name: "Erdem", age: "25" },
        { name: "Efe", age: "24" },
        { name: "Cem", age: "24" },
        { name: "Can", age: "25" },
        { name: "Altan", age: "24" },
        { name: "Kerem", age: "24" },
        { name: "Tolga", age: "24" },
        { name: "Volkan", age: "24" },
        { name: "Hasan", age: "27" }
    ];

    return (
        <FlatList 
         keyExtractor={friend => friend.name}
         data={friends}
         renderItem={({ item })=> {
            return <Text style={styles.textStyle}>{item.name} - Age {item.age} </Text>
         }} 
         />
    )
};

const styles = StyleSheet.create({
    textStyle: {
       fontSize: 30,
       fontWeight: "bold"
    }
});

export default ListScreen