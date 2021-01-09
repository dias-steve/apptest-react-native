import React from 'react';
import {Button, Text, StyleSheet, View} from 'react-native';

const KeyboardComponent = () => {
    return <View style = {styles.View}>
        <Text> Keyboard zone </Text>
    </View>;
}

const styles = StyleSheet.create({ 
    View: {
        flex: 1
    }
});

export default KeyboardComponent; 

