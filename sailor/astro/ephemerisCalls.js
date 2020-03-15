// modules
const ephemeris = require('ephemeris');
const Moment = require('moment');
const { monthData, CHI_LONG, CHI_LAT }  = require('../constants')
const { checkLeapYear, makeDateStr, getLastDayMonthBefore} = require('./calendarChecks')

// parameters: ephemeris.getAllPlanets(dateObj, longitude, latitude, height);

const getPlanets = dateObj => {
  return new Promise((resolve, reject) => {
    const planets = ephemeris.getAllPlanets(dateObj, CHI_LONG, CHI_LAT, 0)
    if (planets.observed) {
      resolve(planets)
    } else {
      const err = new Error('i will never make any promises ever again')
      reject(err)
    }
  })
}

const getDayEph = async day => {
  try {
    const dateObj = new Moment(day)
    const { observed } = await getPlanets(dateObj)
    return observed
  } catch(err) {console.log('making promise did not work')}
}

const getMonthEph = async dateInput => {
  try {
    const date = {...dateInput}
    const month = monthData[date.month]
    const totalDays = checkLeapYear(month, date.year)
    const monthEph = []
    for (let i = 1; i <= totalDays; i++) { // gets the ephemeris data for each day of the month
      date.day = i
      const planets = await getDayEph(date)
      const dateStr = makeDateStr(date.year, date.month, date.day)
      monthEph.push({dateStr, planets})
    }
    const lastDayMonthBefore = getLastDayMonthBefore(date)
    const lastDayPlanets = await getDayEph(lastDayMonthBefore)
    const lastDayDateStr = makeDateStr(lastDayMonthBefore.year, lastDayMonthBefore.month, lastDayMonthBefore.day)
    monthEph.unshift({dateStr: lastDayDateStr, planets: lastDayPlanets})
    return monthEph
  } catch (err) { console.log('getMonthEph err: ', err) }
}

module.exports = {
  getDayEph,
  getMonthEph
}
