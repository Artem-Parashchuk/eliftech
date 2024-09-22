import { createAsyncThunk } from "@reduxjs/toolkit";

export const submitFormThunk = createAsyncThunk(
  "form/submitForm",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await fetch("https://server-m5v2.onrender.com/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Відправка форми у форматі JSON
      });

      if (!res.ok) {
        throw new Error("Server error!"); // Обробка помилки відповіді сервера
      }

      const data = await res.json();
      return data; // Повертаємо дані, отримані від сервера
    } catch (error) {
      return rejectWithValue(error.message); // Відправляємо помилку в разі невдачі
    }
  }
);
