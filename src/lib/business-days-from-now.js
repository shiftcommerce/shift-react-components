// Libraries
import moment from 'moment-business-days'

moment.locale('en-gb')

export default function businessDaysFromNow (days) {
  return moment(Date.now()).businessAdd(days)
}
