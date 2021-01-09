import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CubeScreen from '../Components/CubeScreenComponent';
import KeyboardComponent from '../Components/KeyboardComponent';

const GameCube = () => {
    return <View style = {styles.viewStyle0}>
        <View style = {styles.viewStyle1}>
        <Text style = {styles.textStyle}> The GameCube </Text>
        </View>
        <CubeScreen/>
        <KeyboardComponent/>
        </View>;
}

const styles = StyleSheet.create({
    viewStyle0: {
        borderWidth: 3, 
        borderColor: 'black',
        ...StyleSheet.absoluteFillObject

    },
    viewStyle1: {
        borderWidth: 0,
        borderColor: 'black',
        marginTop:0,
        justifyContent: 'center',
        backgroundColor: 'rgb(51, 240, 181)',
        borderRadius: 10,
        flex: 1

    },
  
    textStyle: {
        fontSize: 30,
        alignSelf: 'center',
        color: 'rgb(255,255,255)',
        fontWeight: "300"
    },

    viewStyle3: {

    }
    
    
});

export default GameCube; 
