import { createSlice } from "@reduxjs/toolkit";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

const initialState = {
  cat: {
    fantasy: fantasy,
    history: history,
    horror: horror,
    romance: romance,
    scifi: scifi,
  },
  selected: "fantasy",
  searchResult: [],
  searchResultById: {},
  isLoading: false,
  currentAsin: "",
  commentState: "",
};

export const booksList = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    setSelected: (state, action) => {
      state.selected = action.payload
      //state.searchResult = state.cat[action.payload]
    },
    searchData: (state,action) => {
      state.searchResult = state.cat[state.selected].filter((book) => book.title.toLowerCase().includes(action.payload.toLowerCase()))
      state.currentAsin = ""
    },
    searchDataByAsin: (state,action) => {
      state.searchResultById = state.cat[state.selected].filter((book) => book.asin.includes(action.payload))
      state.searchResultById = state.searchResultById[0]
    },
    setCurrentAsin: (state,action) => {
      state.currentAsin = action.payload
    },
    setIsLoading: (state,action) => {
      state.isLoading = action.payload
    },
}});

// Action creators are generated for each case reducer function
export const { setSelected,searchData,isSelected, setCurrentAsin,searchDataByAsin,setIsLoading } = booksList.actions;

export default booksList.reducer;
