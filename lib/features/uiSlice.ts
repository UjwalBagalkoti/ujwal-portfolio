import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Theme = "light" | "dark";
export type ProjectCategory = "All" | "Full-Stack" | "Front End" | "AI/ML" | "Fintech";

interface UiState {
  theme: Theme;
  projectFilter: ProjectCategory;
}

const initialState: UiState = {
  theme: "light",
  projectFilter: "All",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<Theme>) {
      state.theme = action.payload;
    },
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setProjectFilter(state, action: PayloadAction<ProjectCategory>) {
      state.projectFilter = action.payload;
    },
  },
});

export const { setTheme, toggleTheme, setProjectFilter } = uiSlice.actions;
export default uiSlice.reducer;
