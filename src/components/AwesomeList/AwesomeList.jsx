import { useDispatch, useSelector } from "react-redux";

import {
  selectUsers,
  selectUsersError,
  selectUsersLoading,
} from "../../redux/users/selectors.js";
import { fetchUsersThunk } from "../../redux/users/thunks.js";

import { AwesomeItem } from "../AwesomeItem/AwesomeItem.jsx";
import s from "./AwesomeList.module.css";
import { useEffect } from "react";
import { Loader } from "../Loader/Loader.jsx";

export const AwesomeList = () => {
  const users = useSelector(selectUsers);
  const loading = useSelector(selectUsersLoading);
  const error = useSelector(selectUsersError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersThunk());
  }, [dispatch]);


  if (error) {
   return <p className={s.error_message}>
      Sorry, something went wrong. We are working on it.
    </p>;
  }

  if (loading || !users || !users.data || users.data.length === 0) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <ul className={s.list}>
      {users.data.map((user) => {
        return <AwesomeItem key={user._id} user={user} />;
      })}
    </ul>
  );
};
