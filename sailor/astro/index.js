const { getDayEph } = require('./ephemerisCalls')
const createMonthMarkers = require('./monthMarkers')
const { signs } = require('../constants')

// note- future features will require the use of some library to convert user location input to lat, long
// future backend will use google firebase oauth and nosql db to keep track of user data

const getSign = degree => {
  const i = Math.floor(degree/30)
  return signs[i]
}

module.exports = { createMonthMarkers, getDayEph, getSign }
