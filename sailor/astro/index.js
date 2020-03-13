// modules
const ephemeris = require('ephemeris');
const Moment = require('moment');
const {monthData, CHI_LONG, CHI_LONG}  = require('./constants')

// note- future features will require the use of some library to convert user location input to lat, long
// future backend will use google firebase oauth and nosql db to keep track of user data

// parameters: ephemeris.getAllPlanets(dateObj, longitude, latitude, height);

const makeMoment = (dateStr, day) => {
  let dayStr = `${day}`
  if (dayStr.length === 1) dayStr = `0${dayStr}`
  const fullDateStr = `${dateStr}-${dayStr}`
  return new Moment(fullDateStr)
}

const getMonthEph = day => {
  const {days} = monthData[day.month - 1]
  const YYYY_MM = day.dateStr.slice(0, 7)
  const monthEph = []
  let dateObj, eph
  for (let i = 1; i <= days; i++) {
    dateObj = makeMoment(YYYY_MM, i)
    eph = ephemeris.getAllPlanets(dateObj, CHI_LONG, CHI_LAT, 0)
    monthEph.push(eph)
  }
  return monthEph
}

const getDayEph = dateStr => {
  const dateObj = new Moment(dateStr)
  return ephemeris.getAllPlanets(dateObj, CHI_LONG, CHI_LAT, 0)
}

module.exports = { getMonthEph, getDayEph }
