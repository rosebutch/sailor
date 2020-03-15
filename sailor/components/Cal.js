import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { createMonthMarkers, getDayEph } from '../astro'

const Cal = () => {
  const [markers, setMarkers] = useState({})

  const dayPress = async day => {
    try {
      day.month -= 1
      const eph = await getDayEph(day)
      console.log(eph)
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
    fetchMonthMarkers({day: 14, month: 3, year: 2020})
  }, []);

  return (
    <View style={styles.container}>
      <Calendar onMonthChange={(month) => fetchMonthMarkers(month)} onDayPress={(day)=> dayPress(day)} markedDates={markers} markingType={'multi-dot'} />
    </View>
  );
}
export default Cal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

