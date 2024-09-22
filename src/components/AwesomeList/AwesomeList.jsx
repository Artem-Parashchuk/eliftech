import { useDispatch, useSelector } from "react-redux";
import {
  selectFilteredUsers,
  selectUsers,
  selectUsersError,
  selectUsersLoading,
} from "../../redux/users/selectors.js";
import { fetchUsersThunk } from "../../redux/users/thunks.js";
import { AwesomeItem } from "../AwesomeItem/AwesomeItem.jsx";
import s from "./AwesomeList.module.css";
import { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader.jsx";

export const AwesomeList = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Локальний стан для пошукового запиту
  const users = useSelector(selectUsers);
  const loading = useSelector(selectUsersLoading);
  const error = useSelector(selectUsersError);
  const filters = useSelector(selectFilteredUsers)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersThunk());
  }, [dispatch]);

  // Обробник зміни для текстового поля
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Фільтрація користувачів за ім'ям та імейлом
  const filteredUsers = users?.data?.filter((user) => {
    const userName = user.userName.toLowerCase();
    const userEmail = user.userEmail.toLowerCase();
    const searchValue = searchTerm.toLowerCase();
    return (
      userName.includes(searchValue) || userEmail.includes(searchValue)
    );
  });

  if (error) {
    return (
      <p className={s.error_message}>
        Sorry, something went wrong. We are working on it.
      </p>
    );
  }

  if (loading || !users || !users.data || users.data.length === 0) {
    return <Loader />;
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name or email"
        value={searchTerm}
        onChange={handleSearchChange}
        className={s.search_input} // Додай клас для стилізації
      />
      <ul className={s.list}>
        {filteredUsers.map((user) => (
          <AwesomeItem key={user._id} user={user} />
        ))}
      </ul>
    </div>
  );
};
