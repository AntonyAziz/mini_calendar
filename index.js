const MONTH_NAME = document.getElementById('month-name')
const DAY_NAME = document.getElementById('day-name')
const DAY_NUMBER = document.getElementById('day-number')
const YEAR = document.getElementById('year')

const date = new Date()

MONTH_NAME.innerText = date.toLocaleDateString('en', {month:'long'})
DAY_NAME.innerText = date.toLocaleDateString('en', {weekday: 'long'})
DAY_NUMBER.innerText = date.getDate()
YEAR.innerText = date.getFullYear()