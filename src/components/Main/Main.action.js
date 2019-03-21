export const FETCH_SONGS_BEGIN = "FETCH_SONGS_BEGIN";
export const FETCH_SONGS_SUCCESS = "FETCH_SONGS_SUCCESS";
export const FETCH_SONGS_FAILURE = "FETCH_SONGS_FAILURE";

export const fetchSongs = () => {
  const API = "https://glacial-escarpment-40412.herokuapp.com/songs";

  return dispatch => {
    dispatch({ type: FETCH_SONGS_BEGIN });
    fetch(API)
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: FETCH_SONGS_SUCCESS,
          payload: res
        });
      })
      .catch(err =>
        dispatch({
          type: FETCH_SONGS_FAILURE,
          payload: err
        })
      );
  };
};
