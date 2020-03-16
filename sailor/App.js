import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, FlatList, ScrollView, ImageBackground } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { createMonthMarkers, getDayEph } from './astro'
import { ListedPlanet } from './components'
import blanket from './assets/blanketbackground.png'
import * as icons from './assets'

const App = () => {
  const [markers, setMarkers] = useState({})
  const [planets, setPlanets] = useState([])
  const [today, setToday] = useState({})

  const fetchDayPlanets = async date => {
    try {
      setToday(date)
      date.month -= 1
      const eph = await getDayEph(date)
      const planetArr = Object.values(eph).slice(0, 10)
      setPlanets(planetArr)
      console.log(planetArr)
    } catch (err) { console.log(err) }
  }

  const fetchMonthMarkers = async date => {
    try {
      date.month -= 1
      const monthMarkers = await createMonthMarkers(date)
      setMarkers(monthMarkers)
      console.log(date, markers)
    } catch (err) { console.log(err) }
  }

  useEffect(() => {
    fetchMonthMarkers({day: 15, month: 3, year: 2020})
    fetchDayPlanets({day: 15, month: 3, year: 2020, dateString: '2020-03-15'})
  }, []);

  return (
    <ImageBackground source={blanket} style={{width: '100%', height: '100%'}}>
      <Calendar onMonthChange={(month) => fetchMonthMarkers(month)} onDayPress={(day)=> fetchDayPlanets(day)} markedDates={markers} markingType={'multi-dot'} />
      <ScrollView >
        <View style={styles.container} >
          <Text style={styles.date} >date: {today.dateString} </Text>
        </View>
        {planets.map(planet=> <ListedPlanet key={planet.name} icon={icons[planet.name]} planet={planet} /> )}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  date: {
    fontWeight: '700'
  }
});

export default App
