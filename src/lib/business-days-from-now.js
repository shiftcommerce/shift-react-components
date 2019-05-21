// Libraries
import addDays from 'date-fns/add_days'
import eachDay from 'date-fns/each_day'
import isWeekend from 'date-fns/is_weekend'

export default function businessDaysFromNow (days) {
  // Convert number of days to integer
  const parsedDays = parseInt(days)

  // Calculate start date
  const startDate = new Date(Date.now())

  // Calculate end date (startDate + days)
  const endDate = addDays(startDate, parsedDays)

  // Create a range of all dates from startDate to endDate
  const rangeOfDays = eachDay(startDate, endDate)

  // Filter through the range and remove any non-business days
  const removeWeekends = rangeOfDays.filter(date => !isWeekend(date))

  // return the correct business date
  return removeWeekends.pop()
}
