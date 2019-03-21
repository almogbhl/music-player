import {
  FETCH_SONGS_BEGIN,
  FETCH_SONGS_SUCCESS,
  FETCH_SONGS_FAILURE
} from "./Main.action";

import { CHOOSE_SONG } from "./SongsList/List/Song/Song.action";

import { PLAY_QUOTE } from "./YoutubePlayer/QuotesBox/Quote/Quote.action";

import { FILTER_LIST } from "./SongsList/SearchBar/SearchBar.action";

let initialState = {
  original_list: null,
  displayed_list: null,
  isLoading: false,
  errMsg: "",
  choosen_song: null,
  timing: "0"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SONGS_BEGIN:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_SONGS_SUCCESS:
      return {
        ...state,
        original_list: action.payload,
        displayed_list: action.payload,
        choosen_song: action.payload[0]
      };
    case FETCH_SONGS_FAILURE:
      return {
        ...state,
        errMsg: "loading failed!"
      };

    case CHOOSE_SONG:
      return {
        ...state,
        choosen_song: action.payload
      };

    case PLAY_QUOTE:
      return {
        ...state,
        timing: action.payload
      };

    case FILTER_LIST:
      return {
        ...state,
        displayed_list: action.payload
      };

    default:
      return state;
  }
};
