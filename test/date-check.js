import { events } from './dummy-data.js'
const DAY_IN_MS = 86400000 // 24 hours
const today = new Date()
const todayDay = today.getDate()
const todayMonth = today.getMonth()
// old
let pastEventsFiltered = events
.sort((ev1, ev2) => ev1.startTimeStamp < ev2.startTimeStamp ? -1 : 1)
.filter(event => {
  const { startTimeStamp, endTimeStamp } = event
  if (endTimeStamp) {
    const endDate = new Date(endTimeStamp)
    const endDay = endDate.getDate()
    const endMonth = endDate.getMonth()
    return !(endDay < todayDay && endMonth <= todayMonth)
  }
  const startDate = new Date(startTimeStamp)
  const startDay = startDate.getDate()
  const startMonth = startDate.getMonth()
  if (startDay < todayDay && startMonth <= todayMonth) return false
  return true
})

// new
let pastEventsFiltered2 = events
.sort((ev1, ev2) => ev1.startTimeStamp < ev2.startTimeStamp ? -1 : 1)
.filter(event => {
  const { startTimeStamp, endTimeStamp } = event
  if (endTimeStamp) {
    const endDate = new Date(endTimeStamp)
    if ((endDate + DAY_IN_MS) < today) return false
  }
  const startDate = new Date(startTimeStamp)
  if ((startDate + DAY_IN_MS) < today) return false
  return true
})
