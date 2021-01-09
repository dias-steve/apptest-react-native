import React from 'react';
import {Text, FlatList} from 'react-native';

const mesAmis = [
    {nom: "nom1", age: "1"},
    {nom: "nom2", age: "2"},
    {nom: "nom3", age: "3"},
    {nom: "nom4", age: "4"},
    {nom: "nom5", age: "5"},
    {nom: "nom6", age: "6"}
];


const Exercice2 = () => {
    return (<FlatList
        keyExtractor = {mesAmis=> mesAmis.nom}
        data = {mesAmis}
        renderItem = {({item}) => {
            return <Text> {item.nom} - age: {item.age} </Text>;
        }}
    />);
    }
export default Exercice2;