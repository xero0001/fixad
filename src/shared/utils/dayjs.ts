import _dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
_dayjs.extend(utc)
_dayjs.extend(timezone)
_dayjs.tz.setDefault('Asia/Seoul')

export function kdayjs(params?: any) {
  return _dayjs(params).tz()
}
