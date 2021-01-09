import React from 'react';
import {Text, View} from 'react-native';
import ImageDetail from '../Components/ImageDetail';

const ImageScreen = () => {
    return (<View>
        <ImageDetail 
            title = "Forest" 
            source = {require('../../images/forest.jpg')} 
            score = "1"
        />
        <ImageDetail 
            title = "Mountain" 
            source = {require('../../images/mountain.jpg')}
            score = "2" 
        />
        <ImageDetail 
            title = "Beach" 
            source = {require('../../images/beach.jpg')}
            score = "3"
        />
        </View>
    );
};

export default ImageScreen; 
