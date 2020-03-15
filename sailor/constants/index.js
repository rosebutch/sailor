// how many days in each month (not including leap year)
const monthData = [{name: 'January', days: 31},{name: 'February', days: 28},{name: 'March', days: 31},{name: 'April', days: 30},{name: 'Mary', days: 31},{name: 'June', days: 30},{name: 'July', days: 31},{name: 'August', days: 31},{name: 'September', days: 30},{name: 'October', days: 31},{name: 'November', days: 30},{name: 'December', days: 31}]

const signs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']

const signData = signs.map((sign, index) => {
  return {
    name: sign,
    minDegree: index * 30,
    maxDegree: (index + 1) * 30
  }
})

const planetMarkers = {sun: {key: 'sun', color: '#f797cf'},moon:{key:'moon', color: '#faee70'}, mercury: {key: 'mercury', color: '#5b7fd9'},venus: {key: 'venus', color: '#f5b53d'},mars:{key: 'mars', color: '#d91616' }, jupiter: {key: 'jupiter', color: '#3ea135'},saturn:{key: 'saturn', color: '#2e227d' },uranus:{key: 'uranus', color: '#0b2773' },neptune:{key: 'neptune', color: '#238c83' },pluto:{key: 'pluto', color: '#000000'}}


// fullstack chicago location
const CHI_LONG = -87.639150
const CHI_LAT = 41.895385

module.exports = {
  monthData, CHI_LONG, CHI_LAT, signData, planetMarkers, signs
}
