import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { gameObj } from "../types";
import games from '@/app/games.json';

export const gameList = createSlice({
  name: 'gameSearch',
  initialState: games,
  reducers: {
    updateGames: (state,action: PayloadAction) => {
      return action.payload
    }
  }
})

export const {updateGames} = gameList.actions;
export default gameList.reducer;