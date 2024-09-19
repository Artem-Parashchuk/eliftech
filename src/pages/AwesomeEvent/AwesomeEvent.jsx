import { AwesomeList } from "../../components/AwesomeList/AwesomeList";
import s from "./AwesomeEvent.module.css";

export const AwesomeEvent = () => {
  return (
    <div className={s.awesome_container}>
      <h1 className={s.title}>Awesome Event</h1>
      <AwesomeList/>
    </div>
  );
};
