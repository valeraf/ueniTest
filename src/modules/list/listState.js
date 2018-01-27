import {
  LOAD_START,
  LOAD_SUCCESS,
  LOAD_REVIEWS_SUCCESS
} from "../../redux/actions";

const initialState = {
  loading: false,
  payload: [],
  categories: []
};

const listState = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_START:
      return { ...state, loading: true };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        payload: action.data.payload,
        categories: action.data.categories
      };
    case LOAD_REVIEWS_SUCCESS:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default listState;
