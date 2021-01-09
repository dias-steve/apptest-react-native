import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsExercice1 = () => {
    const name = "Steve";
    return (
       <View>
        <Text style= {styles.textStyle}> Voilà l'application de {name}</Text>
        <Text style = {styles.subTextStyle}> je suis un développeur REACT Native :D</Text>
       </View>
        );
};

const styles= StyleSheet.create({
    textStyle:{
        fontSize: 30
    },
    subTextStyle:{
        fontSize: 70
    }
});

export default ComponentsExercice1;