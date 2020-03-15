const { getDayEph } = require('./ephemerisCalls')
const createMonthMarkers = require('./monthMarkers')

// note- future features will require the use of some library to convert user location input to lat, long
// future backend will use google firebase oauth and nosql db to keep track of user data

module.exports = { createMonthMarkers, getDayEph }
