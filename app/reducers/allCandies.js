import axios from "axios";

const GOT_CANDIES = "GOT_CANDIES";

const gotCandies = (candies) => ({ type: GOT_CANDIES, candies });

/*
  state = {
    allCandies: []
  }
*/
const initialState = [];

export const getCandies = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/candies");
      dispatch(gotCandies(data));
    } catch (error) {
      console.error(error);
    }
  };
};

const allCandiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CANDIES:
      return action.candies;
    default:
      return state;
  }
};

export default allCandiesReducer;
