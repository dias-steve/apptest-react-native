import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('Pierre')
    return <View>
        <Text> Your name </Text>
        <TextInput
        style = {styles.input}
        value = {name}
        autoCapitalize = "none"
        autoCorrect = {false}
        onChangeText = { newValue => setName(newValue)}
        />

        <Text> Your name is {name} </Text>
        {name.length < 8 ? <Text> not good name</Text>: <Text> Good name !</Text>}
        </View>;
};



const styles = StyleSheet.create({
    input:{
        margin: 15,
        borderColor: 'rgb(0,0,0)',
        borderWidth: 1
    }
});

export default TextScreen;