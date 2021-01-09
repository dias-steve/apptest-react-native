import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BlocComponents from './BlocComponents';

const CubeScreenComponent  = () => {
    return <View style = {styles.View}> 
        <Text> Cube Screen</Text>
        <BlocComponents red= '255' green='255' blue='0'/>
        <BlocComponents red= '222' green='74' blue='204'/>
        </View>;
};

const styles = StyleSheet.create({
    View: {
        borderWidth: 0,
        borderColor: 'black',
        backgroundColor: 'rgb( 240, 224, 238)',
        flex: 3
    },
    bloc: {
        backgroundColor: 'rgb( 222, 74, 204)',
        borderColor:'rgb( 192, 44, 174)',
        borderWidth: 4,
        borderRadius: 20,
        height: 100,
        width: 100,
    }
})

export default CubeScreenComponent; 
