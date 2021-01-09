
import React, {useReducer} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ColorConfigurator from '../Components/ColorConfigurator';

const reducer = (state, action) => {
    switch (action.type){
        case 'change_plus':
            return{...state, counter: state.counter+1};
        case 'change_less':
            return {...state, counter: state.counter-1};
        default:
            return state;
    }

}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {counter: 0})
    return <View>
        <Text> CounterScreen </Text>
        <ColorConfigurator 
            color = "counter"
            onPlus= {() => dispatch({type: "change_plus"})}
            onLess = {() => dispatch({type: "change_less"})}
        />

        <Text> Counter: {state.counter}</Text>
    </View>;
}

const styles = StyleSheet.create({});


export default CounterScreen; 
