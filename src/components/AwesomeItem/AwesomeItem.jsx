import s from './AwesomeItem.module.css'

export const AwesomeItem = ({user}) => {
  return (<>
    <li className={s.item}>
        <h3 className={s.title}>{user.userName}</h3>
        <p className={s.email}>{user.userEmail}</p>
    </li>
  </>
  )
}
