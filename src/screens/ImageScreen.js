import React from 'react'
import { Text, StyleSheet, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return <View>
        <ImageDetail score = "7" title="Forest" imageSource={require("../../assets/forest.jpg")} />
        <ImageDetail score = "10" title="Beach" imageSource={require("../../assets/beach.jpg")} />
        <ImageDetail score = "5" title="Mountain" imageSource={require("../../assets/mountain.jpg")} />

        </View>
};


const styles = StyleSheet.create({});

export default ImageScreen;