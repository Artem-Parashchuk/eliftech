
import { events } from '../../assets/db'
import { EventItem } from '../EventItem/EventItem'
import s from './EventList.module.css'

export const EventList = () => {
  return (
    <ul className={s.list}>
        {
            events.map(event => {
                return <EventItem  key={event.id} event={event}/>
            })
        }
    </ul>
  )
}
