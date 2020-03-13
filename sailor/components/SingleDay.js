import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native';
import ListedPlanet from './ListedPlanet';

const SingleDay = () => {
  // const onPressButton = () =>  {
  //   alert('You tapped the button')
  // }

  return (
    <ScrollView >
      {/* this will be a list of individual planet components */}
      {planets.map(planet=> <ListedPlanet key={planet.id} planet={planet} /> )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default SingleDay
