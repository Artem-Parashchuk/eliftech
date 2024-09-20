import { Link } from "react-router-dom";
import s from "./EventItem.module.css";

export const EventItem = ({ event }) => {
  return (
    <li className={s.item}>
      <h3 className={s.title}>{event.title}</h3>
      <p className={s.description}>{event.description}</p>
      <div className={s.item_bottom}>
        <p className={s.organizer}>{event.organizer}</p>
        <p className={s.date}>{event.date}</p>
      </div>
      <div className={s.item_links}>
        <Link to="/registration" className={s.item_link}>Register</Link>
        <Link to="/view" className={s.item_link}>View</Link>
      </div>
    </li>
  );
};
