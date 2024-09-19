
import { EventList } from '../../components/EventList/EventList'
import s from './Home.module.css'

export const Home = () => {
  return (
    <div className={s.home}>
      <h1 className={s.title}>Events</h1>
      <EventList/>
    </div>
  )
}
