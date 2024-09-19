

import { AwesomeItem } from '../AwesomeItem/AwesomeItem'
import s from './AwesomeList.module.css'

export const AwesomeList = () => {
  return (
    <ul className={s.list}><AwesomeItem/></ul>
  )
}
