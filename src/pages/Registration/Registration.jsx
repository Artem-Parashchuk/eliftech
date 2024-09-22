import { useState } from "react";
import DatePicker from "react-datepicker"; // Імпорт DatePicker
import "react-datepicker/dist/react-datepicker.css"; // Стилі для DatePicker
import { useDispatch } from "react-redux";
import { submitFormThunk } from "../../redux/form/formThunks.js";
import s from "./Registration.module.css";

export const Registration = () => {
  // Стан для збереження помилок
  const [errors, setErrors] = useState({});
  
  // Стан для даних форми
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userBirth: null, // Дата має бути null за замовчуванням
    event: "",
  });

  const dispatch = useDispatch();

  // Обробник змін в полях форми
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Функція для валідації даних форми
  const validate = () => {
    const newErrors = {};
    let isValid = true;

    // Перевірка імені
    if (formData.userName.trim().length < 2) {
      newErrors.userName = "Name must be at least 2 characters long.";
      isValid = false;
    }

    // Перевірка email (основний шаблон)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.userEmail)) {
      newErrors.userEmail = "Please enter a valid email address.";
      isValid = false;
    }

    // Перевірка дати народження
    if (!formData.userBirth) {
      newErrors.userBirth = "Date of birth is required.";
      isValid = false;
    }

    // Перевірка джерела події
    if (!formData.event) {
      newErrors.event = "Please select where you heard about the event.";
      isValid = false;
    }

    setErrors(newErrors); // Зберігаємо помилки
    return isValid; // Повертаємо true, якщо форма валідна
  };

  // Обробник відправки форми
  const handleSubmit = (e) => {
    e.preventDefault();

    // Якщо валідація пройшла, відправляємо дані форми
    if (validate()) {
      dispatch(submitFormThunk(formData));

      // Очищаємо поля форми
      setFormData({
        userName: "",
        userEmail: "",
        userBirth: null, // Повертаємо дату в null
        event: "",
      });
    }
  };

  // Обробник зміни дати
  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      userBirth: date, // Оновлюємо дату в стані
    });
  };

  return (
    <div className={s.wrapper}>
      <form onSubmit={handleSubmit} className={s.form}>
        <label htmlFor="userName" className={s.lable_name}>
          Full name
          <input
            type="text"
            name="userName"
            placeholder="John Doe"
            className={s.input_name}
            id="userName"
            value={formData.userName}
            onChange={handleChange}
            required
            maxLength={25}
          />
          {errors.userName && <p className={s.error}>{errors.userName}</p>}
        </label>

        <label htmlFor="email" className={s.lable_email}>
          Email
          <input
            type="email"
            name="userEmail"
            placeholder="john.doe@gmail.com"
            className={s.input_email}
            id="email"
            value={formData.userEmail}
            onChange={handleChange}
            maxLength={25}
            required
          />
          {errors.userEmail && <p className={s.error}>{errors.userEmail}</p>}
        </label>

        <label htmlFor="userBirth" className={s.lable_date}>
          Date of birth
          <DatePicker
            selected={formData.userBirth}
            onChange={handleDateChange} 
            className={s.input_date} 
            dateFormat="yyyy-MM-dd" 
            placeholderText="Select your birth date" 
            maxDate={new Date()} 
            showYearDropdown 
            scrollableYearDropdown 
          />
          {errors.userBirth && <p className={s.error}>{errors.userBirth}</p>}
        </label>

        <p className={s.title_radio}>Where did you hear about this event?</p>

        <div className={s.wrapper_radio}>
          <label htmlFor="socialMedia" className={s.radio}>
            <input
              type="radio"
              name="event"
              value="Social media"
              id="socialMedia"
              checked={formData.event === "Social media"}
              onChange={handleChange}
            />
            Social media
          </label>

          <label htmlFor="friends" className={s.radio}>
            <input
              type="radio"
              name="event"
              value="Friends"
              id="friends"
              checked={formData.event === "Friends"}
              onChange={handleChange}
            />
            Friends
          </label>

          <label htmlFor="foundMyself" className={s.radio}>
            <input
              type="radio"
              name="event"
              value="Found myself"
              id="foundMyself"
              checked={formData.event === "Found myself"}
              onChange={handleChange}
            />
            Found myself
          </label>
        </div>
        {errors.event && <p className={s.error}>{errors.event}</p>}

        <button className={s.btn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
