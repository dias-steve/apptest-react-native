import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

// on utilise les props pour configurer la navigation entre les pages 
const HomeScreen = ({navigation}) => {

  return (
    <View>
    <Text style={styles.text}>Home</Text>
    <Button
     title = "Component page"
     onPress = { () => (
       console.log('[Bouton Component page]'),
       navigation.navigate('Components')
       )}
    />

    <Button
      title = "Liste page"
      onPress = { () => (
        console.log('[Bouton Liste]'),
        navigation.navigate('Liste')

      )}
    />

    <Button
      title = "Image Screen"
      onPress = {() => (
        navigation.navigate('ImageScreen'),
        console.log('[Bouton Image Screen]')
      )}
    />

<Button
      title = "Counter"
      onPress = {() => (
        navigation.navigate('Counter'),
        console.log('[Bouton Counter]')
      )}
    />
  <Button
      title = "Color"
      onPress = {() => (
        navigation.navigate('ColorScreen'),
        console.log('[Bouton Color]')
      )}
    />

<Button
      title = "Colorconfig"
      onPress = {() => (
        navigation.navigate('Colorconfig'),
        console.log('[Bouton Colorconfig]')
      )}
    />
<Button
  title = "Colorconfig2"
  onPress = {() => (
    navigation.navigate('ColorConfig2'),
    console.log('[Bouton ColorConfig2]')
  )}
/>

<Button
  title = "CounterScreen"
  onPress = {() => (
    navigation.navigate('CounterScreen'),
    console.log('[Bouton CounterScreen]')
  )}
/>

<Button
  title = "Text Screen"
  onPress = {() => (
    navigation.navigate('TextScreen'),
    console.log('[Bouton TextScreen]')
  )}
/>

<Button
  title = "Game Cube"
  onPress = {() => (
    navigation.navigate('GameCube'),
    console.log('[Bouton GameCube]')
  )}
/>
    <TouchableOpacity
      onPress = { () => (
        console.log('[Touchable Liste]'),
        navigation.navigate('Liste')
      )}
    >
      <Text> Liste </Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
