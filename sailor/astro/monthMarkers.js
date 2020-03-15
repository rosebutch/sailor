// modules
const { planetMarkers }  = require('../constants')
const { getMonthEph } = require('./ephemerisCalls')

const internalSignAngle = degree => {
  return degree % 30
}

const findSignChange = (monthEph, planet) => {
  const degrees = monthEph.map(day => day.planets[planet].apparentLongitudeDd)
  const changes = []
  if (planet === "moon") {
    for (let i = 1; i < degrees.length; i++) {
      if (internalSignAngle(degrees[i-1]) > internalSignAngle(degrees[i])) {
        changes.push(monthEph[i].dateStr)
      }
    }
  } else {
    for (let i = 1; i < degrees.length; i++) {
      if (Math.abs(internalSignAngle(degrees[i-1]) - internalSignAngle(degrees[i])) > 25) {
        changes.push(monthEph[i].dateStr)
      }
    }
  }
  return changes
}

const findRetrogrades = (monthEph, planet) => {
  const degrees = monthEph.map(day => day.planets[planet].apparentLongitudeDd)
  const changes = []
  if (planet === 'mercury' || planet === 'venus' || planet === 'mars') {
    for (let i = 1; i < degrees.length; i++) {
      if (degrees[i-1] > degrees[i] && degrees[i-1] - degrees[i] < 344) {
        changes.push(monthEph[i].dateStr)
      }
    }
  } // find direction changes for outer planets
  return changes
}

// output needs to look like this: {'2017-10-25': {dots: [planetMarker.moon, planetMarker.mars]},'2017-10-26': {dots: [planetMarker.saturn]}}
const createMonthMarkers = async month => {
  try {
    const monthEph = await getMonthEph(month)
    const planets = Object.keys(planetMarkers)
    const markers = {}
    for (let i = 0; i< 10; i++) { // only want to show the whole retrograde period for mercury, venus, and mars. other outer planets are retrograde like half of the year. for those, it would be better in the future to show dates when they change direction, and not every retrograde day which would clog the calendar
    // (also, sun and moon never retrograde. they're not planets.)
      const retroDates = findRetrogrades(monthEph, planets[i])
      const signDates = findSignChange(monthEph, planets[i])
      const dates = [...retroDates, ...signDates]
      const marker = planetMarkers[planets[i]]
      for (let j = 0; j < dates.length; j++) {
        if (markers[dates[j]] ) {
          if (!markers[dates[j]].dots.includes(marker)) markers[dates[j]].dots.push(marker)
        } else {
          markers[dates[j]] = { dots: [marker]}
        }
      }
    }
    return markers
  } catch (err) { console.log('createMonthMarkers err: ', err) }
}

module.exports = createMonthMarkers
