import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";

interface UIState {
  language: string,
  homeButtonsVisible: boolean,
  loginVisible: boolean,
  signUpVisible: boolean
}

const initialState: UIState = {
  language: "en",
  homeButtonsVisible: true,
  loginVisible: false,
  signUpVisible: false
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    setHomeLayersVisibility: (state, action: PayloadAction<string>) => {
      state.homeButtonsVisible = action.payload === "homeButtons";
      state.loginVisible = action.payload === "login";
      state.signUpVisible = action.payload === "signUp"
    }
  }
});

export const {
  setLanguage,
  setHomeLayersVisibility
} = uiSlice.actions;

export const selectLanguage = (state: RootState) => state.ui.language;
export default uiSlice.reducer;
