import React, {useState} from 'react';
import {View,StyleSheet,Button, Text} from 'react-native';
import ColorConfigurator from '../Components/ColorConfigurator';

const COLOR_INCREMENT = 15;


const Colorconfig = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    
    const setColor = (color, value) => {
        switch (color){
            case 'red':
                red + value <= 255 && red + value >= 0 ? setRed(red + value) : null;
                return;
            case 'green':
                green + value <= 255 && green + value >= 0 ? setGreen(green + value) : null;
                return;

            case 'blue':
                blue + value <= 255 && blue + value >= 0 ? setBlue(blue + value) : null;
                return; 
        }

    }
    
    return <View>
    <Text> Colorconfig2</Text>
    <ColorConfigurator 
        color = "red"
        onPlus = { () => setColor('red', +COLOR_INCREMENT)} 
        onLess = { () => setColor('red', -COLOR_INCREMENT)}
        
     />
    <ColorConfigurator 
        color = "green"
        onPlus = { () => setColor('green', +COLOR_INCREMENT)} 
        onLess = { () => setColor('green', -COLOR_INCREMENT)}
    />
    <ColorConfigurator 
        color = "blue"
        onPlus = { () => setColor('blue', +COLOR_INCREMENT)} 
        onLess = { () => setColor('blue', -COLOR_INCREMENT)}
    />

    <Text> rgb({red},{green},{blue})</Text>
    <View style={{height: 200, width: 200, backgroundColor: `rgb(${red},${green},${blue})` }}/>
    </View>;
}

const styles = StyleSheet.create();

export default Colorconfig;
