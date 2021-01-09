import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

const ColorConfigurator = ({color, onPlus, onLess}) => {
    console.log(color)
    return <View>
        <Text> ColorConfigurator {color} </Text>
        <Button
            title = {`Plus ${color}`}
            onPress = {onPlus}
            
        />

        <Button
            title = {`Less ${color}`}
            onPress = {onLess}
            
        />
        </View>
}

const styles = StyleSheet.create({});

export default ColorConfigurator;