const { monthData }  = require('../constants')

const checkLeapYear = (monthInfo, year) => {
  if (monthInfo.name === 'February' && year % 4 === 0) monthInfo.days += 1
  return monthInfo.days
}

const makeDateStr = (year, month, day) => {
  let dayStr = `${day}`
  if (dayStr.length === 1) dayStr = `0${dayStr}`
  let monthStr = `${month + 1}`
  if (monthStr.length === 1) monthStr = `0${monthStr}`
  return `${year}-${monthStr}-${dayStr}`
}

const getLastDayMonthBefore = date => {
  let year = date.year
  let prevMonth = date.month - 1
  if (prevMonth < 0) {
    prevMonth = 11
    year -= 1
  }
  const before = monthData[prevMonth]
  let lastDay = checkLeapYear(before, date.year)
  return {day: lastDay, month: prevMonth, year}
}

module.exports = {
  checkLeapYear,
  makeDateStr,
  getLastDayMonthBefore
}
