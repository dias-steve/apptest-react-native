import React, {useReducer} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ColorConfigurator from '../Components/ColorConfigurator';


const COLOR_INCREMENT = 15; 
const reducer = (state, action) => {
    switch (action.type){
        case 'change_red':
            return state.red + action.payload >= 0 && state.red + action.payload <=255 
                ? { ...state, red: state.red + action.payload} 
                :state;
        case 'change_green':
            return state.green + action.payload >= 0 && state.green + action.payload <= 255 
                ? {...state, green: state.green + action.payload}
                :state;
        case 'change_blue': 
            return state.blue + action.payload >= 0 && state.blue + action.payload <=255
                ?{...state, blue: state.blue + action.payload}
                :state;
        default:
            return state; 
    }
}

const ColorConfig2 = () => {

    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    return <View>
        <Text> Color config 2 </Text>
        <ColorConfigurator 
        color = "red"
        onPlus = { () => dispatch({type: "change_red", payload:COLOR_INCREMENT })} 
        onLess = { () => dispatch({type: "change_red", payload: -1 * COLOR_INCREMENT})}
        
        />
        <ColorConfigurator 
            color = "green"
            onPlus = { () => dispatch({type: "change_green", payload:COLOR_INCREMENT })} 
            onLess = { () => dispatch({type: "change_green", payload: -1 * COLOR_INCREMENT})}
        />
        <ColorConfigurator 
            color = "blue"
            onPlus = { () => dispatch({type: "change_blue", payload:COLOR_INCREMENT })} 
            onLess = { () => dispatch({type: "change_blue", payload: -1 * COLOR_INCREMENT})}
        />

        <Text> rgb({state.red},{state.green},{state.blue})</Text>
        <View style={{height: 200, width: 200, backgroundColor: `rgb(${state.red},${state.green},${state.blue})` }}/>
        </View>;
};

const styles = StyleSheet.create({});

export default ColorConfig2;

