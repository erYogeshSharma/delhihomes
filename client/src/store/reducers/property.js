import * as actionTypes from "../actionTypes";

const initialState = {
  isLoading: true,
  property: null,
  properties: [],
};

export default function messageReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_PROPERTY:
      return { ...state, property: action.payload };
    case actionTypes.GET_PROPERTIES:
      return { ...state, properties: action.payload.data, currentPage: action.payload.currentPage, numberOfPages: action.payload.numberOfPages };
    case actionTypes.DELETE_PROPERTY:
      return { ...state, properties: state.properties.filter((property) => property._id !== action.payload) };
    case actionTypes.UPDATE_PROPERTY:
      return { ...state, properties: state.properties.map((property) => (property._id === action.payload._id ? action.payload : property)) };
    case actionTypes.CREATE_PROPERTY:
      return { ...state, properties: [...state.properties, action.payload] };
    default:
      return state;
  }
}
