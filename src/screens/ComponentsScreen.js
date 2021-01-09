// étape 1: importer les bibliotèques
import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

//étape 2:  contruir le contructeur du conposant
const ComponentsScreen = () => {
    const variable1 = "mon message";
    const variable2 = <Text>mon autre message</Text>;
    const number = 1+3
    return (
        <View>
        <Text style = {styles.textStyle}>This is the compoments screen ok</Text>
        <Text>{variable1}</Text>
        {variable2}
        <Text>{number}</Text>
        </View>
        ); 
};

//étape 3: contruir la page de style du conposant 
const styles = StyleSheet.create({
    textStyle:{
        fontSize: 30
    }
});
//étape 4: exporter le présent conposant
export default  ComponentsScreen;

