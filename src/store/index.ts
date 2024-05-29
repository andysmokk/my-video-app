import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../types";
import { getHomePageVideos } from "./reducers/getHomePageVideos";

const initialState: InitialState = {
  videos: [],
  currentPlaying: null,
  searchTerm: "",
  searchResults: [],
  nextPageToken: null,
  recommendedVideos: [],
};

const YoutubeSlice = createSlice({
  name: "Youtube clone",
  initialState,
  reducers: {
    clearVideos: (state) => {
      state.videos = [];
      state.nextPageToken = null;
    },
    changeSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getHomePageVideos.fulfilled, (state, action) => {
      state.videos = action.payload.parsedData;
      state.nextPageToken = action.payload.nextPageToken;
    });
  },
});

export const store = configureStore({
  reducer: {
    youtubeApp: YoutubeSlice.reducer,
  },
});

export const { clearVideos, changeSearchTerm } = YoutubeSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
