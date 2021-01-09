import React from 'react';
import {Text, View, Image} from 'react-native';

const ImageDetail = (props) => {
    console.log(props)
    return (
        <View>
            <Image source ={props.source} />
            <Text>{props.title}</Text>
            <Text> Score: {props.score}</Text>
        </View> 
    );
};

export default ImageDetail; 
