import React from 'react';
import {Text, FlatList, StyleSheet} from 'react-native';

const ListeEcran = () => {
    const friends = [
        {name: "prenom 1"},
        {name: "prenom 2"},
        {name: "prenom 3"},
        {name: "prenom 4"},
        {name: "prenom 5"},
        {name: "prenom 6"},
        {name: "prenom 7"},
        {name: "prenom 8"},
        {name: "prenom 9"},
        {name: "prenom 10"}
    ]

    return (
        // si on veut l'index des elements de la liste il remplacer item par element
        // element = {item={name: }, index=1}
    <FlatList 
        // les props de flatlist
       // horizontal
        showsHorizontalScrollIndicator = {false}
        keyExtractor = {friends => friends.name}
        data ={friends} 
        renderItem = {({item})=> {
            return <Text style ={styles.textStyle}> {item.name}</Text>;
        }}
    />
    );
};

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 50
    } 
})

export default ListeEcran;