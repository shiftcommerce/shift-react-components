// Libraries
import addDays from 'date-fns/add_days'
import isWeekend from 'date-fns/is_weekend'

export default function businessDaysFromNow (days) {
  // Convert number of days to integer
  const parsedDays = parseInt(days)

  // Calculate start date
  const startDate = new Date(Date.now())

  // Calculate end date (startDate + parsedDays)
  let endDate = addDays(startDate, parsedDays)

  // Iterate over endDate, increasing by 1 day until it is a business day (Mon - Fri)
  while (isWeekend(endDate)) {
    endDate = addDays(endDate, 1)
  }

  return endDate
}
