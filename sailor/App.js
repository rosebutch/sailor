import React from 'react';
import { StyleSheet, Text, View, Image, Button, FlatList, ScrollView } from 'react-native';
import planetsymbols from './assets/planetsymbols.jpg'

export default function App() {
  const onPressButton = () =>  {
    alert('You tapped the button!')
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={planetsymbols} style={styles.symbols} />
        <Text style={styles.sailor} >Holy shit it's a motherfuckin app, dude</Text>
        <Button onPress={onPressButton} title="Button" color="#841584" />
      </ScrollView>
      <FlatList data={[{id: "1", name: 'Sun'},{id: "2", name: 'Moon'},{id: "3", name: 'Mercury'},{id: "4", name: 'Venus'},{id: "5", name: 'Mars'},{id: "6", name: 'Jupiter'},{id: "7", name: 'Saturn'},{id: "8", name: 'Uranus'},{id: "9", name: 'Neptune'},{id: "10", name: 'Pluto'}]} renderItem={({item}) => <Text key={item.id} style={styles.item}>{item.name}</Text>} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  symbols: {
    width: 300,
    height: 150
  },
  sailor: {
    color: '#888',
    fontSize: 30
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
