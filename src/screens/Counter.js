import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';


const Counter = () =>{
    const [counter, setcounter] = useState(0);

    return <View>

        <Button 
            title = "plus"
            onPress = {() => {
                setcounter(counter +1);
            }}
        />
         <Button 
            title = "moins"
            onPress = {() => {
                setcounter(counter -1);
            }}
        />

        <Text>Counter: {counter}</Text>

    </View>;  
}

const styles = StyleSheet.create({});
export default Counter;