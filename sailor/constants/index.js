// how many days in each month (not including leap year)
const monthData = [{name: 'January', days: 31},{name: 'February', days: 28},{name: 'March', days: 31},{name: 'April', days: 30},{name: 'Mary', days: 31},{name: 'June', days: 30},{name: 'July', days: 31},{name: 'August', days: 31},{name: 'September', days: 30},{name: 'October', days: 31},{name: 'November', days: 30},{name: 'December', days: 31}]

// fullstack chicago location
const CHI_LONG = -87.639150
const CHI_LAT = 41.895385

module.exports = {
  monthData, CHI_LONG, CHI_LAT,
}
