import s from './AwesomeItem.module.css'

export const AwesomeItem = ({user}) => {
  return (<>
    <li className={s.item}>
        <h3 className={s.title}>{user.name}</h3>
        <p className={s.email}>{user.email}</p>
    </li>
  </>
  )
}
