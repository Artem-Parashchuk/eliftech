import { InfinitySpin } from "react-loader-spinner";
import s from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={s.wrap_loader}>
      <div className={s.loader}>
        <InfinitySpin
          width="200"
          color="#127cde"
        />
      </div>
    </div>
  );
};