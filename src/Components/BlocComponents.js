import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';

const BlocComponents  = (props) => {
    const {red, green, blue, onPress} = props;
    return <TouchableOpacity onPress= {onPress}>
    <View style = {
        {...styles.bloc,
            backgroundColor: `rgb(${red},${green},${blue})`,
            borderColor:`rgb(${red-40},${green-40},${blue-40})`,
         }}/>
         </TouchableOpacity>;
        
};
// rgb( 222, 74, 204)
const styles = StyleSheet.create({

    bloc: {
        
      
        borderWidth: 4,
        borderRadius: 20,
        height: 100,
        width: 100
    }
});

export default BlocComponents;
