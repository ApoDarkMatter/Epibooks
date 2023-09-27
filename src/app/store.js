import { configureStore } from "@reduxjs/toolkit";
import booksList from "../reducers/booksList";

export const store = configureStore({
  reducer: {
    books: booksList,
  },
});
