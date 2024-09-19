import s from "./Registration.module.css";

export const Registration = () => {
  return (
    <div className={s.wrapper}>
      <form action="" method="post" className={s.form}>
        <label htmlFor="userName" className={s.lable_name}>
          Full name
          <input
            type="text"
            name="userName"
            placeholder="John Doe"
            className={s.input_name}
            id="userName"
          />
        </label>
        <label htmlFor="email" className={s.lable_email}>
          Email
          <input
            type="email"
            name="userEmail"
            placeholder="john.doe@gmail.com"
            className={s.input_email}
            id="email"
          />
        </label>
        <label htmlFor="userBirth" className={s.lable_date}>
          Date of birth
          <input
            type="date"
            className={s.input_date}
            name="userBirth"
            id="userBirth"
          />
        </label>

        <p className={s.title_radio}>Where did you hear about this event?</p>

        <div className={s.wrapper_radio}>
          <label htmlFor="socialMedia" className={s.radio}>
            <input
              type="radio"
              name="event"
              value="Social media"
              id="socialMedia"
            />
            Social media
          </label>

          <label htmlFor="friends" className={s.radio}>
            <input type="radio" name="event" value="Friends" id="friends" />
            Friends
          </label>

          <label htmlFor="foundMyself" className={s.radio}>
            <input
              type="radio"
              name="event"
              value="Found myself"
              id="foundMyself"
            />
            Found myself
          </label>
        </div>
        <button className={s.btn} type="submit">Submit</button>
      </form>
    </div>
  );
};
