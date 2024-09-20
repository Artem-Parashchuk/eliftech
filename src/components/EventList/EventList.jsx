import { useSelector } from "react-redux";

import {
  selectEvents,
  selectEventLoading,
  selectEventError,
} from "../../redux/events/selectors.js";

import { EventItem } from "../EventItem/EventItem.jsx";
import { Loader } from "../Loader/Loader.jsx";

import s from "./EventList.module.css";

export const EventList = () => {
  const events = useSelector(selectEvents);
  const loading = useSelector(selectEventLoading);
  const error = useSelector(selectEventError);

  if (error) {
    return (
      <p className={s.error_message}>
        Sorry, something went wrong. We are working on it.
      </p>
    );
  }

  if (loading || !events || !events.data || events.data.length === 0) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <ul className={s.list}>
      {events.data.map((event) => {
        return <EventItem key={event._id} event={event} />;
      })}
    </ul>
  );
};
