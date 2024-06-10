import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const search = createSlice({
  name: 'gameSearch',
  initialState: "",
  reducers: {
    change: (state,action: PayloadAction<string>) => {
      return action.payload
    }
  }
})

export const {change} = search.actions;
export default search.reducer;