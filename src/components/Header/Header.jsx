import { Link } from "react-router-dom";
import s from "./Header.module.css";
import logo from '../../assets/logo-color.svg'

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header_content}>
        <Link className={s.link} to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
    </header>
  );
};
