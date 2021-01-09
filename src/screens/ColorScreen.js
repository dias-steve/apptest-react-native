import React, {useState} from 'react';
import {View, Button, Text, FlatList, StyleSheet} from 'react-native';


const ColorScreen = () => {
    const [color, setcolor] = useState([])
    return <View>
        <Button
            title = "Nouvelle couleur"
            onPress = { () => {
                setcolor([...color, randomRgb()])
                console.log(color)
            }
            }
        />
        <FlatList 
            keyExtractor = {(item) => item}
            data = {color}
            renderItem = {({item}) => {
                return <View>
                    <View style={{height: 100, width: 100, backgroundColor: item }}/> 
                    <Text> {item} </Text>
                    </View>;
            }}
        />
        
    </View>;
};

const randomRgb = () => {
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);

    return `rgb(${red},${green},${blue})`;
};
const styles = StyleSheet.create({});

export default ColorScreen;