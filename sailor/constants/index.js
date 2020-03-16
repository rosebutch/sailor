// how many days in each month (not including leap year)
const monthData = [{name: 'January', days: 31},{name: 'February', days: 28},{name: 'March', days: 31},{name: 'April', days: 30},{name: 'Mary', days: 31},{name: 'June', days: 30},{name: 'July', days: 31},{name: 'August', days: 31},{name: 'September', days: 30},{name: 'October', days: 31},{name: 'November', days: 30},{name: 'December', days: 31}]

const signs = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces']

const planetMarkers = {sun: {key: 'sun', color: '#f797cf'},moon:{key:'moon', color: '#faee70'}, mercury: {key: 'mercury', color: '#5b7fd9'},venus: {key: 'venus', color: '#f5b53d'},mars:{key: 'mars', color: '#d91616' }, jupiter: {key: 'jupiter', color: '#3ea135'},saturn:{key: 'saturn', color: '#7040b3' },uranus:{key: 'uranus', color: '#0b2773' },neptune:{key: 'neptune', color: '#238c83' },pluto:{key: 'pluto', color: '#000000'}}

const horoscopeBank = {planet: {sun: 'the main vibe today is ' ,moon:'you might be feeling a bit ', mercury: 'communications are ',venus: 'the aesthetic today is ',mars: 'your conflicts today are ', jupiter: "you're extra lucky when you're ",saturn: "you feel restricted when you're ",uranus: 'earth-shatteringly ', neptune: 'ethereally ', pluto: 'powerfully '}, sign: {aries: 'impulsive', taurus: 'decadent',gemini:'witty', cancer: 'weepy', leo: 'dramatique', virgo: 'critical', libra: 'flirty', scorpio: 'edgy', sagittarius: 'restless', capricorn: 'ambitious', aquarius: 'alien', pisces: 'dreamy'}}

// fullstack chicago location
const CHI_LONG = -87.639150
const CHI_LAT = 41.895385

module.exports = {
  monthData, CHI_LONG, CHI_LAT, planetMarkers, signs, horoscopeBank
}
