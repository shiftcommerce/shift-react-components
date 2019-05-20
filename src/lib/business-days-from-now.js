// Libraries
import { addDays, eachDay, isWeekend } from 'date-fns'

export default function businessDaysFromNow (days) {
  const parsedDays = parseInt(days)
  const startDate = new Date(Date.now())
  const endDate = addDays(startDate, parsedDays)
  const rangeOfDays = eachDay(startDate, endDate)
  const removeWeekends = rangeOfDays.filter(date => !isWeekend(date))

  return removeWeekends.length
}